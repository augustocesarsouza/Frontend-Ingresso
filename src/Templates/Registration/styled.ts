import styled from 'styled-components';

export const ContainerMain = styled.div``

export const ContainerMainFormRegister = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  gap: 35px;
`

export const ContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 725px;
  max-width: 960px;
`

export const H1 = styled.h1`
  font-size: 19px;
  color: rgb(102 102 102);
`

interface pProps{
  $para: string;
}

export const p = styled.p<pProps>`
  font-size: 13px;
  color: rgb(102 102 102);
  text-align: ${props => props.$para === "2" && "end"};
  margin-bottom: ${props => props.$para === "2" && "10px"};
`

export const Form = styled.form`
  width: 930px;
  max-width: 960px;
  margin-bottom: 4rem;
`

export const ContainerInputMain = styled.div`
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`


// display: grid;
// grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));