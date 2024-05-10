import styled from 'styled-components';

export const ContainerBecauseSaveCardWhatIsCvv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  gap: 10px;

  svg {
    width: 20px;
  }
`

interface SpanSaveWhatProps {
  $span: string;
}

export const SpanSaveWhat = styled.span<SpanSaveWhatProps>`
  font-size: 13px;
  color: #29b5f4;
  cursor: pointer;

  &:hover {
    color: #208dbe;
  }
`