import styled from 'styled-components';

interface WrapperCreditCardProps {
  $creditcard: string;
  $clicklabel: string;
  $entermouseinformed: boolean;
}

export const WrapperCreditCard = styled.div<WrapperCreditCardProps>`
  display: flex;
  justify-content: ${props => props.$creditcard === "1" && "space-between"};
  flex-direction: ${props => props.$clicklabel === props.$creditcard && "column"};

  gap: 10px;
  user-select: none;
  border-bottom: 1px solid #79797917;
  padding-bottom: 10px;
  padding-top: 10px;
  cursor: ${props => props.$entermouseinformed === true ? "auto" : "pointer" };

  border-bottom: ${props => props.$creditcard === "4" && "none"};
  gap: ${props => props.$creditcard === "4" && "5px"};
  
`

