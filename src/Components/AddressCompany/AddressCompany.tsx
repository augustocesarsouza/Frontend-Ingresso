import * as Styled from './styled';

const AddressCompany = () => {
  return (
    <Styled.Footer>
      <Styled.ContainerFooter>
        <Styled.Address>
          Ingresso.com Ltda / CNPJ: 008606400001-71 / Endereço: Rua da Quitanda, 86 - 9º andar -
          Centro - Rio de Janeiro, RJ - 20091-902 /{' '}
          <Styled.Span>Atendimento ao cliente</Styled.Span>
        </Styled.Address>
        <Styled.p>© Copyright Ingresso.com - Todos os direitos reservados ®</Styled.p>
      </Styled.ContainerFooter>
    </Styled.Footer>
  );
};

export default AddressCompany;
