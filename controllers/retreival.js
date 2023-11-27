const Chart = require("../models/chart");

const analysis = async (req, res) => {
  try {
    // const countryName = req.query.countryName;
    // const data = await Chart.find({country:countryName}) 
    const data = await Chart.find(req.query);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { analysis };
