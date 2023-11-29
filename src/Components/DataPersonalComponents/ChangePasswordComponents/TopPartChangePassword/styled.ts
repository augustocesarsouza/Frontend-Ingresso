import styled from 'styled-components';

export const ContainerH1AndExit = styled.div`
  width: 100%;
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerH1AndExitInternal = styled.div`
  border-bottom: 1px solid #80808075;
  display: flex;
  justify-content: space-between;
  width: 92%;
  padding: 10px 0px;
`

export const H1 = styled.h1`
  color: gray;
  font-size: 16px;
  font-weight: 400;
`

export const WrapperSvgExit = styled.div`
  position: absolute;
  right: 25px;
  top: 10px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  
  svg {
    color: #2196F3;
    width: 100%;
    height: 100%;
  }
`