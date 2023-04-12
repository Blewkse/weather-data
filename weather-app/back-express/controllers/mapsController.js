const mapsService = require("../services/mapsService");

module.exports = {
  getAllData: async (req, res) => {
    const data = await mapsService.getAllData();
    console.log(data);
    res.status(200).json({ success: true, data: data });
  },
};
