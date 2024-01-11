import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './styled';
import { faCircleInfo, faMinus, faTag } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const DiscountCode = () => {
  const [clickCodDiscount, setClickCodDiscount] = useState(true);

  const handleClickCodDiscount = () => {
    setClickCodDiscount((prev) => !prev);
  };

  const [FocusOrBlur, setFocusOrBlur] = useState(false);

  const handleFocus = () => {
    setFocusOrBlur(true);
  };

  const handleBlur = () => {
    setFocusOrBlur(false);
  };

  const handleClickApply = () => {
    console.log('aqui');
  };

  return (
    <Styled.ContainerCodDiscountMain>
      <Styled.ContainerCodDiscount onClick={handleClickCodDiscount}>
        <Styled.ContainerSvgDiscountSpan>
          <FontAwesomeIcon icon={faTag} className="code-discount-svg" />
          <Styled.Span $span="1">CÓDIGO DE DESCONTO</Styled.Span>
        </Styled.ContainerSvgDiscountSpan>
        <Styled.ContainerArrowMain>
          <Styled.WrapperArrow $clickcoddiscount={clickCodDiscount}>
            <FontAwesomeIcon icon={faMinus} className="svg-minus-1" />
          </Styled.WrapperArrow>
          <Styled.WrapperArrowMore $clickcoddiscount={clickCodDiscount}>
            <FontAwesomeIcon icon={faMinus} className="svg-minus-2" />
          </Styled.WrapperArrowMore>
        </Styled.ContainerArrowMain>
      </Styled.ContainerCodDiscount>
      <Styled.WrapperInputAndButton $clickcoddiscount={clickCodDiscount}>
        {!clickCodDiscount && (
          <Styled.ButtonMain>
            <Styled.ContainerAllColors $focusorblur={String(FocusOrBlur)}>
              <Styled.Input
                type="text"
                id="input-your-cpf-cnpj"
                placeholder="Digite seu CPF ou CNPJ"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </Styled.ContainerAllColors>
            <Styled.Button onClick={handleClickApply}>APLICAR</Styled.Button>
          </Styled.ButtonMain>
        )}
      </Styled.WrapperInputAndButton>
      <Styled.WrapperNewsSvg>
        <FontAwesomeIcon icon={faCircleInfo} className="svg-circle-info" />
        <Styled.Span $span="2">
          Novidade! Caso deseje, agora você pode solicitar o cancelamento das compras neste cinema
          diretamente em "Meus Pedidos". Essa facilidade está disponível apenas para clientes
          cadastrados.
        </Styled.Span>
      </Styled.WrapperNewsSvg>
    </Styled.ContainerCodDiscountMain>
  );
};

export default DiscountCode;
