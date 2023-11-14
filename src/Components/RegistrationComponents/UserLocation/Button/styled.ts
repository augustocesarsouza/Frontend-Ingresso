import styled from 'styled-components';

interface ButtonProps {
  $unlockbuttonok: string;
}

export const Button = styled.button<ButtonProps>`
  border: none;
  background: none;
  color: white;
  font-weight: 600;
  cursor: ${props => props.$unlockbuttonok === "true" ? "pointer" : "not-allowed"};
  pointer-events: ${props => props.$unlockbuttonok === "true" ? "visible" : "none"};

`