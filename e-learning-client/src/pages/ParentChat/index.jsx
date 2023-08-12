import React from "react";
import "./styles.css";
import SingleChat from "../../components/ParentSingleChat";

function ParentChat() {
  let dummy_data = [
    {
      id: 2,
      course_id: 1,
      name: "charbel",
    },
    {
      id: 2,
      course_id: 2,
      name: "chris",
    },
    {
      id: 2,
      course_id: 3,
      name: "taha",
    },
    {
      id: 2,
      course_id: 3,
      name: "nour",
    },
    {
      id: 2,
      course_id: 4,
      name: "khaled",
    },
  ];
  return (
    <div className="list-container">
      <div className="list-wrapper">
        {dummy_data.map((item) => {
          return <SingleChat item={item} />;
        })}
      </div>
    </div>
  );
}

export default ParentChat;
