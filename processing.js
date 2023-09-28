const fs = require("fs");
const jsondata = "./data.json";

const rawdata = fs.readFileSync(jsondata,'utf-8');
const data = JSON.parse(rawdata);

const items = data.items.reduce((total,item)=>{
    if (item.country === "Ukraine") {
      total += 1;
    }
    return total; 
},0)


//United States of America - 112
//Mexico -3
//Nigeria-6
//Lebanon-3
//Russia-25
//Saudi Arabia-18
//Angola--2
//Egypt-6
//South Africa-3
//India-19
//Ukraine-2



//country missing values  = 650/1000
//region missing values = 453/1000
//intenshity missing values = 38/1000

console.log(items);

