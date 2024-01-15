import { useContext, useEffect, useRef, useState } from 'react';
import LocationSvg from '../../../Svg/LocationSvg';
import * as Styled from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import GpsSvg from '../../../Svg/GpsSvg';
import DownArrowSvg from '../../../Svg/DownArrowSvg';
import ChangeLocationSvg from '../../../Svg/ChangeLocationSvg';
import { ContextHome, ContextHomeProps } from '../../../Templates/Home/Home';
import { useNavigate } from 'react-router-dom';

interface FirstContainerProps {
  openChooseLocation: boolean;
  setOpenChooseLocation: React.Dispatch<React.SetStateAction<boolean>>;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

const FirstContainer = ({
  openChooseLocation,
  setOpenChooseLocation,
  handleMouseEnter,
  handleMouseLeave,
}: FirstContainerProps) => {
  // const [openChooseLocation, setOpenChooseLocation] = useState(false);
  const [clickSelectState, setClickSelectState] = useState(false);
  const [clickSelectCity, setClickSelectCity] = useState(false);
  const [listCity, setListCity] = useState<null | string[]>(null);
  const [LastLocation, setLastLocation] = useState('Campinas');
  const refSelectCity = useRef<HTMLSelectElement | null>(null);
  const nav = useNavigate();

  const handleLocation = () => {
    setOpenChooseLocation((prev) => !prev);
  };

  const handleClickSelectState = () => {
    setClickSelectState((prev) => !prev);
  };

  const handleClickSelectCity = () => {
    setClickSelectCity((prev) => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const valueState = e.target.value;

    if (valueState === 'São Paulo') {
      const arrayCity = ['Campinas', 'Bauru'];
      setListCity(arrayCity);
    }

    if (valueState === 'Mato Grosso do Sul') {
      const arrayCity = ['Dourados', 'Campo Grande'];
      setListCity(arrayCity);
    }
  };

  const handleChangeCity = () => {
    if (refSelectCity.current === null) return;
    if (refSelectCity.current.value === 'Cidade') {
      alert('Selecione uma opção válida');
    } else {
      localStorage.setItem('lastLocation', refSelectCity.current.value);
      setLastLocation(refSelectCity.current.value);
      setOpenChooseLocation(false);
    }
  };

  useEffect(() => {
    const location = localStorage.getItem('lastLocation');
    if (location === null) {
      localStorage.setItem('lastLocation', 'Campinas');
    }
  }, []);

  const useContextHome = useContext<ContextHomeProps | null>(ContextHome);

  const handleClickImgIngresso = () => {
    if (useContextHome.userObj === null) return;

    nav('/', { state: { user: useContextHome.userObj } });
  };

  return (
    <Styled.FirstContainer>
      <Styled.ContainerHomeLocation>
        <Styled.ContainerHome onClick={handleClickImgIngresso}>
          <Styled.HomeLink>
            <Styled.ImgIngresso
              src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1698064983/IngressoImg/ingressologoTrans_in34qn.png"
              alt="img-logo-ingresso"
            />
          </Styled.HomeLink>
        </Styled.ContainerHome>
        <Styled.ContainerLocation data-testid="container-location" onClick={handleLocation}>
          <LocationSvg />
          <Styled.Paragraph>{LastLocation}</Styled.Paragraph>
        </Styled.ContainerLocation>
      </Styled.ContainerHomeLocation>
      {openChooseLocation && (
        <Styled.ContainerEnterOrRegisterMain
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faCaretUp} />
          <Styled.ContainerEnterOrRegister>
            <Styled.ContainerRegister>
              <Styled.H2>Você está em: São Paulo</Styled.H2>
              <Styled.ContainerAttByLocationGps>
                <Styled.WrapperSvgLocation>
                  <GpsSvg />
                </Styled.WrapperSvgLocation>
                <Styled.P>Atualizar localização por GPS</Styled.P>
              </Styled.ContainerAttByLocationGps>
              <Styled.ContainerButton>
                <Styled.ContainerSelectState onClick={handleClickSelectState}>
                  <Styled.Select
                    $clickselect={String(clickSelectState)}
                    onChange={(e) => handleChange(e)}
                  >
                    <Styled.Option>Estado</Styled.Option>
                    <Styled.Option>São Paulo</Styled.Option>
                    <Styled.Option>Mato Grosso do Sul</Styled.Option>
                  </Styled.Select>
                  <Styled.ContainerDownArrow>
                    <DownArrowSvg />
                  </Styled.ContainerDownArrow>
                </Styled.ContainerSelectState>
                <Styled.ContainerSelectCity onClick={handleClickSelectCity}>
                  <Styled.Select $clickselect={String(clickSelectCity)} ref={refSelectCity}>
                    <Styled.Option>Cidade</Styled.Option>
                    {listCity !== null &&
                      listCity.map((city, index) => (
                        <Styled.Option key={index}>{city}</Styled.Option>
                      ))}
                  </Styled.Select>
                  <Styled.ContainerDownArrow>
                    <DownArrowSvg />
                  </Styled.ContainerDownArrow>
                </Styled.ContainerSelectCity>
                <Styled.ContainerButtonChangeCity>
                  <Styled.ButtonChangeCity onClick={handleChangeCity}>
                    TROCAR CIDADE
                  </Styled.ButtonChangeCity>
                </Styled.ContainerButtonChangeCity>
              </Styled.ContainerButton>
            </Styled.ContainerRegister>
          </Styled.ContainerEnterOrRegister>
          <Styled.ContainerLineWhite></Styled.ContainerLineWhite>
          <Styled.ContainerLogin>
            <Styled.H2>Últimos Locais</Styled.H2>
            <Styled.ContainerLastLocation>
              <Styled.ContainerSvgChange>
                <ChangeLocationSvg />
              </Styled.ContainerSvgChange>
              <Styled.link>{LastLocation}</Styled.link>
            </Styled.ContainerLastLocation>
          </Styled.ContainerLogin>
        </Styled.ContainerEnterOrRegisterMain>
      )}
    </Styled.FirstContainer>
  );
};
//
export default FirstContainer;
