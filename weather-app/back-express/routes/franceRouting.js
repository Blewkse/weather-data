const express = require("express");
const router = express.Router();
const mapsController = require("../controllers/mapsController");

router.route("/all").get(mapsController.getFranceData);
router.route("/temp").get(mapsController.getFranceData);

module.exports = router;
