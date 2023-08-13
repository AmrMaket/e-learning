import React, { useState, useEffect } from "react";
import { PopupButton } from "react-calendly";
import axios from "axios";

function Conference() {
  const [teacher, setTeacher] = useState({
    name: "",
    url: "https://calendly.com/cheaitohadi97/30min",
  });

  useEffect(() => {
    axios
      .get("api here to get name and url")
      .then((response) => {
        const teacherData = response.data;
        setTeacher(teacherData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="teacher-name">{teacher.name}</div>
        <PopupButton
          url={teacher.url}
          rootElement={document.getElementById("root")}
          text="Book a meeting!"
        />
      </div>
    </div>
  );
}

export default Conference;
