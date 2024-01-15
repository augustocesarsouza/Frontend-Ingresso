import {
  listFormPayment,
  listSeatsMarked,
  paymentSelectSeatsProps,
} from '../../../Templates/Checkout/Checkout';
import * as Styled from './styled';

interface TicketTypesProps {
  whatClicked: number;
  listFormPayment: listFormPayment[];
  paymentSelectSeats: paymentSelectSeatsProps[];
  seatJoinList: string[];
  paymentKeyValue: { [key: string]: listSeatsMarked[] };
  handleClickSeats: (sea: string, formPayment: string) => void;
}

const TicketTypes = ({
  whatClicked,
  listFormPayment,
  paymentSelectSeats,
  seatJoinList,
  paymentKeyValue,
  handleClickSeats,
}: TicketTypesProps) => {
  // console.log(paymentKeyValue);

  return (
    <>
      {whatClicked === 2 && (
        <Styled.ContainerTicketTypes>
          <Styled.ContainerClubUol>
            <Styled.WrapperImgUol>
              <Styled.ImgUol
                src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1703514340/logo_header_hksemr.png"
                alt="img-uol"
              />
            </Styled.WrapperImgUol>
            <Styled.ContainerSpanUol>
              <Styled.SpanUol $span="1">
                {'Assinante UOL tem isenção de taxa de serviço em até 2 ingressos por mês. '}
                <Styled.SpanUol $span="2">Saiba mais</Styled.SpanUol>
              </Styled.SpanUol>
            </Styled.ContainerSpanUol>
          </Styled.ContainerClubUol>
          <Styled.ContainerTypeSeats>
            <Styled.SpanTypeSeats>
              Agora escolha os tipos de ingresso para os assentos selecionados:
            </Styled.SpanTypeSeats>
          </Styled.ContainerTypeSeats>
          <Styled.ContainerFormOfPaymentMain>
            {listFormPayment.length > 0 &&
              listFormPayment.map((fp, i) => (
                <Styled.ContainerForm key={i}>
                  <Styled.ContainerFormPayment>
                    <Styled.SpanForm $span="1">{fp.formName}</Styled.SpanForm>
                    <Styled.SpanForm $span="2">R$ {fp.price}</Styled.SpanForm>
                    {paymentSelectSeats.some(
                      (el) => el.paymentName === fp.formName && el.amountSeats > 0
                    ) && (
                      <Styled.SpanForm $span="3">{`Ingresso R$ ${(fp.priceNumber - 5.56).toFixed(
                        2
                      )} + Taxa de serviço R$ 5,56 + Direito Autoral R$ 0,27`}</Styled.SpanForm>
                    )}
                  </Styled.ContainerFormPayment>
                  <Styled.ContainerSeatsChosenMain>
                    {seatJoinList.map((sea, index) => (
                      <Styled.WrapperSeatsChosen
                        key={index}
                        $sea={sea}
                        $paymentkeyvalue={paymentKeyValue}
                        $formname={fp.formName}
                        onClick={() => {
                          const isSelected = paymentKeyValue[fp.formName].some(
                            (ea) => ea.nameSeat === sea && ea.isSelect === 2
                          );

                          if (!isSelected) {
                            handleClickSeats(sea, fp.formName);
                          }
                        }}
                      >
                        {sea.replace(/\s/g, '')}
                      </Styled.WrapperSeatsChosen>
                    ))}
                  </Styled.ContainerSeatsChosenMain>
                </Styled.ContainerForm>
              ))}
          </Styled.ContainerFormOfPaymentMain>
        </Styled.ContainerTicketTypes>
      )}
    </>
  );
};

export default TicketTypes;
