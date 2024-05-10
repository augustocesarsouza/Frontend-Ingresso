import { CEP } from 'cep-promise';
import AdditionalMessages from '../../RegistrationComponents/AdditionalMessages/AdditionalMessages';
import BirthdayAndGender from '../../RegistrationComponents/BirthdayAndGender/BirthdayAndGender';
import ButtonAllComponent from '../../RegistrationComponents/ButtonAllComponent/ButtonAllComponent';
import PhoneNumber from '../../RegistrationComponents/PhoneNumber/PhoneNumber';
import UserLocationData from '../../RegistrationComponents/UserLocation/UserLocationData/UserLocationData';
import * as Styled from './styled';
import { useState, useEffect, useContext, useRef } from 'react';
import {
  ContextMyOrders,
  ContextMyOrdersProps,
} from '../../../Templates/SettingsAccount/SettingsAccount';
import Cep from '../../RegistrationComponents/UserLocation/Cep/Cep';
import { Url } from '../../../Utils/Url';
import { useNavigate } from 'react-router-dom';
import YourName from '../YourName/YourName';
import EmailUserAndChangePassword from '../EmailUserAndChangePassword/EmailUserAndChangePassword';

interface DataInfoUser {
  birthDate: string;
  BirthDateString: string;
  gender: string;
  phone: string;
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  referencia: string;
  bairro: string;
  estado: string;
  cidade: string;
}

interface DataPersonalChangeProps {
  svgDataPersonal: boolean;
}

export interface objUpdateRegisterUser {
  BirthDate: string;
  BirthDateString: string;
  Gender: string;
  Phone: string;
  Cep: string;
  Logradouro: string;
  Numero: string;
  Complemento: string;
  Referencia: string;
  Bairro: string;
  Estado: string;
  Cidade: string;
}

