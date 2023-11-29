import * as Styled from './styled';
import WelcomeUser from '../../Components/ManageAccountComonents/WelcomeUser/WelcomeUser';
import AddressCompany from '../../Components/AddressCompany/AddressCompany';
import { useLocation } from 'react-router-dom';
import { useEffect, useState, createContext } from 'react';
import ImgIngressoNameUserService from '../../Components/DataPersonalComponents/ImgIngressoNameUserService/ImgIngressoNameUserService';

export interface ObjUser {
  id: string;
  name: string;
  email: string;
}

export interface ContextMyOrdersProps {
  userObj: ObjUser;
  setUserObj: React.Dispatch<React.SetStateAction<ObjUser | null>>;
}

export const ContextMyOrders = createContext<ContextMyOrdersProps | null>(null);

const SettingsAccount = () => {
  const [userObj, setUserObj] = useState<ObjUser | null>(null);
  const [dataPersonClicked, setDataPersonClicked] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.state === null) return;
    const user = location.state.user;
    setUserObj(user);
  }, [location.state]);

  return (
    <ContextMyOrders.Provider value={{ userObj, setUserObj }}>
      <Styled.ContainerMain $datapersonclicked={String(dataPersonClicked)}>
        <Styled.ContainerImgIngressoNameUserServiceWelcomeUser>
          <ImgIngressoNameUserService userObj={userObj} />
          <WelcomeUser setDataPersonClicked={setDataPersonClicked} />
        </Styled.ContainerImgIngressoNameUserServiceWelcomeUser>
        <AddressCompany />
      </Styled.ContainerMain>
    </ContextMyOrders.Provider>
  );
};

export default SettingsAccount;
