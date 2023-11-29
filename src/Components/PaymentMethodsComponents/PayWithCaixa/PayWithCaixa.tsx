import * as Styled from './styled';

const PayWithCaixa = () => {
  return (
    <Styled.ContainerCaixaPart>
      <Styled.WrapperImg>
        <Styled.Img
          src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1701170158/caixa-positivo_rnlldm.png"
          alt="caixa-img"
        />
      </Styled.WrapperImg>
      <Styled.WrapperParagraph>
        <Styled.P $paragraph={1}>PAGUE COM O CARTÃO DE DÉBITO VIRTUAL CAIXA</Styled.P>
        <Styled.P $paragraph={2}>
          Antes de realizar a compra, é necessário gerar, gratuitamente, o seu{' '}
          <Styled.Span>cartão de débito virtual Caixa.</Styled.Span>
        </Styled.P>
        <Styled.P $paragraph={3}>
          Acesse o Internet Banking, pelo site ou pelo App Caixa, na opção{' '}
          <Styled.Span>"Cartões – Cartão de Débito Virtual".</Styled.Span>
        </Styled.P>
        <Styled.P $paragraph={4}>
          Insira o número completo, a validade e o código de segurança gerados.
        </Styled.P>
        <Styled.P $paragraph={5}>
          Um novo código de segurança deverá ser gerado no Internet Banking, a cada compra, para
          maior segurança no uso dos serviços da Ingresso.com.
        </Styled.P>
      </Styled.WrapperParagraph>
    </Styled.ContainerCaixaPart>
  );
};

export default PayWithCaixa;
