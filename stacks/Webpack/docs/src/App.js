import React, { Component, useState } from 'react';
import Hello from './Hello';

const App = () => {
  const [flag, setFlag] = useState(false);

  const handleChange = (e) => setFlag(!flag);

  return (
    <div>
      <button onClick={handleChange}>Switch Flag</button>
      {`${flag}`}
      <Hello />
    </div>
  );
};

export default App;
