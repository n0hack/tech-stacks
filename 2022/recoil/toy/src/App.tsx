import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Router from './pages/Router';
import { darkTheme, lightTheme } from './theme';
import useDarkMode from './useDarkMode';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './atoms';
import TodoList from './components/TodoList';

const GlobalStyle = createGlobalStyle`
  * {
    color: ${(props) => props.theme.textColor};
    background-color:${(props) => props.theme.bgColor};
  }
`;

function App() {
  // const [isDark, setIsDark] = useDarkMode();
  // const isDark = useRecoilValue(isDarkAtom);

  return (
    <>
      {/* <GlobalStyle /> */}
      <TodoList />
    </>
  );
}

export default App;
