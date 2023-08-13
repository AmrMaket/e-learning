import React from 'react';

const GroupCollaboration = ({ projectDetails, groupMembers }) => {
  return (
    <div>
      <h2>Group Collaboration</h2>
      <h3>Project: {projectDetails.title}</h3>
      <h4>Group Members:</h4>
      <ul>
        {groupMembers.map((member) => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
      <h4>Discussion Board</h4>
      <textarea placeholder="Type your message..." rows="4" />
      <button>Post Message</button>
      <div>
      </div>
      <h4>File Sharing</h4>
      <input type="file" />
      <button>Upload File</button>
      <div>
      </div>
    </div>
  );
};

export default GroupCollaboration;
