import React, { createContext, useContext } from 'react';
import { ThemeContext } from './context/theme';

const ThemedButton = (props) => {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <button {...props} style={{ backgroundColor: theme.background }}>
      반갑고
    </button>
  );
};

const App = () => {
  return (
    <>
      <section>
        <ThemedButton />
      </section>
    </>
  );
};

export default App;
