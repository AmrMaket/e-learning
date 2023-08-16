import React, { useState } from 'react';

const InteractiveContent = () => {
  const [showGameLink, setShowGameLink] = useState(false);

  const toggleGameLink = () => {
    setShowGameLink(!showGameLink);
  };

  const openFroggyGame = () => {
    window.open("https://flexboxfroggy.com", "_blank");
  };

  return (
    <div>
      <button className='toggleBottom' onClick={toggleGameLink}>
        {showGameLink ? 'Hide Game' : 'Show Game'}
      </button>
      {showGameLink && (
        <div>
          <p>Click the link below to play the game:</p>
          <button onClick={openFroggyGame}>
            Play Memory Game
          </button>
        </div>
      )}
    </div>
  );
};

export default InteractiveContent;
