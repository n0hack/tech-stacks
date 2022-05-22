import styled from 'styled-components';

const Board = styled.div`
  background-color: ${(props) => props.theme.boardColor};
`;

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
`;

function App() {
  return <div className="App"></div>;
}

export default App;
