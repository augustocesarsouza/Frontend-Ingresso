import styled, { css } from 'styled-components';
import { Theme } from '../../Style/theme';

export const ContainerMain = styled.div`
  ${({theme}: { theme: Theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
  display: flex;
  flex-direction: column;
  height: 100vh;
  
  gap: 55px;
`;

export const ContainerInternal = styled.div`
  display: flex;
  /* padding: 40px 200px; */
  flex-direction: column;
  align-items: center;
`

export const ContainerLoginWithIngressoAndCreateNewAccount = styled.div`
  width: 80%;
  padding: 0px 25px;
  display: flex;
  gap: 30px;
`

interface SectionProps {
  $section: string;
}

export const Section = styled.section<SectionProps>`
  margin-top: 25px;
  width: ${props => props.$section === "1" && "60%"};
  border-right: ${props => props.$section === "1" && "1px solid #e2e2e273"};;
  width: ${props => props.$section === "2" && "40%"};
  display: flex;
  flex-direction: column;
  gap: ${props => props.$section === "2" && "20px"};
`

export const ContainerCreateNewAccount = styled.div``

export const p = styled.p`
  color: rgb(118, 118, 118);
  font-size: 12px;
`

export const ContainerBenefitsBeUser = styled.div`
  display: flex;
  gap: 25px;
`

export const Button = styled.button`
  padding: 15px;
  border: none;
  color: white;
  background: rgb(52, 120, 193);
  cursor: pointer;
  width: 20rem;

  &:hover {
    background: rgb(42 98 157);
  }
`