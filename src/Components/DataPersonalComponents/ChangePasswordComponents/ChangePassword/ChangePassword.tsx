import { useState } from 'react';
import * as Styled from './styled';
import TopPartChangePassword from '../TopPartChangePassword/TopPartChangePassword';
import BodyPartChangePassword from '../BodyPartChangePassword/BodyPartChangePassword';

interface ChangePasswordProps {
  changePassword: boolean;
  idGuid: string;
  setChangePassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangePassword = ({ changePassword, idGuid, setChangePassword }: ChangePasswordProps) => {
  const [loadingContainerChangePassword, setLoadingContainerChangePassword] = useState(true);

  return (
    <>
      {changePassword && (
        <Styled.ModalOverlay>
          <Styled.ContainerRedirectLogin>
            <TopPartChangePassword
              loadingContainerChangePassword={loadingContainerChangePassword}
              setChangePassword={setChangePassword}
            />

            <BodyPartChangePassword
              changePassword={changePassword}
              idGuid={idGuid}
              setChangePassword={setChangePassword}
              setLoadingContainerChangePassword={setLoadingContainerChangePassword}
            />
          </Styled.ContainerRedirectLogin>
        </Styled.ModalOverlay>
      )}
    </>
  );
};

export default ChangePassword;
