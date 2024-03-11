// RadarChart.js
import React from "react";
import Chart from "chart.js/auto";
import { Radar } from "react-chartjs-2";

const RadarChart = ({ responseData, countries, topics, sectors }) => {
  let intensities = new Array(sectors.length).fill(0);
  let finalResponse = [...responseData];
  finalResponse.forEach((item) => {
    const sector = item.sector;
    const sectorIndex = sectors.indexOf(sector);
    if (sectors.includes(sector)) {
      intensities[sectorIndex] += parseInt(item.intensity);
    }
  });

  const data = {
    labels: sectors,
    datasets: [
      {
        label: "Intensity",
        data: intensities, // Replace with your data
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Background color
        borderColor: "rgba(75, 192, 192, 1)", // Border color
        borderWidth: 2, // Border width
        pointBackgroundColor: "rgba(75, 192, 192, 1)", // Point color
        pointBorderColor: "#fff", // Point border color
        pointHoverRadius: 5, // Point hover radius
        pointHoverBackgroundColor: "rgba(75, 192, 192, 1)", // Point hover background color
        pointHoverBorderColor: "rgba(220,220,220,1)", // Point hover border color
      },
    ],
  };

  const options = {
    // Customize chart options as needed
    responsive: true,
  };

  return (
    <div className="w-[400px] h-[400px]">
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
