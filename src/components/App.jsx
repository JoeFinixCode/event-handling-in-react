// Event Handling practice
import React, { useState } from 'react';

function App() {
  const [headingText, setHeadingText] = useState('Hello');
  const [isMousedOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText('Submitted');
  }

  function hover() {
    setMouseOver(true);
  }

  function exitHover() {
    setMouseOver(false);
  }

  return (
    <div className='container'>
      <h1>{headingText}</h1>
      <input type='text' placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMousedOver ? 'black' : 'white' }}
        onClick={handleClick}
        onMouseOver={hover}
        // this function is being called if mouse exits hover
        onMouseOut={exitHover}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
