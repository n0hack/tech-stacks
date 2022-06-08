import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Animation from './Animation';
import Attaching from './Attaching';
import Counter from './Counter';
import LabelComponent from './LabelComponent';
import ThemeCtx from './ThemeCtx';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

/* const Button = styled.button`
  background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`; */

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || 'palevioletred'};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

/* const ReversedButton = (props) => {
  console.log(props);
  return <Button {...props} children={props.children.split('').reverse()} />;
}; */

const Thing = styled.div`
  && {
    color: ${(props) => (props.test ? 'red' : 'blue')};
  }

  .something {
    border: 1px solid;
    display: block;
  }
`;

const GlobalStyle = createGlobalStyle`
  /* div${Thing} {
    color: red;
  } */
`;

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;

Button.defaultProps = {
  theme: {
    main: 'palevioletred',
  },
};

const theme = {
  main: 'mediumseagreen',
};

const App = () => {
  return (
    <div>
      <Button>Normal</Button>
      <ThemeProvider theme={theme}>
        <Button>Themed</Button>
        <ThemeCtx />
      </ThemeProvider>
      {/* <Animation /> */}
      {/* <GlobalStyle />
      <Thing>
        <label htmlFor="foo-button" className="something">
          Mystery button
        </label>
        <button id="foo-button">What do I do?</button>
      </Thing> */}
      {/* <LabelComponent /> */}
      {/* <Counter />
      <Wrapper>
        <Title>Hello World</Title>
      </Wrapper>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
      <Button as={ReversedButton}>Custom Button</Button>
      <Input defaultValue="@probablyup" type="text" />
      <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" /> */}
    </div>
  );
};

export default App;