const DataPersonalChange = ({ svgDataPersonal }: DataPersonalChangeProps) => {
  const useContextMyOrders = useContext<ContextMyOrdersProps | null>(ContextMyOrders);
  const [useLocationData, setUseLocationData] = useState<CEP | null>(null);
  const nav = useNavigate();

  const [disableButton, setDisableButton] = useState(true);
  const [changeOrNot, setChangeOrNot] = useState(false);
  const [activeReCaptcha, setActiveReCaptcha] = useState(false);
  const [emailUser, setEmailUser] = useState('');

  const [birthday, setBirthday] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);
  const [cep, setCep] = useState<string | null>(null);
  const [logradouro, setLogradouro] = useState<string | null>(null);
  const [numero, setNumero] = useState<string | null>(null);
  const [complemento, setComplemento] = useState<string | null>(null);
  const [referencia, setReferencia] = useState<string | null>(null);
  const [bairro, setBairro] = useState<string | null>(null);
  const [estado, setEstado] = useState<string | null>(null);
  const [cidade, setCidade] = useState<string | null>(null);
  const [idGuid, setIdGuid] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const cepRef = useRef<string | null>(null);
  const genderRef = useRef<string | null>(null);
  const logradouroRef = useRef<string | null>(null);
  const numeroRef = useRef<string | null>(null);
  const complementoRef = useRef<string | null>(null);
  const referenciaRef = useRef<string | null>(null);
  const bairroRef = useRef<string | null>(null);
  const estadoRef = useRef<string | null>(null);
  const cidadeRef = useRef<string | null>(null);
  const userNameRef = useRef<string | null>(null);
  const [updatedSucessDataUser, setUpdatedSucessDataUser] = useState(false);

  const [objUpdateRegisterUser, setObjUpdateRegisterUser] = useState<objUpdateRegisterUser | null>(
    null
  );

  useEffect(() => {
    const objUpdate = {
      BirthDate: null,
      BirthDateString: birthday,
      Gender: gender,
      Phone: phone,
      Cep: cep,
      Logradouro: logradouro,
      Numero: numero,
      Complemento: complemento,
      Referencia: referencia,
      Bairro: bairro,
      Estado: estado,
      Cidade: cidade,
      UserId: idGuid,
    };

    setObjUpdateRegisterUser(objUpdate);
  }, [
    birthday,
    gender,
    phone,
    cep,
    logradouro,
    numero,
    complemento,
    referencia,
    bairro,
    estado,
    cidade,
    idGuid,
  ]);

  const recaptchaCallback = () => {
    setActiveReCaptcha(true);
  };

  useEffect(() => {
    if (useContextMyOrders.userObj === null) return;
    const { name, id, email } = useContextMyOrders.userObj;
    userNameRef.current = name;
    setEmailUser(email);
    GetInfoUser(id);
    setIdGuid(id);
  }, [svgDataPersonal, updatedSucessDataUser, useContextMyOrders.userObj]);

  const GetInfoUser = async (id: string) => {
    const token = localStorage.getItem('token');

    if (token == null || token.length <= 0) {
      nav('/', { state: { user: null } });
      return;
    }

    const res = await fetch(`${Url}/info-user/${id}`, {
      headers: {
        uid: id,
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 403) {
      nav('/', { state: { user: null } });
      return;
    }

    if (res.status === 401) {
      nav('/', { state: { user: null } });
      localStorage.removeItem('token');
      return;
    }

    if (res.status === 200) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);

      const json = await res.json();
      const data: DataInfoUser = json.data;
      if (data.birthDate) {
        setBirthday(data.birthDate);
      } else {
        setBirthday('');
      }
      setGender(data.gender);
      genderRef.current = data.gender;
      setPhone(data.phone);
      setCep(data.cep);

      cepRef.current = data.cep;
      setLogradouro(data.logradouro);
      logradouroRef.current = data.logradouro;
      setNumero(data.numero);
      numeroRef.current = data.numero;
      setComplemento(data.complemento);
      complementoRef.current = data.complemento;
      setReferencia(data.referencia);
      referenciaRef.current = data.referencia;
      setBairro(data.bairro);
      bairroRef.current = data.bairro;
      setEstado(data.estado);
      estadoRef.current = data.estado;
      setCidade(data.cidade);
      cidadeRef.current = data.cidade;
    }
  };
  const birthdayRef = useRef<string | null>(null);
  const phoneDDRef = useRef<string | null>(null);
  const phoneNumberRef = useRef<string | null>(null);

  const [dd, setDD] = useState('');
  const [number, setNumber] = useState('');

  const numberCount = useRef<number>(0);

  useEffect(() => {
    if (birthday === null) return;
    if (!birthday.includes('/')) return;
    if (numberCount.current <= 0 && birthday.length > 0) {
      birthdayRef.current = birthday;
      numberCount.current++;
    }
  }, [birthday, gender]);

  const numberPhoneCount = useRef<number>(0);

  useEffect(() => {
    if (phone === null) return;
    if (phone.length <= 0) return;
    if (numberPhoneCount.current <= 0) {
      numberPhoneCount.current++;

      phoneDDRef.current = phone.slice(0, 2);
      phoneNumberRef.current = phone.slice(3, 12);
      setDD(phone.slice(0, 2));
      setNumber(phone.slice(3, 12));
    }
  }, [phone]);

  console.log('aquiiiiiiiiiiii');
  console.log(dd);

  const countReturn = useRef(0);

  useEffect(() => {
    if (birthday === null) return;
    if (!birthday.includes('/')) return; // logradouro

    if (countReturn.current === 0) {
      countReturn.current++;
      return;
    }

    if (
      birthday !== birthdayRef.current ||
      gender !== genderRef.current ||
      dd !== phoneDDRef.current ||
      number !== phoneNumberRef.current ||
      logradouro !== logradouroRef.current ||
      numero !== numeroRef.current ||
      complemento !== complementoRef.current ||
      referencia !== referenciaRef.current ||
      bairro !== bairroRef.current ||
      estado !== estadoRef.current ||
      cidade !== cidadeRef.current
    ) {
      setChangeOrNot(true);
    } else {
      setChangeOrNot(false);
    }
  }, [
    birthday,
    gender,
    dd,
    number,
    logradouro,
    numero,
    complemento,
    referencia,
    bairro,
    estado,
    cidade,
  ]);

  const [nameUserChangeBoolean, setNameUserChangeBoolean] = useState(false);

  useEffect(() => {
    if (cep !== cepRef.current) {
      setChangeOrNot(true);
    } else {
      setChangeOrNot(false);
    }
  }, [cep, cepRef.current]);

  useEffect(() => {
    if (activeReCaptcha && changeOrNot) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }

    if (activeReCaptcha && nameUserChangeBoolean) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [changeOrNot, activeReCaptcha, nameUserChangeBoolean]);

  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [senhaInvalida, setSenhaInvalida] = useState(true);
  const [nameUserChange, setNameUserChange] = useState('');

  useEffect(() => {
    if (nameUserChange === null) return;
    if (nameUserChange.length > 0 && nameUserChange !== userNameRef.current) {
      setNameUserChangeBoolean(true);
    } else {
      setNameUserChangeBoolean(false);
    }
  }, [nameUserChange, userNameRef, changeOrNot]);

  return (
    <>
      {svgDataPersonal && (
        <>
          {loading ? (
            <Styled.ContainerMainLoader>
              <Styled.ContainerLoader></Styled.ContainerLoader>
            </Styled.ContainerMainLoader>
          ) : (
            <Styled.Form>
              <Styled.ContainerForm>
                <YourName svgDataPersonal={svgDataPersonal} setNameUserChange={setNameUserChange} />
                <EmailUserAndChangePassword emailUser={emailUser} idGuid={idGuid} />
                <BirthdayAndGender
                  setBirthday={setBirthday}
                  birthday={birthday}
                  gender={gender}
                  setGender={setGender}
                  whatComponentImRendering="alreadyLogged"
                />
                <PhoneNumber
                  setPhone={setPhone}
                  dd={dd}
                  setDD={setDD}
                  number={number}
                  setNumber={setNumber}
                />
                <Cep setUseLocationData={setUseLocationData} setCep={setCep} cepp={cep} />
                <UserLocationData
                  useLocationData={useLocationData}
                  setLogradouro={setLogradouro}
                  setNumero={setNumero}
                  setComplemento={setComplemento}
                  setReferencia={setReferencia}
                  setBairro={setBairro}
                  setEstado={setEstado}
                  setCidade={setCidade}
                  logradouro={logradouro}
                  numero={numero}
                  complemento={complemento}
                  referencia={referencia}
                  bairro={bairro}
                  estado={estado}
                  cidade={cidade}
                  whatComponentImRendering="alreadyLogged"
                />
                <AdditionalMessages
                  recaptchaCallback={recaptchaCallback}
                  setPasswordConfirm={setPasswordConfirm}
                  changeOrNot={changeOrNot}
                  nameUserChangeBoolean={nameUserChangeBoolean}
                  senhaInvalida={senhaInvalida}
                  setSenhaInvalida={setSenhaInvalida}
                />
                <ButtonAllComponent
                  setVerifyFields={null}
                  disableButton={disableButton}
                  valueOfName={''}
                  valueOfCpf={''}
                  valueOfEmail={''}
                  valueOfEmailConfirm={''}
                  valueOfPassword={''}
                  logradouro={logradouro}
                  numero={numero}
                  complemento={complemento}
                  referencia={referencia}
                  bairro={bairro}
                  estado={estado}
                  cidade={cidade}
                  cep={cep}
                  phone={phone}
                  birthday={birthday}
                  gender={gender}
                  whatComponentImRendering="alreadyLogged"
                  objUpdateRegisterUser={objUpdateRegisterUser}
                  passwordConfirm={passwordConfirm}
                  nameUserChangeBoolean={nameUserChangeBoolean}
                  nameUserChange={nameUserChange}
                  changeOrNot={changeOrNot}
                  setSenhaInvalida={setSenhaInvalida}
                  setActiveReCaptcha={setActiveReCaptcha}
                  setChangeOrNot={setChangeOrNot}
                  setUpdatedSucessDataUser={setUpdatedSucessDataUser}
                />
              </Styled.ContainerForm>
            </Styled.Form>
          )}
        </>
      )}
    </>
  );
};

export default DataPersonalChange;
