import * as Styled from './styled';

interface ButtonProps {
  func: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  text: string;
}

const Button = ({ func, text }: ButtonProps) => {
  return <Styled.Button onClick={(e) => func(e)}>{text}</Styled.Button>;
};

export default Button;
