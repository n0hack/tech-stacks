import React, { useContext } from 'react';
import { ThemeContext, useTheme } from 'styled-components';

const ThemeCtx = () => {
  const themeContext = useContext(ThemeContext);
  const theme = useTheme();
  console.log(themeContext, theme);
  return <div></div>;
};

export default ThemeCtx;
