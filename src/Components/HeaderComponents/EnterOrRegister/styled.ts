import styled from 'styled-components';

export const ContainerEnterOrRegisterMain = styled.div`
  position: absolute;
  left: -254px;
  top: 50px;
  background-color: #191919;
  width: 51rem;
  height: 26rem;
  display: flex;
  padding: 30px 10px;
  z-index: 9999;

  svg {
    position: relative;
    color: #191919;
    font-size: 39px;
    left: 249px;
    bottom: 52px;
  }
`

export const ContainerEnterOrRegister = styled.div`
  width: 50%;
  padding-right: 15px;
`

export const ContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const H2 = styled.h2`
  font-size: 17px;
  color: white;
  font-weight: 600;
`

export const P = styled.p`
  font-size: 14px;
  color: white;
`

export const ButtonRegister = styled.button`
  padding: 10px;
  border: none;
  background: #0099ff;
  color: #000000;
  font-size: 14px;
  font-weight: 700;
  border-radius: 6px;
  cursor: pointer;
`

export const ContainerLineWhite = styled.div`
  border-right: 1px solid #ffffff5e;
  margin-left: 13px;
`

export const ContainerLogin = styled.div`
  width: 50%;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const link = styled.a`
  color: #2196f3;
  font-size: 15px;
  cursor: pointer;
`