import React from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs((props) => {
  // 여기서 태그의 속성을 먼저 부여할 수 있음
  return {
    type: 'text',
    size: props.size || '1em',
  };
})`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

const Attaching = () => {
  return (
    <>
      <Input placeholder="A small text input" />
      <br />
      <Input placeholder="A small text input" size="2em" />
    </>
  );
};

export default Attaching;
