import styled from 'styled-components';

export const ContainerDataMovieMain = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-around;
  margin: 0px 70px 0px 70px;
  background-color: #3a3a3a;
  padding: 12px 0px 15px 0px;
  margin-top: 20px;
`

export const ContainerDataMovie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 13%;
`

interface SpanProps {
  $span: string;
  $clickin: string;
}

export const Span = styled.span<SpanProps>`
  /* color: #2196f3; */
  font-weight: 600;
  color: ${props => props.$clickin === props.$span ? "orange" : "#2196f3"};
`