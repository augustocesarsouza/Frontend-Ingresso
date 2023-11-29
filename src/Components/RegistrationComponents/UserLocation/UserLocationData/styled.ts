import styled from 'styled-components';

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ContainerFirst = styled.div`
  display: flex;
  gap: 15px;
  margin-right: 10px;
`


export const ContainerSelect = styled.div`
  display: flex;
  width: 12rem;
`

interface SelectProps {
  $blocktype: string;
}

export const Select = styled.select<SelectProps>`
  user-select: none;
  outline: none;
  padding: 10px;
  color: #676767;
  border-width: ${props => props.$blocktype === "false" && "1px 1px 1px 5px"};
  border-style: solid;
  border-color: #8080804d;
  margin-bottom: 6px;
  width: 100%;
  pointer-events: ${props => props.$blocktype === "true" && "none"};
  background: ${props => props.$blocktype === "true" && "#8080804a"};
  color: ${props => props.$blocktype === "true" && "#808080"};

`

export const Option = styled.option``