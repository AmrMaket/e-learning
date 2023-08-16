import React,{useState,useEffect} from "react";
import "./styles.css";
import SingleChat from "../../../components/ParentSingleChat";

function ParentChat() {

    const [teachers, setTeachers] = useState([]);
  
    const fetchInfo = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'));
      
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      try {
        const response = await fetch("http://127.0.0.1:8000/api/get_teacher_info", requestOptions);
        const result = await response.json();
        if (result.status === 'success') {
          setTeachers(result.results);
        } else {
          console.error('API request failed:', result);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    useEffect(() => {
      fetchInfo();
    }, []);
  
  return (
    <div className="list-container">
      <div className="list-wrapper">
        {teachers.map((item) => {
          return <SingleChat item={item} />;
        })}
      </div>
    </div>
  );
}

export default ParentChat;

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