const mapsService = require("../services/mapsService");

module.exports = {
  getAllData: async (req, res) => {
    const data = await mapsService.getAllData();
    res.status(200).json({ success: "true", data: data });
  },
  getFranceData: async (req, res) => {
    const result = await mapsService.getFranceData();
    res.status(200).json({ success: "true", data: result });
  },
  getFranceTempData: async (req, res) => {
    const result = await mapsService.getFranceTempData();
    console.log(result);
    res.status(200).json({ success: "true", data: result });
  },
  getFrancePrecData: async (req, res) => {
    const result = await mapsService.getFrancePrecData();
    console.log(result);
    res.status(200).json({ success: "true", data: result });
  },
};
