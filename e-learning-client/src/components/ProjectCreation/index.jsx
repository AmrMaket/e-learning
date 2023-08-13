import React, { useState } from 'react';

const ProjectCreation = () => {
  const [projectDetails, setProjectDetails] = useState({
    title: '',
    description: '',
    deadline: '',
    groups: []
  });

  const handleGroupCreation = () => {
    const newGroup = {
      name: '',
      invitedStudents: []
    };
    setProjectDetails((prevDetails) => ({
      ...prevDetails,
      groups: [...prevDetails.groups, newGroup]
    }));
  };

  const handleInviteStudent = (groupId, student) => {
    
  };

  const handleGroupInputChange = (index, groupName) => {
    const updatedGroups = [...projectDetails.groups];
    updatedGroups[index].name = groupName;
    setProjectDetails({ ...projectDetails, groups: updatedGroups });
  };

  const handleSubmitProject = () => {
  };

  return (
    <div>
      <h2>Create New Project</h2>
      <form>
        <input
          type="text"
          placeholder="Project Title"
          value={projectDetails.title}
          onChange={(e) =>
            setProjectDetails({ ...projectDetails, title: e.target.value })
          }
        />

        <button type="button" onClick={handleGroupCreation}>
          Add Group
        </button>
        {projectDetails.groups.map((group, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Group Name"
              value={group.name}
              onChange={(e) =>
                handleGroupInputChange(index, e.target.value)
              }
            />
            <button
              type="button"
              onClick={() => handleInviteStudent(index, 'student123')}
            >
            </button>
          </div>
        ))}

        <button type="button" onClick={handleSubmitProject}>
          Submit Project
        </button>
      </form>
    </div>
  );
};

export default ProjectCreation;
