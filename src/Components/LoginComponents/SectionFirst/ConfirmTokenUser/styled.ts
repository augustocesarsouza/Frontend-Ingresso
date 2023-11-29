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
  background-color: #ffffff;
  position: relative;
  border-radius: 5px;
  width: 275px;
  height: 310px; 
  max-width: 90%;
  display: flex;
  align-items: center;
  justify-content: inherit;
  flex-direction: column;
  gap: 30px;
`

export const WrapperSvgExit = styled.div`
  position: absolute;
  right: 10px;
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

export const WrapperImg = styled.div`
  width: 120px;
  height: 120px;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  -webkit-user-drag: none;
`

export const P = styled.p`
  font-size: 21px;
`

export const WrapperButton = styled.div`
  button {
    padding: 15px;
    border: none;
    color: white;
    background: rgb(52, 120, 193);
    cursor: pointer;
    width: 14rem;

    &:hover {
      background: rgb(42 98 157);
    }
  }
`