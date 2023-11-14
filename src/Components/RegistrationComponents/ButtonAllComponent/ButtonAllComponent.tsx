import { useEffect } from 'react';
import * as Styled from './styled';

interface ButtonAllComponentProps {
  setVerifyFields: React.Dispatch<React.SetStateAction<boolean>>;
  disableButton: boolean;
  valueOfName: string;
  valueOfCpf: string;
  valueOfEmail: string;
  valueOfEmailConfirm: string;
  valueOfPassword: string;
}

const ButtonAllComponent = ({
  setVerifyFields,
  disableButton,
  valueOfName,
  valueOfCpf,
  valueOfEmail,
  valueOfEmailConfirm,
  valueOfPassword,
}: ButtonAllComponentProps) => {
  const handleReturn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  const handleContinue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setVerifyFields(true);
  };

  useEffect(() => {
    const minimumOneLowercaseLetter = new RegExp('(?=.*[a-z])').test(valueOfPassword);
    const minimumOneUppercaseLetter = new RegExp('(?=.*[A-Z])').test(valueOfPassword);
    const minimumOneNumber = new RegExp('[0-9]').test(valueOfPassword);

    if (
      valueOfName.length >= 3 &&
      valueOfCpf.length >= 11 &&
      valueOfEmail.includes('@gmail.com') &&
      valueOfEmail === valueOfEmailConfirm &&
      valueOfPassword.length >= 8 &&
      minimumOneLowercaseLetter &&
      minimumOneUppercaseLetter &&
      minimumOneNumber
    ) {
      // For true fazer algo bom como mandar pro banco
      // console.log('true mandar para banco');
    } else {
      // se for falto manda para cima da um jeito de scrolar full para cima onde a pessoa deixo cmapo em branco
      // console.log('falso scrollar para cima');
    }
  }, [valueOfName, valueOfCpf, valueOfEmail, valueOfEmailConfirm, valueOfPassword]);

  return (
    <Styled.ContainerButtonReturnContinue>
      <Styled.Button $button="1" $disablebutton="QQ" onClick={handleReturn}>
        VOLTAR
      </Styled.Button>
      <Styled.Button
        $button="2"
        $disablebutton={String(disableButton)}
        onClick={handleContinue}
        disabled={disableButton}
      >
        CONTINUAR
      </Styled.Button>
    </Styled.ContainerButtonReturnContinue>
  );
};

export default ButtonAllComponent;
