import React, { useState, useEffect } from "react";
import CalendlyCard from "../../../components/CalendlyCard";

function Conference() {
  const [teachers, setTeachers] = useState([
    {
      name: "Hadi",
      url: "https://calendly.com/cheaitohadi97/30min",
    },
    {
      name: "M7md",
      url: "https://calendly.com/cheaitohadi97/30min",
    },
  ]); //useEffect here

  return (
    <div className="App">
      <div className="container">
        {teachers.map((teacher, index) => (
          <CalendlyCard key={index} teacher={teacher} />
        ))}
      </div>
    </div>
  );
}

export default Conference;
