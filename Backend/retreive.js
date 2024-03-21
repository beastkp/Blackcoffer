const fs = require("fs");
const jsondata = "./data.json";
const rawData = fs.readFileSync(jsondata,'utf-8');
const data = JSON.parse(rawData);

const documents = data.items;

const Chart = require("./models/chart"); 
const insertData = async (req,res)=>{
  try {
    const result = await Chart.insertMany(documents);
    res.status(200).send({message:"Data Inserted Successfully",insertedDocuments: result})

  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(400).send({message:"Data cannot be inserted"})
  }
}

module.exports = {insertData};
