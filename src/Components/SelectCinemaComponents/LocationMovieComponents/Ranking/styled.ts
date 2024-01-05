import styled from 'styled-components';

export const ContainerHoursRanking = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  margin-bottom: 15px;
  flex-direction: column;
`

export const ContainerAll = styled.div`
  display: flex;
`

export const ContainerRanking = styled.div`
  display: flex;
  gap: 10px;
`

export const SpanRanking = styled.span`
  font-size: 12px;
  background: orange;
  padding: 3.5px 11px;
  border-radius: 5px;
  font-weight: 400;
`

export const ContainerHoursMain = styled.div`
  display: flex;
  gap: 5px;
`

export const ContainerHours = styled.div`
  border: 2px solid #47a7f3;
  padding: 20px 50px;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  margin: 0px 5px 0px 0px;
 
  &::before {
    content: "COMPRAR";
    left: 12px;
    top: -12px;
    position: absolute;
    transition-duration: .25s;
    color: #47a7f3;
    z-index: -1;
  }
  
  &:hover {
    &::before {
    content: "COMPRAR";
      left: 12px;
      top: 11px;
      z-index: 1;
    }

    > p {
      left: 30px;
      top: 35px;
      z-index: -1;
    }
  }
`

interface PHourProps {
  $p: string;
}

export const PHour = styled.p<PHourProps>`
  color: #47a7f3;
  z-index: 1;
  position: absolute;

  left: 30px;
  top: 10px;
  transition-duration: .25s;
  
`