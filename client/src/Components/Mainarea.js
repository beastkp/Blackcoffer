import React, { useEffect } from "react";
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
  const [selectedRegion, setSelectedRegion] = useState("");

  useEffect(() => {
    updateURL();
  }, []);
  useEffect(() => {
    updateURL();
  }, [selectedCountry, selectedTopic, selectedSector, selectedRegion]);

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
  const regions = [
    "Northern America",
    "Central America",
    "World",
    "Western Africa",
    "Western Asia",
    "Central Africa",
    "Northern Africa",
    "Southern Asia",
    "Central Asia",
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
    if (selectedRegion) {
      queryParams.push(`region=${selectedRegion}`);
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
    <div className="md:ml-[250px] md:block flex flex-col items-center">
      <div className="md:grid grid-cols-4">
        {/* Country Dropdown */}
        <div className="relative col-span-1 p-3">
          <label className="block m-2 p-2">Country:</label>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
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

        <div className="relative col-span-1  p-3">
          <label className="block m-2 p-2">Region:</label>
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="block appearance-none border rounded py-2 px-4 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select a Region</option>
            {regions.map((region, index) => (
              <option key={index} value={region}>
                {region}
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
      <div className="p-3 bg-white shadow-lg rounded-lg border-gray-700 m-2">
        <BarChart
          className="w-full h-48" // Adjust height and width as needed
          responseData={responseData}
          countries={countries}
          topics={topics}
          sectors={sectors}
          regions={regions}
        />
        <p className="p-3 text-center font-semibold text-gray-500 text-xl">
          Likelihood of export by various countries
        </p>
      </div>

      <div className="md:grid grid-cols-2">
        <div className="m-10 p-2 bg-white shadow-lg rounded-lg border-gray-700 col-span-1 flex flex-col items-center justify-center">
          <PieChart
            responseData={responseData}
            countries={countries}
            topics={topics}
            sectors={sectors}
            regions={regions}
          />
          <p className="p-3 pt-5 font-semibold text-gray-500 text-xl">
            Topic wise distribution
          </p>
        </div>
        <div className="m-10 p-2 bg-white shadow-lg rounded-lg border-gray-700 col-span-1 flex flex-col items-center justify-center">
          <RadarChart
            responseData={responseData}
            countries={countries}
            topics={topics}
            sectors={sectors}
            regions={regions}
          />
          <p className="p-3 font-semibold text-gray-500 text-xl">
            Sector wise Intensity
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mainarea;
