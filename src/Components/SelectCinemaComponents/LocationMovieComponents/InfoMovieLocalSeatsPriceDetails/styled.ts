import styled from 'styled-components';

export const ContainerRegion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #707070;
  padding-bottom: 25px;
`

export const ContainerLikeAndRegionMovie = styled.div`
  display: flex;
  gap: 20px;
`

export const ContainerHeartSvg = styled.div`
  width: 25px;
  height: 25px;
  fill: #47a7f3;
  margin-top: 2px;

  svg > {
    width: 100%;
    height: 100%;
    
  }
`

export const ContainerRegionName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

interface PNameRegionProps {
  $pname: string;
}

export const PNameRegion = styled.p<PNameRegionProps>`
  /* color: #47a7f3; */
  color: ${props => props.$pname === "1" ? "#47a7f3" : "gray"};
  font-size: ${props => props.$pname === "1" && "17px"};
  font-size: ${props => props.$pname === "2" && "14px"};
  font-weight: ${props => props.$pname === "1" && "500"};
`

export const ContainerSeatsPriceDetailsSvg = styled.div`
  display: flex;
  gap: 15px;
`

export const ContainerSvgAndP = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  cursor: pointer;
`

export const ContainerSvg = styled.div`
  width: 25px;
  height: 25px;

  svg > {
    width: 100%;
    height: 100%;
  }
`

export const PSvgName = styled.p`
  color: #47a7f3;
`