import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import textState, { charCountState } from '../recoil/text';

type Props = {};

const CharacterCounter = (props: Props) => {
  return (
    <>
      <TextInput />
      <CharacterCount />
    </>
  );
};

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

function CharacterCount() {
  const count = useRecoilValue(charCountState);
  return <>Character Count: {count}</>;
}

export default CharacterCounter;
