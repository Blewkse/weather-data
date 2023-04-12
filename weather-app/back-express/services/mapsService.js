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
