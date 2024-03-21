const fs = require("fs");
const jsondata = "./jsondata.json";

// Intensity
// Likelihood
// Relevance
// Year
// Country
// Topics
// Region
// City

const rawData = fs.readFileSync(jsondata, "utf-8");
const data = JSON.parse(rawData);
const items = data.map((item) => {
  const newitems = {
    intensity: item.intensity,
    likelihood: item.likelihood,
    relevance: item.relevance,
    country: item.country,
    topic: item.topic,
    region: item.region,
    sector: item.sector,
    year:item.added
  };
  return newitems;
});

// console.log(items);

const newData = JSON.stringify(items);
fs.writeFileSync('./data.json',newData);


