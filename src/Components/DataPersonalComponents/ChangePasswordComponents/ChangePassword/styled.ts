import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 30%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

export const ContainerRedirectLogin = styled.div`
  background-color: white;
  position: relative;
  border-radius: 5px;
  width: 60%;
  /* height: 550px; */
  max-width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`
