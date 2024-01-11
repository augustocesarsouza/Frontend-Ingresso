import styled from 'styled-components';


export const ContainerSecond = styled.div`
  width: 63rem;
  position: relative;
`

export const ContainerTopYourSeats = styled.div`
  border-bottom: 1px solid #a4a4a478;
  padding: 0px 9px 15px 11px;
`

export const SpanSecond = styled.span`
  font-size: 14px;
  color: #a4a4a4;
`

export const ContainerParaIncreases = styled.div`
  position: relative;
  left: 600px;
  top: -223px;
  height: 100px;
  width: 4px;
  user-select: none;
  /* background: red; */
`

export const ContainerParaMain = styled.div`
  height: 100%;
  background: #dbdbdb;
  display: flex;
  align-items: flex-end;
  position: relative;
`  

interface SpanIncreasesProps {
  $topvalue: number;
}

export const SpanIncreases = styled.div<SpanIncreasesProps>`
  /* border: 2px solid #dbdbdb; */
  /* height: 10px; */
  height: ${props => props.$topvalue}px;

  width: 4px;
  background: #c9c9c9;
  position: absolute;
`

interface ContainerBallIncreasesProps {
  $topvalue: number;
}

export const ContainerBallIncreases = styled.div<ContainerBallIncreasesProps>`
  position: absolute;
  height: 19px;
  width: 19px;
  left: -8px;
  top: ${props => props.$topvalue}px;
  border-radius: 50%;
  background: #3478c1;
  cursor: pointer;
`

