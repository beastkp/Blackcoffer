const Chart = require("../models/chart");
const fs = require("fs")

const rawData = fs.readFileSync('./data.json','utf-8');
const data = JSON.parse(rawData);

const itemsToInsert = data.items;

const insertMany = async ()=>{
    try {
        await Chart.insertMany(itemsToInsert);
        console.log("Data Inserted Successfully");
    } catch (error) {
        console.log(error);
    }
}


module.exports = {insertMany};