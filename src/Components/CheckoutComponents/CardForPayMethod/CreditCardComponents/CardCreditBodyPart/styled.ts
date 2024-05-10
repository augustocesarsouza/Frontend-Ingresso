import styled from 'styled-components';

export const ContainerInformDate = styled.div`
  
`

export const WrapperNewCard = styled.div`
  border: 1px solid #15aaed;    
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 6rem;
  padding: 7px;
  gap: 3px;
  cursor: pointer;

  svg {
    color: gray;
    
  }
`

export const SpanNew = styled.span`
  color: #5c5c5c;
  font-size: 14px;
  font-weight: 300;
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

// export const ContainerBecauseSaveCardWhatIsCvv = styled.div`
//   display: flex;
//   align-items: center;
//   margin-top: 10px;
//   margin-bottom: 10px;
//   gap: 10px;

//   svg {
//     width: 20px;
//   }
// `

// interface SpanSaveWhatProps {
//   $span: string;
// }

// export const SpanSaveWhat = styled.span<SpanSaveWhatProps>`
//   font-size: 13px;
//   color: #29b5f4;
//   cursor: pointer;

//   &:hover {
//     color: #208dbe;
//   }
// `

// export const SpanMarkBold = styled.span`
//   font-weight: 600;
// `