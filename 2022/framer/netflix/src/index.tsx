import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: inherit;
  }

  body {
    font-weight: 300;
    font-family: 'Source Sans Pro', sans-serif;
    color: ${(props) => props.theme.white.darker};
    line-height: 1.2;
    background-color: black;
  }
  
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

const client = new QueryClient();

root.render(
  <RecoilRoot>
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </RecoilRoot>
);
