import * as Styled from './styled';
import YourNameAndCpf from '../../Components/RegistrationComponents/YourNameAndCpf/YourNameAndCpf';
import EmailAndConfirmEmail from '../../Components/RegistrationComponents/EmailAndConfirmEmail/EmailAndConfirmEmail';
import Password from '../../Components/RegistrationComponents/Password/Password';
import BirthdayAndGender from '../../Components/RegistrationComponents/BirthdayAndGender/BirthdayAndGender';
import PhoneNumber from '../../Components/RegistrationComponents/PhoneNumber/PhoneNumber';
import Cep from '../../Components/RegistrationComponents/UserLocation/Cep/Cep';
import UserLocationData from '../../Components/RegistrationComponents/UserLocation/UserLocationData/UserLocationData';
import { useState } from 'react';
import { CEP } from 'cep-promise';
import AdditionalMessages from '../../Components/RegistrationComponents/AdditionalMessages/AdditionalMessages';
import ButtonAllComponent from '../../Components/RegistrationComponents/ButtonAllComponent/ButtonAllComponent';
import IngressoTopBanner from '../../Components/IngressoTopBanner/IngressoTopBanner';
import AddressCompany from '../../Components/AddressCompany/AddressCompany';

const Registration = () => {
  const [useLocationData, setUseLocationData] = useState<CEP | null>(null);
  const [disableButton, setDisableButton] = useState(true);
  const [verifyFields, setVerifyFields] = useState(false);

  const [valueOfName, setValueOfName] = useState('');
  const [valueOfCpf, setValueOfCpf] = useState('');
  const [valueOfEmail, setValueOfEmail] = useState('');
  const [valueOfEmailConfirm, setValueOfEmailConfirm] = useState('');
  const [valueOfPassword, setValueOfPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [referencia, setReferencia] = useState('');
  const [bairro, setBairro] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');

  const recaptchaCallback = () => {
    setDisableButton(false);
  };

  return (
    <Styled.ContainerMain>
      <IngressoTopBanner />
      <Styled.ContainerMainFormRegister>
        <Styled.ContainerRegister>
          <Styled.H1>Cadastre-se</Styled.H1>
          <Styled.p $para="1">
            Compre ingressos e combos de pipoca com conforto e comodidade.
          </Styled.p>
        </Styled.ContainerRegister>
        <Styled.Form>
          <Styled.ContainerInputMain>
            <Styled.p $para="2">* Campos obrigatórios</Styled.p>
            <YourNameAndCpf
              verifyFields={verifyFields}
              setVerifyFields={setVerifyFields}
              setValueOfName={setValueOfName}
              setValueOfCpf={setValueOfCpf}
            />
            <EmailAndConfirmEmail
              verifyFields={verifyFields}
              setVerifyFields={setVerifyFields}
              setValueOfEmail={setValueOfEmail}
              setValueOfEmailConfirm={setValueOfEmailConfirm}
            />
            <Password
              verifyFields={verifyFields}
              setVerifyFields={setVerifyFields}
              setValueOfPassword={setValueOfPassword}
            />
            <BirthdayAndGender
              setBirthday={setBirthday}
              setGender={setGender}
              birthday={birthday}
              gender={gender}
              whatComponentImRendering=""
            />
            <PhoneNumber setPhone={setPhone} dd="" number="" setDD={null} setNumber={null} />
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
              whatComponentImRendering=""
            />
            <AdditionalMessages
              recaptchaCallback={recaptchaCallback}
              changeOrNot={null}
              senhaInvalida={null}
              setPasswordConfirm={null}
              setSenhaInvalida={null}
              nameUserChangeBoolean={false}
            />
            <ButtonAllComponent
              setVerifyFields={setVerifyFields}
              disableButton={disableButton}
              valueOfName={valueOfName}
              valueOfCpf={valueOfCpf}
              valueOfEmail={valueOfEmail}
              valueOfEmailConfirm={valueOfEmailConfirm}
              valueOfPassword={valueOfPassword}
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
              whatComponentImRendering=""
              objUpdateRegisterUser={null}
              passwordConfirm=""
              setActiveReCaptcha={null}
              setChangeOrNot={null}
              setSenhaInvalida={null}
              setUpdatedSucessDataUser={null}
              changeOrNot={false}
              nameUserChange=""
              nameUserChangeBoolean={false}
            />
          </Styled.ContainerInputMain>
        </Styled.Form>
        <AddressCompany />
      </Styled.ContainerMainFormRegister>
    </Styled.ContainerMain>
  );
};

export default Registration;
