import React, { useState } from 'react';
import './style.css';

const AttendanceTracking = () => {
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
        const reader = new FileReader();
        reader.onload = () => {
          const base64Data = reader.result.split(',')[1];
          setAudioChunks([...audioChunks, base64Data]);
        };
        reader.readAsDataURL(e.data);
      }
    };

    mediaRecorder.onstop = () => {
      // Now you can do something with the audioChunks array, like sending it to a server.
    };

    setMediaRecorder(mediaRecorder);
    mediaRecorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  return (
    <div className='container'>
      <button className="start" onClick={startRecording} disabled={recording}>
        Start Recording
      </button>
      <button className="stop" onClick={stopRecording} disabled={!recording}>
        Stop Recording
      </button>
    </div>
  );
};

export default AttendanceTracking;
