import React from "react";
import "./styles.css";
import SingleAttendance from "../../../components/SingleAttendance";
import { useState, useEffect } from "react";
import axios from "axios";

function Attendance() {
  let dummy_data = [
    {
      id: 2,
      course_name: "UIX",
      lecture_time: "24-2-2023/14:00",
      attendance: true,
    },
    {
      id: 2,
      course_name: "Soft skills",
      lecture_time: "25-2-2023/14:00",
      attendance: false,
    },
    {
      id: 2,
      course_name: "UIX",
      lecture_time: "26-2-2023/14:00",
      attendance: false,
    },
    {
      id: 2,
      course_name: "UIX",
      lecture_time: "27-2-2023/14:00",
      attendance: true,
    },
    {
      id: 2,
      course_name: "UIX",
      lecture_time: "27-2-2023/14:00",
      attendance: true,
    },
    {
      id: 2,
      course_name: "UIX",
      lecture_time: "27-2-2023/14:00",
      attendance: true,
    },
    {
      id: 2,
      course_name: "UIX",
      lecture_time: "27-2-2023/14:00",
      attendance: true,
    },
  ];
  // hadi: kinda ready for the api
  const [attendanceData, setAttendanceData] = useState([]);
  useEffect(() => {
    axios
      .get("get attendaces api hon")
      .then((response) => {
        setAttendanceData(response.data);
      })
      .catch((error) => {
        console.error("Data was not retrieved:", error);
      });
  }, []);
  return (
    <div className="container">
      {/* without dummy_data hon use attendancesData  */}
      {dummy_data.map((item) => (
        <SingleAttendance key={item.id} item={item} />
      ))}
    </div>
  );
}
export default Attendance;
