import styled from 'styled-components';

export const ContainerMainInputInfo = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`

export const ContainerNumberCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const ContainerInputNumber = styled.div`
  position: relative;
`

interface InputNumberProps {
  $errorexpiredateyear: boolean;
}

export const InputNumber = styled.input<InputNumberProps>`
  padding: 10px 0px 10px 5px;
  width: 100%;

  
  &::placeholder,
  &::-webkit-input-placeholder {
    color: #6e6e6e7d;
  }

  border: ${props => props.$errorexpiredateyear === true ? "1px solid red" : "1px solid #92929257"};
  border-radius: 5px;
  transition: 0.3s;

  &:focus {
    border: ${props => props.$errorexpiredateyear === true ? "1.8px solid red" : "1.8px solid #2196f3"};
    box-shadow: 0px 0px 4px 1px rgb(0 0 0 / 31%);
    outline: none;
  }
`

export const WrapperError = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  border-radius: 50%;

  svg {
    color: white;
    font-size: 13px;
  }
`

export const ContainerExpirationDateAndCvcCvv = styled.div`
  display: flex;
  gap: 10px;
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