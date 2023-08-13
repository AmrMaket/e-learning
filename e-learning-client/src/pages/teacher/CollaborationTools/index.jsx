import React, { useState } from 'react';
import ProjectCreation from '../../../components/ProjectCreation/index';
import GroupCollaboration from '../../../components/GroupCollaboration/index';

const CollaborationTools = () => {
  const [userType, setUserType] = useState('teacher');

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