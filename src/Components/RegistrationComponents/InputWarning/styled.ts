import styled from 'styled-components';

export const ContainerInvalidSpan = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 10px;

  svg {
    position: absolute;
    left: 22px;
    top: -9px;
    color: rgb(250, 196, 196);
  }
`

export const Span = styled.span`
  background: rgb(250, 196, 196);
  color: rgb(163 0 1 / 90%);
  font-size: 11px;
  padding: 5px;
  display: inline-block;
`