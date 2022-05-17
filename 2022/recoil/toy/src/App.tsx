import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Router from './pages/Router';
import { darkTheme, lightTheme } from './theme';
import useDarkMode from './useDarkMode';

const GlobalStyle = createGlobalStyle`
  * {
    color: ${(props) => props.theme.textColor};
    background-color:${(props) => props.theme.bgColor};
  }
`;

function App() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router toggleDark={setIsDark} />
      </ThemeProvider>
    </>
  );
}

export default App;
