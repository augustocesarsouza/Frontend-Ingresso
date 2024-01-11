import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './styled';
import { faX } from '@fortawesome/free-solid-svg-icons';

const ShowClickCvv = ({ showClickCvv, handleClickCvvX }) => {
  return (
    <>
      {showClickCvv && (
        <Styled.WrapperWhatCvvClick>
          <Styled.ContainerInternalCvv>
            <Styled.WrapperSpanH1>
              <Styled.H1>O que é CVV?</Styled.H1>
              <Styled.Span $span="4">
                O CVV é composto por 3 números localizados atrás, e logo após o número principal de
                seu cartão de crédito. Em cartões Amex, o CVV fica na parte da frente e pode ter 3
                ou 4 números.
              </Styled.Span>
            </Styled.WrapperSpanH1>
            <Styled.WrapperImgCard>
              <Styled.Img
                src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1704723214/Card_axu5px.png"
                alt="img-card-info"
              />
            </Styled.WrapperImgCard>
            <Styled.WrapperX onClick={handleClickCvvX}>
              <FontAwesomeIcon icon={faX} className="svg-x" />
            </Styled.WrapperX>
          </Styled.ContainerInternalCvv>
        </Styled.WrapperWhatCvvClick>
      )}
    </>
  );
};

export default ShowClickCvv;
