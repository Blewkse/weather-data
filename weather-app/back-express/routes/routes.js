const express = require("express");
const router = express.Router();
const mapsController = require("../controllers/mapsController");
const franceRouting = require("./franceRouting")


router.route("/maps/getAll").get(mapsController.getAllData);
router.use("/maps/france", franceRouting);

module.exports = router;
