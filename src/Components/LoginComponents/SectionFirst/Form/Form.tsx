import * as Styled from './styled';
import FieldsetComp from '../FieldsetComp/FieldsetComp';
import ContinuationFormReq from '../ContinuationFormReq/ContinuationFormReq';
import { useEffect, useState, useRef } from 'react';
import { Url } from '../../../../Utils/Url';
import { useNavigate } from 'react-router-dom';

export interface ObjUser {
  id: string;
  name: string;
  email: string;
}

const Form = () => {
  const [clickEnter, setClickEnter] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmCodeEmail, setConfirmCodeEmail] = useState(false);
  const [errorValidToken, setErrorValidToken] = useState(true);
  const [errorValidToken400, setErrorValidToken400] = useState(false);
  const [valueInputCode, setValueInputCode] = useState('');
  const refInputEmail = useRef<HTMLInputElement | null>(null);
  const refInputPassword = useRef<HTMLInputElement | null>(null);

  const nav = useNavigate();

  const [idUserRef, setIdUserRef] = useState('');

  useEffect(() => {
    if (clickEnter) {
      const emailOrCpf = refInputEmail.current.value;
      const password = refInputPassword.current.value;
      if (!emailOrCpf.includes('@gmail.com')) return;

      setLoading(true);
      loginAccount(emailOrCpf, password);
    }
  }, [clickEnter]);

  const [objUser, setObjUser] = useState<ObjUser | null>(null);

  const loginAccount = async (emailOrCpf: string, password: string) => {
    const res = await fetch(`${Url}/public/user/login/${emailOrCpf}/${password}`);

    if (res.status === 200) {
      console.log(res);
      const json = await res.json();

      const data = json.data;

      const userObj = {
        id: data.id,
        name: data.name,
        email: data.email,
      };

      localStorage.setItem('token', data.token);

      setObjUser(userObj);

      setIdUserRef(data.id);
      setConfirmCodeEmail(true);
      setLoading(false);
    }
  };

  const handleEnter = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // Confirmar Cod, Sent to the Email
    e.preventDefault();

    setLoading(true);
    setConfirmCodeEmail(false);

    const res = await fetch(`${Url}/public/user/verific/${valueInputCode}/${idUserRef}`);

    if (res.status === 200) {
      setTimeout(() => {
        setLoading(false);
        setErrorValidToken(false);
      }, 1000);
    }

    if (res.status === 400) {
      setTimeout(() => {
        setLoading(false);
        setErrorValidToken400(true); //descomenda depois
        // setErrorValidToken(false);
      }, 1000);
    }
  };

  useEffect(() => {
    if (!errorValidToken && objUser !== null) {
      nav('/', { state: { user: objUser } });
    }
  }, [errorValidToken, objUser]);

  const [resentCode, setResentCode] = useState(false);

  const handleResendCode = async () => {
    const res = await fetch(`${Url}/public/user/resend-code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objUser),
    });
    if (res.status === 200) {
      setResentCode(true);
    }

    if (res.status === 400) {
      setResentCode(false);
    }
  };

  useEffect(() => {
    if (errorValidToken400) {
      alert('erro');
      setErrorValidToken400(false);
      setClickEnter(false);
      setValueInputCode('');
    }
  }, [errorValidToken400]);

  return (
    <Styled.FormContainer>
      {loading ? (
        <Styled.ContainerMainLoader>
          <Styled.ContainerLoader></Styled.ContainerLoader>
        </Styled.ContainerMainLoader>
      ) : (
        <>
          <FieldsetComp
            refInputEmail={refInputEmail}
            refInputPassword={refInputPassword}
            confirmCodeEmail={confirmCodeEmail}
            setConfirmCodeEmail={setConfirmCodeEmail}
            setValueInputCode={setValueInputCode}
            valueInputCode={valueInputCode}
            handleEnter={handleEnter}
            handleResendCode={handleResendCode}
            resentCode={resentCode}
          />
          <ContinuationFormReq setClickEnter={setClickEnter} />
        </>
      )}
    </Styled.FormContainer>
  );
};

export default Form;
