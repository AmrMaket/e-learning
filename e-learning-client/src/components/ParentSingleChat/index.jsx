import React from 'react';
import './styles.css';

function SingleChat({ item }) {
  const link = "/" + item.id;

  return (
    <div className='person-item'>
      <span className='person-name'>{item.name}</span>
      <a href={link} className='chat-link'>
        <span className='chat-icon'>&#128231;</span>
      </a>
    </div>
  );
}

export default SingleChat;
