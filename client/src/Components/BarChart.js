import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = ({ responseData, countries, topics, sectors }) => {
  let liklihood = new Array(countries.length).fill(0); // Initialize an array with zeros
  let finalResponse = [...responseData];
  finalResponse.forEach((item) => {
    const country = item.country;
    const countryIndex = countries.indexOf(country);
    const liklihoodItem = parseInt(item.likelihood);
    console.log("This is likelihood", liklihoodItem);

    if (countries.includes(country) && !isNaN(liklihoodItem)) {
      liklihood[countryIndex] += liklihoodItem;
    }
  });
  const Bardata = {
    labels: countries,
    datasets: [
      {
        label: "Liklihood",
        backgroundColor: "rgb(0, 0, 100)",
        borderColor: "rgb(255, 99, 132)",
        data: liklihood,
      },
    ],
  };

  console.log(liklihood);
  return (
    <div>
      <Bar data={Bardata} width={500} height={200} />
      {console.log("The response data is ", responseData)}
    </div>
  );
};

export default BarChart;
