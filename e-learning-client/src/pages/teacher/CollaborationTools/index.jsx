import React, { useState } from 'react';
import ProjectCreation from '../../../components/ProjectCreation/index';
import GroupCollaboration from '../../../components/GroupCollaboration/index';

const CollaborationTools = () => {
  const [userType, setUserType] = useState('teacher'); // 'teacher' or 'student'

  return (
    <div>
      {userType === 'teacher' ? (
        <ProjectCreation />
      ) : (
        <GroupCollaboration />
      )}
    </div>
  );
};

export default CollaborationTools ;