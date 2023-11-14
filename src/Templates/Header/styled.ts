import styled from 'styled-components';

export const ContainerMain = styled.div`
`

export const ContainerFirstHeader = styled.div`
  display: flex;
  background-image: linear-gradient(to right, rgb(81 108 237), rgb(45, 73, 201));
`

export const ContainerSecondHeader = styled.div``

export const NavHeader = styled.nav`
  background-color: rgb(32 35 128);
  padding: 20px;
`

export const Ul = styled.ul`
  display: flex;
  gap: 40px;
  margin-left: 30px;
`

export const Li = styled.li`
  list-style: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  color: #bbc8ff;

  &:hover {
    color: rgb(187 200 255 / 73%);
  }
`
