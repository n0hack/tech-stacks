import styled from 'styled-components';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={onChange}
        />
      </form>
    </div>
  );
}

export default App;
