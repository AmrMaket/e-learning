import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

function FolderUpload() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles([...event.target.files]);
  };

  const handleUpload = () => {
    const formData = new FormData();

    for (const file of selectedFiles) {
      formData.append('files[]', file);
    }

    axios.post('http://127.0.0.1:8000/api/postMaterial', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      console.log('Files uploaded:', response.data);
      setSelectedFiles([]); // Clear selected files
    })
    .catch((error) => {
      console.error('Error uploading files:', error);
    });
  };

  return (
    <div className='container'>
      <h4>Upload Folder</h4>
      <input
        type="file"
        multiple
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
      />
      <button className='upload' onClick={handleUpload}>Upload Files</button>
    </div>
  );
}

function FolderUploadToggle() {
  const [showUpload, setShowUpload] = useState(false);

  const toggleUpload = () => {
    setShowUpload(!showUpload);
  };

  return (
    <div className='container'>
      <button className='toggleButton' onClick={toggleUpload}>
        {showUpload ? 'Hide Material' : 'Show Material'}
      </button>
      {showUpload && <FolderUpload />}
    </div>
  );
}

export default FolderUploadToggle;
