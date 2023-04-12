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
