// import React, { useState } from 'react';

// const InviteButton = () => {
//   const [email, setEmail] = useState('');
//   const [role, setRole] = useState('');
//   const [invalidEmail, setInvalidEmail] = useState('');
//   const [invalidRole, setInvalidRole] = useState('');

//   const handleInviteClick = async () => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const class_id = urlParams.get('class_id');

//     const formData = new FormData();
//     formData.append('email', email);

//     const checkemailResponse = await fetch(
//       'http://localhost/google-clone/Google-Classroom-Clone/api/controllers/joinclass/checkemail.php',
//       {
//         method: 'POST',
//         body: formData,
//       }
//     );
//     const checkemail = await checkemailResponse.json();

//     if (checkemail.status === 'User not found') {
//       setInvalidEmail('User not found');
//     } else if (role !== 'teacher' && role !== 'student') {
//       setInvalidRole('student or teacher?');
//     } else {
//       const formData2 = new FormData();
//       formData2.append('email', email);

//       const getuseridResponse = await fetch(
//         'http://localhost/google-clone/Google-Classroom-Clone/api/controllers/joinclass/getuserid.php',
//         {
//           method: 'POST',
//           body: formData2,
//         }
//       );
//       const response2 = await getuseridResponse.json();
//       const user_id = response2[0].user_id;

//       const formDataemail = new FormData();
//       formDataemail.append('email', email);
//       formDataemail.append('role', role);
//       formDataemail.append('class_id', class_id);
//       formDataemail.append('user_id', user_id);

//       const sendInviteEmailResponse = await fetch(
//         'http://localhost/google-clone/Google-Classroom-Clone/api/controllers/joinclass/sendinviteemail.php',
//         {
//           method: 'POST',
//           body: formDataemail,
//         }
//       );
//       const response3 = await sendInviteEmailResponse.json();

//       window.location.href = `people.html?class_id=${class_id}`;
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         id="email-input"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="text"
//         id="role-input"
//         value={role}
//         onChange={(e) => setRole(e.target.value)}
//       />
//       <button id="invite-btn" onClick={handleInviteClick}>
//         Invite
//       </button>
//       <p id="invalid-email">{invalidEmail}</p>
//       <p id="invalid-role">{invalidRole}</p>
//     </div>
//   );
// };

// export default InviteButton;

import React, { useState } from 'react';
import './styles.css';

function Collaboration() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleAddStudent = (name) => {
    setStudents([...students, name]);
    setNewStudent('');
  };

  const handleCreateProject = () => {
    console.log('Project Created:', {
      title: projectTitle,
      description: projectDescription,
      students: students,
    });
  };

  return (
    <div className="App">
      <h1>Group Project Manager</h1>
      <div className="student_list">
        <h2>Students</h2>
        <ul>
          {students.map((student, index) => (
            <li key={index}>{student}</li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Enter student name"
          value={newStudent}
          onChange={(e) => setNewStudent(e.target.value)}
        />
        <button onClick={() => handleAddStudent(newStudent)}>Add Student</button>
      </div>
      <div className="project_form">
        <h2>Create Project</h2>
        <input
          type="text"
          placeholder="Project Title"
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
        />
        <textarea
          placeholder="Project Description"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />
        <button onClick={handleCreateProject}>Create Project</button>
      </div>
    </div>
  );
}

export default Collaboration;