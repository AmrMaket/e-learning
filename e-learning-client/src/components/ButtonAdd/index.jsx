import React, { useState } from 'react';
import './style.css';

const ButtonAdd = () => {
  const [rotationDegree, setRotationDegree] = useState(0);

  const rotateCircle = () => {
    setRotationDegree(rotationDegree + 45);
  };

  return (
    <div>
      <div
        className="circle"
        style={{ transform: `rotate(${rotationDegree}deg)` }}
        onClick={rotateCircle}
      >
        <div className="plus"></div>
      </div>
    </div>
  );
};

export default ButtonAdd;
