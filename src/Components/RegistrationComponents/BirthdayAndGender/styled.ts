import styled from 'styled-components';

export const ContainerMainDateBirthday = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`

interface ContainerSelectProps {
  $whatcomponentimrendering: string;
}

export const ContainerSelect = styled.div<ContainerSelectProps>`
  display: flex;
  width: 19rem;
  width: ${props => props.$whatcomponentimrendering === "alreadyLogged" && "11rem"};
`

export const Select = styled.select`
  user-select: none;
  outline: none;
  padding: 10px;
  color: #676767;
  border-width: 1px 1px 1px 5px;
  border-style: solid;
  border-color: #8080804d;
  margin-bottom: 6px;
  width: 100%;
  /* border-color: red; */
`

export const Option = styled.option``