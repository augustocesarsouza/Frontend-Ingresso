import styled from 'styled-components';

interface LabelProps {
  $activelabel: string;
}

export const Label = styled.label<LabelProps>`
  width: 100%;
  height: 100%;
  /* border-radius: 50%; */
  border: 1px solid #8080806e;

  background-color: white;
  display: inline-block;
  cursor: pointer;
  position: relative;

  svg {
    position: absolute;
    left: 5px;
    top: 5px;
    width: 10px;
  }

  &:before{
    content: '';
    display: block;
    

    width: 100%;
    height: 100%;

    background-color: ${props => props.$activelabel === "true" && "white"};
  }

  &:hover{
    border: 1px solid #3478c1;
  }
`