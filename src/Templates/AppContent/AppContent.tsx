import Home from '../Home/Home';
import Login from '../Login/Login';
import SettingsAccount from '../SettingsAccount/SettingsAccount';
import Registration from '../Registration/Registration';
import * as Styled from './style';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SelectCinema from '../../Components/SelectCinemaComponents/SelectCinema/SelectCinema';

const AppContent = () => {
  const [isHome, setIsHome] = useState(false);
  const [isFilm, setIsFilm] = useState(false);

  document.body.style.overflowY = 'none';

  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes('/filme')) {
      setIsFilm(true);
    } else {
      setIsFilm(false);
    }

    if (location.pathname === '/') {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [location]);

  return (
    <Styled.ContainerMain $ishome={String(isHome)} $isfilm={String(isFilm)}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minha-conta/cadastro" element={<Registration />} />
        <Route path="/minha-conta/login" element={<Login />} />
        <Route path="/minha-conta/confirmacao-de-email" element={<Login />} />
        <Route path="/minha-conta/meus-pedidos" element={<SettingsAccount />} />
        <Route path="/filme/:title" element={<SelectCinema />} />
      </Routes>
    </Styled.ContainerMain>
  );
};

export default AppContent;
