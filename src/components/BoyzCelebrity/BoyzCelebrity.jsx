import React from "react";
import Navbar from "../Navbar/Navbar";
import { imageNumberMapping1 } from "../Boys/Boys.jsx";
import jsonData from "../../assets/data.json";
import "./style.css";

export default function BoyzCelebrity() {
  function getTop10RollNumbers(jsonData) {
    // Convert the JSON object into an array of objects with rollno and selected properties
    const dataArray = Object.keys(jsonData).map((rollno) => ({
      rollno: parseInt(rollno),
      selected: jsonData[rollno],
    }));

    // Sort the data in descending order based on the "selected" property
    dataArray.sort((a, b) => b.selected - a.selected);

    // Take the top 10 elements from the sorted data
    const top10RollNumbers = dataArray.slice(0, 10);

    // Extract the roll numbers from the top 10 elements
    const result = top10RollNumbers.map((item) => item.rollno);

    return result;
  }
  const top10RollNumbers = getTop10RollNumbers(imageNumberMapping1);
  console.log(top10RollNumbers);
  return (
    <>
      <Navbar />
      <div className="result-container">
        <div className="result-panel">
          <div className="result-heading">
            <h1>The Boyz Celebrities</h1>
          </div>
          <div>
            {top10RollNumbers.map((item, index) => (
              <div key={index}>
                {index + 1} {item} {jsonData[item].name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
