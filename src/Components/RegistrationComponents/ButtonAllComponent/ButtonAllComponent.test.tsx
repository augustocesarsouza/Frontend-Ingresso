import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ButtonAllComponent from './ButtonAllComponent';

describe('ButtonAllComponent', () => {
  const objUpdateRegisterUser = {
    BirthDate: '',
    BirthDateString: '',
    Gender: '',
    Phone: '',
    Cep: '',
    Logradouro: '',
    Numero: '',
    Complemento: '',
    Referencia: '',
    Bairro: '',
    Estado: '',
    Cidade: '',
  };

  test('should', () => {
    const fn = jest.fn();
    render(
      <MemoryRouter>
        <ButtonAllComponent
          setVerifyFields={fn}
          bairro=""
          birthday=""
          cep=""
          cidade=""
          complemento=""
          disableButton={true}
          estado=""
          gender=""
          logradouro=""
          numero=""
          phone=""
          referencia=""
          valueOfCpf=""
          valueOfEmail=""
          valueOfEmailConfirm=""
          valueOfName=""
          valueOfPassword=""
          objUpdateRegisterUser={objUpdateRegisterUser}
          passwordConfirm=""
          nameUserChangeBoolean={true}
          nameUserChange=""
          changeOrNot={false}
          setSenhaInvalida={fn}
          whatComponentImRendering=""
          setActiveReCaptcha={fn}
          setChangeOrNot={fn}
          setUpdatedSucessDataUser={fn}
        />
      </MemoryRouter>
    );
  });
});
