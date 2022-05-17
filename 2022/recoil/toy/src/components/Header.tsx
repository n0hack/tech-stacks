import styled from 'styled-components';

const HeaderBlock = styled.header`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 60px;
  background-color: #fff;
`;

interface IHeaderProps {
  toggleDark: () => void;
}

const Header = ({ toggleDark }: IHeaderProps) => {
  return (
    <HeaderBlock>
      <button onClick={toggleDark}>Toggle</button>
    </HeaderBlock>
  );
};

export default Header;
