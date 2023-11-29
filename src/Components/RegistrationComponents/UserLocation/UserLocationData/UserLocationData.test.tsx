import { render, screen } from '@testing-library/react';
import UserLocationData from './UserLocationData';

// cep: string,
// state: string,
// city: string,
// street: string,
// neighborhood: string,
// service: string

describe('UserLocationData', () => {
  test('should render all inputs and all options city', () => {
    const useLocationDataObj = {
      cep: '',
      state: '',
      city: '',
      street: '',
      neighborhood: '',
      service: '',
    };
    const fn = jest.fn();

    const { container } = render(
      <UserLocationData
        useLocationData={useLocationDataObj}
        setBairro={fn}
        setCidade={fn}
        setComplemento={fn}
        setEstado={fn}
        setLogradouro={fn}
        setNumero={fn}
        setReferencia={fn}
        bairro=""
        cidade=""
        complemento=""
        estado=""
        logradouro=""
        numero=""
        referencia=""
        whatComponentImRendering=""
      />
    );

    const spanLogra = screen.getByText('Logradouro');
    expect(spanLogra).toBeInTheDocument();

    const spanNum = screen.getByText('Número');
    expect(spanNum).toBeInTheDocument();

    const spanComple = screen.getByText('Complemento');
    expect(spanComple).toBeInTheDocument();

    const spanRef = screen.getByText('Referência');
    expect(spanRef).toBeInTheDocument();

    const spanBairro = screen.getByText('Bairro');
    expect(spanBairro).toBeInTheDocument();

    const spanCid = screen.getByText('Cidade');
    expect(spanCid).toBeInTheDocument();

    const optionAll = container.querySelectorAll('.sc-fujznN');
    expect(optionAll.length).toBe(28);

    expect.assertions(7);
  });

  test('should render passing obj useLocationDataObj', () => {
    const fn = jest.fn();

    const useLocationDataObj = {
      cep: '',
      state: 'MS',
      city: 'Campo Grande',
      street: 'Rua Cajazeira',
      neighborhood: 'Jardim Aero Rancho',
      service: '',
    };

    render(
      <UserLocationData
        useLocationData={useLocationDataObj}
        setBairro={fn}
        setCidade={fn}
        setComplemento={fn}
        setEstado={fn}
        setLogradouro={fn}
        setNumero={fn}
        setReferencia={fn}
        bairro=""
        cidade=""
        complemento=""
        estado=""
        logradouro=""
        numero=""
        referencia=""
        whatComponentImRendering=""
      />
    );
  });

  //Testar se passar dados "useLocationDataObj"
});
