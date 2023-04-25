const data = require("../models/mapsModel");

exports.getAllData = async () => {
  return new Promise((resolve, reject) => {
    data
      .find()
      .then((result) => {
        console.log("requete effectue");
        console.log(result);
        resolve(result);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

exports.getFranceData = async () => {
  return new Promise((resolve, reject) => {
    data
      .find({
        "position.coordinates": {
          $geoWithin: { $centerSphere: [[46.625, 2.51], 550 / 3963.2] },
        },
      })
      .select("position.coordinates")
      .then((result) => {
        console.log("requete effectue");
        resolve(result);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
exports.getFranceTempData = async () => {
  return new Promise((resolve, reject) => {
    data
      .find({
        "position.coordinates": {
          $geoWithin: { $centerSphere: [[46.625, 2.51], 550 / 3963.2] },
        },
      })
      .select("position.coordinates airTemperature.value")
      .then((result) => {
        console.log("requete effectue");
        resolve(result);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
exports.getFrancePrecData = async () => {
  return new Promise((resolve, reject) => {
    data
      .find({
        "position.coordinates": {
          $geoWithin: { $centerSphere: [[46.625, 2.51], 550 / 3963.2] },
        },
        "precipitationEstimatedObservation.estimatedWaterDepth": {
          $gt: 1,
        },
      })
      .select(
        "position.coordinates precipitationEstimatedObservation.estimatedWaterDepth"
      )
      .then((result) => {
        console.log("requete effectue");
        resolve(result);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
