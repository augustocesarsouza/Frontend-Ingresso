import * as Styled from './styled';
import { useState } from 'react';
import InputCpfEmail from '../InputCpfEmail/InputCpfEmail';
import InputPassword from '../InputPassword/InputPassword';
import ConfirmTokenUser from '../ConfirmTokenUser/ConfirmTokenUser';
import ConfirmCodeEmail from '../ConfirmCodeEmail/ConfirmCodeEmail';

interface FieldsetCompProps {
  resentCode: boolean;
  refInputEmail: React.MutableRefObject<HTMLInputElement>;
  valueInputCode: string;
  confirmCodeEmail: boolean;
  refInputPassword: React.MutableRefObject<HTMLInputElement>;
  handleEnter: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>;
  handleResendCode: () => void;
  setValueInputCode: React.Dispatch<React.SetStateAction<string>>;
  setConfirmCodeEmail: React.Dispatch<React.SetStateAction<boolean>>;
}

const FieldsetComp = ({
  resentCode,
  refInputEmail,
  valueInputCode,
  confirmCodeEmail,
  refInputPassword,
  handleEnter,
  handleResendCode,
  setValueInputCode,
  setConfirmCodeEmail,
}: FieldsetCompProps) => {
  const [confirmTokenEmail, setConfirmTokenEmail] = useState(false);

  return (
    <Styled.Fieldset>
      <InputCpfEmail refInputEmail={refInputEmail} />
      <InputPassword refInputPassword={refInputPassword} />
      <ConfirmTokenUser
        confirmTokenEmail={confirmTokenEmail}
        setConfirmTokenEmail={setConfirmTokenEmail}
      />
      <ConfirmCodeEmail
        confirmCodeEmail={confirmCodeEmail}
        valueInputCode={valueInputCode}
        resentCode={resentCode}
        handleEnter={handleEnter}
        handleResendCode={handleResendCode}
        setValueInputCode={setValueInputCode}
        setConfirmCodeEmail={setConfirmCodeEmail}
      />
    </Styled.Fieldset>
  );
};

export default FieldsetComp;
