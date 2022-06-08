import React from 'react';
import styled, { css } from 'styled-components';

const Input = styled.input.attrs({ type: 'checkbox' })``;

const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

const LabelText = styled.span`
  && {
    font-style: italic;
  }
  ${(props) => {
    console.log(props);
    console.log(`${Input}`);
    console.log(css);
    switch (props.$mode) {
      case 'dark':
        return css`
          background-color: black;
          color: white;
          /* ${Input}을 하면 해당 스타일 인스턴스의 클래스명 */
          /* && 인스턴스 자기 자신 */
          ${Input}:checked + && {
            color: blue;
          }
        `;
      default:
        return css`
          background-color: white;
          color: black;
          ${Input}:checked + && {
            color: red;
          }
        `;
    }
  }}
`;

const LabelComponent = () => {
  return (
    <>
      <Label>
        <Input defaultChecked />
        <LabelText>Foo</LabelText>
      </Label>
      <Label>
        <Input />
        <LabelText $mode="dark">Foo</LabelText>
      </Label>
    </>
  );
};

export default LabelComponent;
