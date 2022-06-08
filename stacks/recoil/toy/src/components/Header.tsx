import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { isDarkAtom } from '../atoms';

const HeaderBlock = styled.header`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 60px;
  background-color: #fff;
`;

const Header = () => {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  const onClick = () => {
    setIsDark(!isDark);
  };

  return (
    <HeaderBlock>
      <button onClick={onClick}>Toggle</button>
    </HeaderBlock>
  );
};

export default Header;
