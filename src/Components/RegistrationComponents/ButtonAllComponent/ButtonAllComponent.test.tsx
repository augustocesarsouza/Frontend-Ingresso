import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ButtonAllComponent from './ButtonAllComponent';

describe('ButtonAllComponent', () => {
  test('should', () => {
    const fn = jest.fn();
    const { debug } = render(
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
        />
      </MemoryRouter>
    );
    // debug();
  });
});
