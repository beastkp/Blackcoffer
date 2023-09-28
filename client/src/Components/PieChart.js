import React from 'react'
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const PieChart = ({responseData,countries,topics,sectors}) => {
    let resources = new Array(topics.length).fill(0);
    let finalResponse = [...responseData];
    finalResponse.forEach((item)=>{
        const topic = item.topic;
        const topicIndex = topics.indexOf(topic);

        if(topics.includes(topic)){
            resources[topicIndex]+=1;
        }
    })
    const data = {
      labels: topics,
      datasets: [
        {
          data: resources,
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56", 
            "#4BC0C0",
            "#9966FF",
            "#FF9966",
            "#66FF99",
            "#FF66CC",
          ],
          hoverBackgroundColor: [
            "#FF0000", 
            "#0000FF", 
            "#FFFF00", 
            "#00FFFF", 
            "#FF00FF", 
            "#FF6600", 
            "#00FF00", 
            "#FF33CC", 
          ],
        },
      ],
    };

    const options = {
      responsive: true,
    };
  return (
    <div className="w-[400px] h-[400px]">
      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChart