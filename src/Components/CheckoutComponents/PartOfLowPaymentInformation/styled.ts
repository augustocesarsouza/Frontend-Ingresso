import styled from 'styled-components';

export const ContainerValueTotalFixed = styled.div`
  position: fixed;
  bottom: 0;
  /* left: 232px; */
  background: #ededed;
  width: 116rem;
  padding: 4px 5px 4px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 10px; */
  margin-bottom: 3px;

  @media ((min-width: 1000px) and (max-width: 1200px)){
    width: 90rem;
  }
`

export const WrapperNumberSelectedAndValueTotal = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const PNumberSelected = styled.p`
  padding: 1px 7px;
  background: #ffa90c;
  color: white;
  font-weight: 500;
  text-align: center;
`

export const SpanValueTotal = styled.span`
  font-weight: 600;
  color: gray;
`

export const ButtonG = styled.button`
  background: #3478c1;
  color: white;
  border: none;
  padding: 16px 35px 16px 15px;
  cursor: pointer;
  position: relative;

  svg {
    position: absolute;
    height: 28px;
    right: 10px;
    top: 10px;
  }
`