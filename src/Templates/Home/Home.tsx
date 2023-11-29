import Header from '../Header/Header';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, createContext } from 'react';
import { ObjUser } from '../../Components/LoginComponents/SectionFirst/Form/Form';

export interface ContextHomeProps {
  userObj: ObjUser;
  setUserObj: React.Dispatch<React.SetStateAction<ObjUser | null>>;
}

export const ContextHome = createContext<ContextHomeProps | null>(null);

const Home = () => {
  const [userObj, setUserObj] = useState<ObjUser | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state === null) return;
    const user = location.state.user;

    setUserObj(user);
  }, [location]);

  return (
    <ContextHome.Provider
      value={{
        userObj,
        setUserObj,
      }}
    >
      <Header />
    </ContextHome.Provider>
  );
};

export default Home;
