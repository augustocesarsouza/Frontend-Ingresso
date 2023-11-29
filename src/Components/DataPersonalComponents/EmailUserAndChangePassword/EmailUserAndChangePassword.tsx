import { useState } from 'react';
import EmailSvg from '../../../Svg/EmailSvg';
import Padlock from '../../../Svg/Padlock';
import * as Styled from './styled';
import ChangePassword from '../ChangePasswordComponents/ChangePassword/ChangePassword';

interface EmailUserAndChangePasswordProps {
  emailUser: string;
  idGuid: string;
}

declare global {
  interface Window {
    recaptchaCallbackChangePassword: () => void;
  }
}

const EmailUserAndChangePassword = ({ emailUser, idGuid }: EmailUserAndChangePasswordProps) => {
  const [changePassword, setChangePassword] = useState(false);

  const handleChangePassword = () => {
    setChangePassword(true);
  };

  return (
    <Styled.ContainerMainEmailUserAndChangePassword>
      <Styled.WrapperMainEmail>
        <Styled.WrapperEmail>
          <EmailSvg />
        </Styled.WrapperEmail>
        <Styled.Span $span="0">{emailUser.length > 0 && emailUser}</Styled.Span>
      </Styled.WrapperMainEmail>
      <Styled.WrapperMainChangePassword>
        <Styled.WrapperChangePassword>
          <Padlock />
        </Styled.WrapperChangePassword>
        <Styled.Link onClick={handleChangePassword}>Alterar senha</Styled.Link>
      </Styled.WrapperMainChangePassword>
      <ChangePassword
        changePassword={changePassword}
        idGuid={idGuid}
        setChangePassword={setChangePassword}
      />
    </Styled.ContainerMainEmailUserAndChangePassword>
  );
};

export default EmailUserAndChangePassword;
