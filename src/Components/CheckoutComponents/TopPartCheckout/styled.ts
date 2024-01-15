import styled from 'styled-components';

export const ContainerFirst = styled.div`
  display: flex;
  justify-content: space-around;
  background: rgb(42 42 42 / 94%);
  margin-bottom: 15px;
  
`

export const WrapperSvgIngressoMain = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const WrapperSvgIngresso = styled.div`
  width: 160px;
  height: 60px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const ContainerMainNameUserAndService = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 20px; */
  width: 50%;
  position: relative;
`

export const WrapperNameService = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-left: 22px;
`

export const ContainerInfoUser = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
  user-select: none;

  &:hover {
    svg {
      fill: #00a3ed;
    }
  }

`

export const Span = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #ffffff;
`

interface WrapperSvgUserProps {
  $containeruser: string;
  $openinfouser: boolean;
}

export const WrapperSvgUser = styled.div<WrapperSvgUserProps>`
  width: ${props => props.$containeruser === "1" && "22px"};
  height: ${props => props.$containeruser === "1" && "22px"};

  width: ${props => props.$containeruser === "2" && "30px"};
  height: ${props => props.$containeruser === "2" && "30px"};

  svg {
    fill: #17b7ff;
    width: 100%;
    height: 100%;

    fill: ${props => props.$openinfouser === true && props.$containeruser === "1" && "#db8e00"};
  }
`

interface ContainerNavMainUserProps {
  $openinfouser: boolean;
}

export const ContainerNavMainUser = styled.div<ContainerNavMainUserProps>`
  position: absolute;
  /* right: 110px; */
  top: 59px;
  background-color: #191919;
  width: 26rem;
  /* height: 19rem; */
  display: flex;
  padding: 24px 0px;
  z-index: 9999;
  /* height: 19rem; */
  max-height: ${props => (props.$openinfouser ? '19rem' : '0')};
  transition: max-height 1s ease;


  svg {
    position: relative;
    color: #191919;
    font-size: 39px;
    left: 120px;
    bottom: 45px;

    
  }
`

export const ContainerNav = styled.div`
  width: 100%;
  gap: 25px;
  display: flex;
  flex-direction: column;
  user-select: none;
`

export const ContainerLineWhite = styled.div`
  border-bottom: 1px solid #ffffff5e;
  width: 95%;
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

interface LinkProps {
  $link: string;
}

export const Link = styled.a<LinkProps>`
  font-weight: 500;
  color: #0d8fff;
  cursor: pointer;
  font-size: 13px;
  margin-top: ${props => props.$link === "4" && "20px"};

  &:hover {
    color: #0a71c9;
  }
`

export const P = styled.p`
  color: #ffffff;
  font-weight: 600;
  user-select: none;
`