import styled from 'styled-components';

export const WrapperInfoAbove = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 16px;
  gap: 20px;
  margin-top: 10px;
`

interface SpanProps {
  $span: string;
}

export const Span = styled.span<SpanProps>`
  font-size: 14px;
  color: grey;

  font-size: ${props => props.$span === "2" && "11px"};
  padding-left: ${props => props.$span === "6" && "5px"};

  font-size: ${props => props.$span === "7" && "13px"};

  color: ${props => props.$span === "8" && "gray"};
  font-weight: ${props => props.$span === "8" && "500"};
  font-size: ${props => props.$span === "8" && "14px"};
`

export const WrapperLink = styled.div``


export const Link = styled.a`
  font-size: 13px;
  color: #147ccf;
  cursor: pointer;
  /* width: 20rem; */

  &:hover {
    color: #0b6ebd;
  }
`

export const ContainerPayMain = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const WrapperPay = styled.div`
  width: 12rem;
  height: 4rem;
`

export const Button = styled.button`
  background: black;
  background-image: url(https://www.gstatic.com/instantbuy/svg/dark_gpay.svg);
  background-repeat: no-repeat;
  background-position: center center;
  background-origin: content-box;
  background-size: 50px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  cursor: pointer;
`