import React from "react";
import { useState } from "react";
import axios from "axios";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import RadarChart from "./RadarChart";

const Mainarea = () => {
  const url = "http://localhost:8080/api/v1/dashboard/analytics";
  let updatedURL = "";
  const [responseData, setresponseData] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedSector, setSelectedSector] = useState("");

  const countries = [
    "United States of America",
    "Libya",
    "Egypt",
    "India",
    "Turkey",
    "Russia",
    "Mexico",
    "Pakistan",
    "Saudi Arabia",
    "South Africa",
    "Nigeria",
    "China",
    "Austria",
  ];
  const topics = [
    "gas",
    "oil",
    "car",
    "market",
    "consumption",
    "policy",
    "economy",
    "strategy",
    "biofuel",
  ];
  const sectors = [
    "Energy",
    "Government",
    "Aerospace & defence",
    "Manufacturing",
    "Retail",
    "Environment",
    "Financial services",
    "Information Technology",
    "Healthcare",
  ];

  const updateURL = () => {
    const queryParams = [];

    if (selectedCountry) {
      queryParams.push(`country=${selectedCountry}`);
    }
    if (selectedTopic) {
      queryParams.push(`topic=${selectedTopic}`);
    }
    if (selectedSector) {
      queryParams.push(`sector=${selectedSector}`);
    }

    const queryString = queryParams.join("&");
    updatedURL = `${url}?${queryString}`;
    console.log(updatedURL);
    axios
      .get(updatedURL)
      .then((response) => {
        setresponseData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="ml-[250px]">
      <div className="grid grid-cols-3">
        {/* Country Dropdown */}
        <div className="relative col-span-1 p-3">
          <label className="block m-2 p-2">Country:</label>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            onBlur={updateURL}
            className="block appearance-none border rounded py-2 px-4 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select a country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* Topic Dropdown */}
        <div className="relative col-span-1  p-3">
          <label className="block m-2 p-2">Topic:</label>
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            onBlur={updateURL}
            className="block appearance-none border rounded py-2 px-4 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select a topic</option>
            {topics.map((topic, index) => (
              <option key={index} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>

        {/* Sector Dropdown */}
        <div className="relative col-span-1  p-3">
          <label className="block m-2 p-2">Sector:</label>
          <select
            value={selectedSector}
            onChange={(e) => setSelectedSector(e.target.value)}
            onBlur={updateURL}
            className="block appearance-none border rounded py-2 px-4 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select a sector</option>
            {sectors.map((sector, index) => (
              <option key={index} value={sector}>
                {sector}
              </option>
            ))}
          </select>
        </div>
      </div>
      <BarChart
        responseData={responseData}
        countries={countries}
        topics={topics}
        sectors={sectors}
      />
      <div className="grid grid-cols-2">
        <div className="m-10 p-2">
          <PieChart
            responseData={responseData}
            countries={countries}
            topics={topics}
            sectors={sectors}
          />
        </div>
        <div className="m-10 p-2">
          <RadarChart
            responseData={responseData}
            countries={countries}
            topics={topics}
            sectors={sectors}
          />
        </div>
      </div>
    </div>
  );
};

export default Mainarea;
