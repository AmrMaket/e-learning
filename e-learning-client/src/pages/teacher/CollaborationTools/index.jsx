import React, { useState } from 'react';

const InviteButton = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [invalidEmail, setInvalidEmail] = useState('');
  const [invalidRole, setInvalidRole] = useState('');

  const handleInviteClick = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const class_id = urlParams.get('class_id');

    const formData = new FormData();
    formData.append('email', email);

    const checkemailResponse = await fetch(
      'http://localhost/google-clone/Google-Classroom-Clone/api/controllers/joinclass/checkemail.php',
      {
        method: 'POST',
        body: formData,
      }
    );
    const checkemail = await checkemailResponse.json();

    if (checkemail.status === 'User not found') {
      setInvalidEmail('User not found');
    } else if (role !== 'teacher' && role !== 'student') {
      setInvalidRole('student or teacher?');
    } else {
      const formData2 = new FormData();
      formData2.append('email', email);

      const getuseridResponse = await fetch(
        'http://localhost/google-clone/Google-Classroom-Clone/api/controllers/joinclass/getuserid.php',
        {
          method: 'POST',
          body: formData2,
        }
      );
      const response2 = await getuseridResponse.json();
      const user_id = response2[0].user_id;

      const formDataemail = new FormData();
      formDataemail.append('email', email);
      formDataemail.append('role', role);
      formDataemail.append('class_id', class_id);
      formDataemail.append('user_id', user_id);

      const sendInviteEmailResponse = await fetch(
        'http://localhost/google-clone/Google-Classroom-Clone/api/controllers/joinclass/sendinviteemail.php',
        {
          method: 'POST',
          body: formDataemail,
        }
      );
      const response3 = await sendInviteEmailResponse.json();

      window.location.href = `people.html?class_id=${class_id}`;
    }
  };

  return (
    <div>
      <input
        type="text"
        id="email-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        id="role-input"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <button id="invite-btn" onClick={handleInviteClick}>
        Invite
      </button>
      <p id="invalid-email">{invalidEmail}</p>
      <p id="invalid-role">{invalidRole}</p>
    </div>
  );
};

export default InviteButton;
