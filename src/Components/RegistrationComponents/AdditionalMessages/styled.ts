import styled from 'styled-components';

export const ContainerNotices = styled.div`
  
`

export const ContainerReceiveUpdatesAndCheckboxMain = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const ContainerCheckbox = styled.div`
  width: 25px;
  height: 25px;
  
`

interface LabelProps {
  $activelabel: string;
}

export const Label = styled.label<LabelProps>`
  width: 100%;
  height: 100%;
  /* border-radius: 50%; */
  border: 1px solid #8080806e;

  background-color: white;
  display: inline-block;
  cursor: pointer;
  position: relative;

  svg {
    position: absolute;
    left: 7px;
    top: 7px;
    width: 10px;
  }

  &:before{
    content: '';
    display: block;
    

    width: 100%;
    height: 100%;

    background-color: ${props => props.$activelabel === "true" && "white"};
  }

  &:hover{
    border: 1px solid #3478c1;
  }
`

interface pProps{
  $para: string;
}

export const p = styled.p<pProps>`
  font-size: 13px;
  color: rgb(102 102 102);
  text-align: ${props => props.$para === "2" && "end"};
  margin-bottom: ${props => props.$para === "2" && "10px"};
  font-size: ${props => props.$para === "3" && "12px"};
  margin-top: ${props => props.$para === "3" && "30px"};
  margin-top: ${props => props.$para === "4" && "20px"};

  color: ${props => props.$para === "5" && "gray"};
  font-size: ${props => props.$para === "5" && "12px"};
`

interface SpanProps {
  $span: string;
}

export const Span = styled.span<SpanProps>`
  font-size: 12px;
  color: rgb(153, 153, 153);
  color: ${props => props.$span === "2" && "#2587d5"};
  cursor: ${props => props.$span === "2" && "pointer"};
  
  &:hover {
    color: ${props => props.$span === "2" && "#2587d5c9"};
  }
`
export const ContainerRecaptcha = styled.div``

