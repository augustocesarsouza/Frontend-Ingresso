import styled from 'styled-components';

export const ContainerLabelAndSpan =  styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 5px;
  cursor: pointer;

  &:hover {
    label {
      border: 1px solid #3478c159;
      box-shadow: 0px 0px 4px 1px rgb(0 0 0 / 31%);
    }
  }
`

export const ContainerCheckboxLabelSave = styled.div`
  width: 20px;
  height: 20px;
 
`

interface LabelSaveProps {
  $activelabelsave: boolean;
}

export const LabelSave = styled.label<LabelSaveProps>`
  width: 100%;
  height: 100%;
  border-radius: 15%;
  border: 1px solid #8080806e;

  /* background-color: white; */
  background-color: ${props => props.$activelabelsave === true ? "#3478c1" : "white"};
  transition: 0.3s;

  display: inline-block;
  cursor: pointer;
  position: relative;

  svg {
    position: absolute;
    left: 3px;
    top: 3px;
    width: 12px;
    fill: ${props => props.$activelabelsave === true ? "white" : "#3478c1"};
  }

  &:before{
    content: '';
    display: block;
  
    width: 100%;
  }
  

  &:hover{
    border: 1px solid #3478c159;
    box-shadow: 0px 0px 4px 1px rgb(0 0 0 / 31%);
  }
`

interface SpanInfoProps {
  $span: string;
  $divclicknumbercard: string;
  $errorexpiredateyear: boolean;
}

export const SpanInfo = styled.span<SpanInfoProps>`
  font-size: 14px;

  font-size: ${props => props.$span === "6" && "12px"};
  color: ${props => props.$span === props.$divclicknumbercard ? "#2196f3" : "#6e6e6e"};
  font-size: ${props => props.$span === "22" && "11px"};
  color: ${props => props.$errorexpiredateyear === true && "red"};
`