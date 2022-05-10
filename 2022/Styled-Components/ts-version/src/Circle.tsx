import React, { useState } from 'react';
import styled from 'styled-components';

interface CircleProps {
  bgColor?: string;
  borderColor?: string;
}

const Container = styled.div<CircleProps>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor || 'red'};
  border-radius: 50%;
`;

const Circle = ({ bgColor = 'green' }: CircleProps) => {
  const [counter, setCounter] = useState(0);
  return <Container bgColor={bgColor} />;
};

export default Circle;
