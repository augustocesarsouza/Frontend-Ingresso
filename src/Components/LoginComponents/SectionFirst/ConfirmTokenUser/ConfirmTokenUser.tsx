import { useLocation } from 'react-router-dom';
import XExitSvg from '../../../../Svg/XExitSvg';
import Button from '../../SectionSecond/Button/Button';
import * as Styled from './styled';
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { Url } from '../../../../Utils/Url';

interface ConfirmTokenUserProps {
  confirmTokenEmail: boolean;
  setConfirmTokenEmail: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfirmTokenUser = ({ confirmTokenEmail, setConfirmTokenEmail }: ConfirmTokenUserProps) => {
  const location = useLocation();
  let entered = false;

  useEffect(() => {
    if (location.pathname === '/minha-conta/confirmacao-de-email') {
      const params = new URLSearchParams(location.search);
      const token = params.get('token');

      if (token !== null && token.length > 20) {
        const tokenExp = jwtDecode(token).exp;

        if (entered) return;
        entered = true;

        const currentTime = Date.now() / 1000;

        const expirationDate = new Date(tokenExp * 1000).toISOString();
        const expirationDateData = new Date(expirationDate);

        const hourCurrentUtc = new Date(currentTime * 1000).toISOString();

        const dateObject = new Date(hourCurrentUtc);

        if (expirationDateData > dateObject) {
          confirmTokenUserr(token);
        }
      }
    }
  }, [location, entered]);

  const confirmTokenUserr = async (token: string) => {
    const res = await fetch(`${Url}/public/user/confirm-token/${token}`);

    if (res.status === 200) {
      setConfirmTokenEmail(true);
    }
  };

  useEffect(() => {
    if (confirmTokenEmail) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [confirmTokenEmail]);

  const handleClickExit = () => {
    setConfirmTokenEmail(false);
  };

  const handleContinue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setConfirmTokenEmail(false);
  };

  return (
    <>
      {confirmTokenEmail && (
        <Styled.ModalOverlay>
          <Styled.ContainerRedirectLogin>
            <Styled.WrapperSvgExit onClick={handleClickExit}>
              <XExitSvg />
            </Styled.WrapperSvgExit>
            <Styled.WrapperImg>
              <Styled.Img
                className="img-like"
                src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1700138427/Like_ebvq3w.png"
              />
            </Styled.WrapperImg>
            <Styled.P>Cadastro confirmado!</Styled.P>
            <Styled.WrapperButton>
              <Button func={handleContinue} text="CONTINUAR" />
            </Styled.WrapperButton>
          </Styled.ContainerRedirectLogin>
        </Styled.ModalOverlay>
      )}
    </>
  );
};

export default ConfirmTokenUser;
