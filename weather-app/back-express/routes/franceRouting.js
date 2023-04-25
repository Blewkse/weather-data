const express = require("express");
const router = express.Router();
const mapsController = require("../controllers/mapsController");

router.route("/all").get(mapsController.getFranceData);
router.route("/temp").get(mapsController.getFranceTempData);
router.route("/prec").get(mapsController.getFrancePrecData);

module.exports = router;
