import Home from '../Home/Home';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import * as Styled from './style';
import { Routes, Route } from 'react-router-dom';

const AppContent = () => {
  return (
    <Styled.ContainerMain>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minha-conta/cadastro" element={<Registration />} />
        <Route path="/minha-conta/login" element={<Login />} />
        <Route path="/minha-conta/confirmacao-de-email" element={<Login />} />

        {/* <Route path="/minha-conta/login" element={<Home />} /> */}
        {/* <Route path="/" element={<Login />} /> */}
      </Routes>
    </Styled.ContainerMain>
  );
};

export default AppContent;
