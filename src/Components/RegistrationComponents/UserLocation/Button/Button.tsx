import * as Styled from './styled';

interface ButtonProps {
  onClick: (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => Promise<void>;
  children: string;
  unlockButtonOk: boolean;
}

const Button = ({ onClick, children, unlockButtonOk }: ButtonProps) => {
  return (
    <Styled.Button $unlockbuttonok={String(unlockButtonOk)} onClick={(e) => onClick(e)}>
      {children}
    </Styled.Button>
  );
};

export default Button;
