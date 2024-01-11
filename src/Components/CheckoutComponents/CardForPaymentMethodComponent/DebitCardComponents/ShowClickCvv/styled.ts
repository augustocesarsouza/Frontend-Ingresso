import styled from 'styled-components';

export const WrapperWhatCvvClick = styled.div`
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

export const ContainerInternalCvv = styled.div`
  background-color: white;
  position: relative;
  border-radius: 5px;
  width: 91rem;
  /* max-width: 80%; */
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  padding-bottom: 15px;

  @media(max-width: 991px){
    width: 63rem;
  }
`

export const WrapperSpanH1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 35px;
`

export const H1 = styled.h1`
  font-size: 19px;
  color: gray;
  font-weight: 400;
`

export const WrapperImgCard = styled.div``

export const Img = styled.img``

export const WrapperX = styled.div`
  width: 26px;
  height: 26px;
  position: absolute;
  right: 13px;
  top: 13px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    color: #2196f3;
  }
`

export const Link = styled.a`
 color: #2196f3;
 text-decoration: none;
`

interface SpanProps {
  $span: string;
}

export const Span = styled.span<SpanProps>`
  font-size: 13px;
  color: gray;
  width: 97%;
`