import Login from "../Login/Login";
import * as Styled from "./style";
import { Routes, Route } from "react-router-dom";

const AppContent = () => {
  return (
    <Styled.ContainerMain>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Styled.ContainerMain>
  );
};

export default AppContent;
