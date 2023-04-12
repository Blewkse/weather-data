const express = require("express");
const router = express.Router();
const mapsController = require("../controllers/mapsController");

router.route("/maps/getAll").get(mapsController.getAllData);
router.route("/maps/getFrance").get(mapsController.getFranceData);

module.exports = router;
