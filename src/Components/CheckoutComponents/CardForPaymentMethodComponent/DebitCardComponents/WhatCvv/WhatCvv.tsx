import { useState } from 'react';
import * as Styled from './styled';
import ShowClickCvv from '../ShowClickCvv/ShowClickCvv';

const WhatCvv = () => {
  const [showClickCvv, setShowClickCvv] = useState(false);

  const handleClickCvv = () => {
    setShowClickCvv(true);

    document.body.style.overflow = 'hidden';
  };

  const handleClickCvvX = () => {
    setShowClickCvv(false);

    document.body.style.overflow = 'auto';
  };

  return (
    <Styled.WrapperWhatCvv>
      <Styled.Span $span="1" onClick={handleClickCvv}>
        O que é CVV?
      </Styled.Span>
      <Styled.Span $span="2">
        Para saber mais sobre a forma de pagamento débito acesse as{' '}
        <Styled.Link
          href="https://atendimento.ingresso.com/portal/pt-br/kb/atendimento-ingresso-com/formas-de-pagamento"
          target="_black"
        >
          Políticas de Pagamento.
        </Styled.Link>
      </Styled.Span>

      <ShowClickCvv showClickCvv={showClickCvv} handleClickCvvX={handleClickCvvX} />
    </Styled.WrapperWhatCvv>
  );
};

export default WhatCvv;
