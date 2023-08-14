import React, { useState } from 'react';
import { Button, Paper } from '@mui/material';

const Material = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleButtonClick = () => {
    fileInput.click();
  };

  let fileInput;

  return (
    <Paper elevation={0}>
      <button onClick={toggleForm}>
        {showForm ? 'Hide Materials' : 'Add Materials'}
      </button>
      {showForm && (
        <>
          <input
            ref={(ref) => (fileInput = ref)}
            type="file"
            accept=".pdf, .doc, .docx"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <button  onClick={handleButtonClick}>
            Choose File
          </button>
          {selectedFile && (
            <div>
              <p>Selected File: {selectedFile.name}</p>
              <button  onClick={handleUpload}>
                Upload
              </button>
            </div>
          )}
        </>
      )}
    </Paper>
  );
};

export default Material;
