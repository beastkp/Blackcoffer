const mongoose = require("mongoose");

const chartSchema = new mongoose.Schema({
  intensity: {
    type: String,
  },
  likelihood: {
    type: String,
  },
  relevance: {
    type: String,
  },
  country: {
    type: String,
  },
  topic: {
    type: String,
  },
  region: {
    type: String,
  },
  sector: {
    type: String,
  },
  year: {
    type: String,
  },
});

module.exports = mongoose.model('Chart',chartSchema);
