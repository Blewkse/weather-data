const express = require("express");
const router = express.Router();
const mapsController = require("../controllers/mapsController");

router.route("/maps/getAll").get(mapsController.getAllData);

module.exports = router;
