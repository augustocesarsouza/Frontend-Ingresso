import * as Styled from './styled';

interface HeaderProps {
  text: string;
}

const Header = ({ text }: HeaderProps) => {
  return (
    <Styled.HeaderContainer>
      <Styled.H1>{text}</Styled.H1>
    </Styled.HeaderContainer>
  );
};

export default Header;
