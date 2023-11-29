import React from 'react';
import XExitSvg from '../../../../Svg/XExitSvg';
import * as Styled from './styled';

interface TopPartChangePasswordProps {
  loadingContainerChangePassword: boolean;
  setChangePassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopPartChangePassword = ({
  loadingContainerChangePassword,
  setChangePassword,
}: TopPartChangePasswordProps) => {
  const handleClickExitUpdatedSucess = () => {
    setChangePassword(false);
  };

  return (
    <>
      {loadingContainerChangePassword && (
        <Styled.ContainerH1AndExit>
          <Styled.ContainerH1AndExitInternal>
            <Styled.H1>ALTERAÇÃO DE SENHA</Styled.H1>
            <Styled.WrapperSvgExit onClick={handleClickExitUpdatedSucess}>
              <XExitSvg />
            </Styled.WrapperSvgExit>
          </Styled.ContainerH1AndExitInternal>
        </Styled.ContainerH1AndExit>
      )}
    </>
  );
};

export default TopPartChangePassword;
