import styled from 'styled-components';

export const ContainerCaixaPart = styled.div`
  margin-top: 20px;
  padding: 0px 0px 20px 0px;
  border-bottom: 1px solid gray;
`

export const WrapperImg = styled.div`
  width: 90px;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const WrapperParagraph = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 10px;
`

interface ParaProps {
  $paragraph: number;
}

export const P = styled.p<ParaProps>`
  color: #808080a8;
  font-size: ${props => props.$paragraph > 1 && "14px"};
`

export const Span = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #808080;
`