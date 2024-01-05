import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardCredit from '../../../../Svg/CardCredit';
import CheckSvg from '../../../../Svg/CheckSvg';
import * as Styled from './styled';
import { faCreditCard, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

interface CreditCardProps {
  clickLabel: string;
  totalValuePrice: number;
  activeLabel: boolean;
  mouseEnterLabel: string;
  handleClickLabelMain: (value: string) => void;
  handleClickLabel: (value: string) => void;
  handleMouseEnter: (value: string) => void;
  handleMouseLeave: (value: string) => void;
}

const CreditCard = ({
  clickLabel,
  totalValuePrice,
  activeLabel,
  mouseEnterLabel,
  handleClickLabelMain,
  handleClickLabel,
  handleMouseEnter,
  handleMouseLeave,
}: CreditCardProps) => {
  const [enterMouseInformed, setEnterMouseInformed] = useState(false);
  const [activeLabelSave, setActiveLabelSave] = useState(true);

  const handleMouseEnterInformDate = () => {
    setEnterMouseInformed(true);
  };

  const handleMouseLeaveInformDate = () => {
    setEnterMouseInformed(false);
  };

  const handleClickLabelSave = () => {
    setActiveLabelSave((prev) => !prev);
  };

  const [divClickNumberCard, setDivClickNumberCard] = useState('');
  const [enterOrLeaveInput, setEnterOrLeaveInput] = useState(false);

  const handleClickNumberCard = (value: string) => {
    setDivClickNumberCard(value);
  };

  const handleClickInformDate = () => {
    if (!enterOrLeaveInput) {
      setDivClickNumberCard('');
    }
  };

  const handleMouseEnterInputNumber = () => {
    setEnterOrLeaveInput(true);
  };

  const handleMouseLeaveInputNumber = () => {
    setEnterOrLeaveInput(false);
  };

  const [valueInputCardNumber, setValueInputCardNumber] = useState('');

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    const numericOnly = inputValue.replace(/\D/g, '');

    const limitedInput = numericOnly.substring(0, 16);

    const formattedInput = limitedInput.replace(/(\d{4})/g, '$1 ').trim();

    setValueInputCardNumber(formattedInput);
  };

  const [valueInputExpirationDate, setValueInputExpirationDate] = useState('');
  const [errorExpireDateYear, setErrorExpireDateYear] = useState(false);

  const handleChangeInputExpirationDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    const numericOnly = inputValue.replace(/\D/g, '');

    const limitedInput = numericOnly.substring(0, 4);

    if (limitedInput.length <= 0) {
      setErrorExpireDateYear(false);
    }

    if (4 === limitedInput.length) {
      var secondToLast = limitedInput[2];
      var last = limitedInput[3];
      const dataToday = new Date();
      const yearFull = String(dataToday.getFullYear());
      const onlyYear = Number(yearFull.slice(2, 4));

      const joinString = secondToLast.concat(last);
      if (Number(joinString) >= 55 || Number(joinString) < onlyYear) {
        setErrorExpireDateYear(true);
      } else {
        setErrorExpireDateYear(false);
      }
    }

    let formattedInput = '';
    for (let i = 0; i < limitedInput.length; i++) {
      if (i === 0) {
        if (Number(limitedInput[i]) < 0 || Number(limitedInput[i]) > 1) {
          formattedInput += '0';
        }
      }

      if (i === 2) {
        formattedInput += '/';
      }
      formattedInput += limitedInput[i];
    }

    setValueInputExpirationDate(formattedInput);
  };

  const [valueInputCvcAndCvv, setValueInputCvcAndCvv] = useState('');

  const handleChangeInputCvcAndCvv = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    const numericOnly = inputValue.replace(/\D/g, '');

    const limitedInput = numericOnly.substring(0, 4);

    setValueInputCvcAndCvv(limitedInput);
  };

  return (
    <Styled.WrapperCreditCard
      $creditcard="1"
      $clicklabel={clickLabel}
      $entermouseinformed={enterMouseInformed}
      onClick={() => {
        if (!enterMouseInformed) {
          handleClickLabelMain('1');
        }
      }}
    >
      <Styled.ContainerLabelAndCardCredit>
        <Styled.ContainerCheckbox onClick={() => handleClickLabel('1')}>
          <Styled.Label
            $activelabel={String(activeLabel)}
            $label="1"
            $mouseenterlabel={mouseEnterLabel}
            onMouseEnter={() => handleMouseEnter('1')}
            onMouseLeave={() => handleMouseLeave('')}
          >
            {clickLabel === '1' && <>{activeLabel && <CheckSvg />}</>}
          </Styled.Label>
        </Styled.ContainerCheckbox>
        <Styled.WrapperCreditCardInfo
          onMouseEnter={() => handleMouseEnter('1')}
          onMouseLeave={() => handleMouseLeave('')}
          onClick={() => handleClickLabel('1')}
        >
          <Styled.ContainerSvgCardCreditSpan>
            <Styled.WrapperCreditCardSvg>
              <CardCredit />
              <Styled.SpanCardCredit>C</Styled.SpanCardCredit>
            </Styled.WrapperCreditCardSvg>
            <Styled.Span $span="1">
              Cartão de <Styled.SpanCredit $spancd="credito">Crédito</Styled.SpanCredit>
            </Styled.Span>
          </Styled.ContainerSvgCardCreditSpan>
          <Styled.Span $span="2">{`R$ ${totalValuePrice}`}</Styled.Span>
        </Styled.WrapperCreditCardInfo>
        <Styled.SpanPagback10>
          Pague com Pagbank, usando o cupom PAGBANK10 e ganhe R$10,00 de desconto.
        </Styled.SpanPagback10>
      </Styled.ContainerLabelAndCardCredit>

      {clickLabel === '1' && (
        <Styled.ContainerInformDate
          onMouseEnter={handleMouseEnterInformDate}
          onMouseLeave={handleMouseLeaveInformDate}
          onClick={handleClickInformDate}
        >
          <Styled.WrapperNewCard>
            <FontAwesomeIcon icon={faCreditCard} />
            <Styled.SpanNew>NOVO</Styled.SpanNew>
          </Styled.WrapperNewCard>
          <Styled.ContainerMainInputInfo>
            <Styled.ContainerNumberCard onClick={() => handleClickNumberCard('1')}>
              <Styled.SpanInfo
                $span="1"
                $divclicknumbercard={divClickNumberCard}
                $errorexpiredateyear={false}
              >
                Número do cartão
              </Styled.SpanInfo>
              <Styled.ContainerInputNumber
                onMouseEnter={handleMouseEnterInputNumber}
                onMouseLeave={handleMouseLeaveInputNumber}
              >
                <Styled.InputNumber
                  placeholder="1234 5678 9012 3456"
                  $errorexpiredateyear={false}
                  value={valueInputCardNumber}
                  onChange={(e) => handleChangeInputValue(e)}
                />
              </Styled.ContainerInputNumber>
            </Styled.ContainerNumberCard>
            <Styled.ContainerExpirationDateAndCvcCvv>
              <Styled.ContainerNumberCard onClick={() => handleClickNumberCard('2')}>
                <Styled.SpanInfo
                  $span="2"
                  $divclicknumbercard={divClickNumberCard}
                  $errorexpiredateyear={errorExpireDateYear}
                >
                  Data de validade
                </Styled.SpanInfo>
                <Styled.ContainerInputNumber
                  onMouseEnter={handleMouseEnterInputNumber}
                  onMouseLeave={handleMouseLeaveInputNumber}
                >
                  <Styled.InputNumber
                    placeholder="MM/AA"
                    $errorexpiredateyear={errorExpireDateYear}
                    value={valueInputExpirationDate}
                    onChange={(e) => handleChangeInputExpirationDate(e)}
                  />
                  {errorExpireDateYear && (
                    <Styled.WrapperError>
                      <FontAwesomeIcon icon={faXmark} />
                    </Styled.WrapperError>
                  )}
                </Styled.ContainerInputNumber>
                {errorExpireDateYear && (
                  <Styled.SpanInfo
                    $span="22"
                    $divclicknumbercard={divClickNumberCard}
                    $errorexpiredateyear={errorExpireDateYear}
                  >
                    Date too far in the future
                  </Styled.SpanInfo>
                )}
              </Styled.ContainerNumberCard>
              <Styled.ContainerNumberCard onClick={() => handleClickNumberCard('3')}>
                <Styled.SpanInfo
                  $span="3"
                  $divclicknumbercard={divClickNumberCard}
                  $errorexpiredateyear={false}
                >
                  CVC / CVV
                </Styled.SpanInfo>
                <Styled.ContainerInputNumber
                  onMouseEnter={handleMouseEnterInputNumber}
                  onMouseLeave={handleMouseLeaveInputNumber}
                >
                  <Styled.InputNumber
                    placeholder="123"
                    $errorexpiredateyear={false}
                    value={valueInputCvcAndCvv}
                    onChange={(e) => handleChangeInputCvcAndCvv(e)}
                  />
                </Styled.ContainerInputNumber>
              </Styled.ContainerNumberCard>
            </Styled.ContainerExpirationDateAndCvcCvv>
            <Styled.ContainerNumberCard onClick={() => handleClickNumberCard('4')}>
              <Styled.SpanInfo
                $span="4"
                $divclicknumbercard={divClickNumberCard}
                $errorexpiredateyear={false}
              >
                Nome do cartão
              </Styled.SpanInfo>
              <Styled.ContainerInputNumber
                onMouseEnter={handleMouseEnterInputNumber}
                onMouseLeave={handleMouseLeaveInputNumber}
              >
                <Styled.InputNumber
                  placeholder="Nome como está no cartão"
                  $errorexpiredateyear={false}
                />
              </Styled.ContainerInputNumber>
            </Styled.ContainerNumberCard>
          </Styled.ContainerMainInputInfo>
          <Styled.ContainerLabelAndSpan>
            <Styled.ContainerCheckboxLabelSave>
              <Styled.LabelSave $activelabelsave={activeLabelSave} onClick={handleClickLabelSave}>
                {activeLabelSave && <CheckSvg />}
              </Styled.LabelSave>
            </Styled.ContainerCheckboxLabelSave>
            <Styled.SpanInfo
              $span="5"
              $divclicknumbercard={''}
              onClick={handleClickLabelSave}
              $errorexpiredateyear={false}
            >
              Salvar para meu próximo pagamento
            </Styled.SpanInfo>
          </Styled.ContainerLabelAndSpan>
          <Styled.ContainerBecauseSaveCardWhatIsCvv>
            <CardCredit />
            <Styled.SpanSaveWhat $span="1">Por que salvar meu cartão?</Styled.SpanSaveWhat>
            <Styled.SpanSaveWhat $span="2">O que é CVV?</Styled.SpanSaveWhat>
          </Styled.ContainerBecauseSaveCardWhatIsCvv>
          <Styled.SpanInfo $span="6" $divclicknumbercard={''} $errorexpiredateyear={false}>
            Ao comprar esse ingresso, concordo que a{' '}
            <Styled.SpanMarkBold>
              compra não pode ser feita com um cartão virtual
            </Styled.SpanMarkBold>{' '}
            e de que devo apresentar o{' '}
            <Styled.SpanMarkBold>cartão físico utilizado na compra</Styled.SpanMarkBold> se for
            retirar os ingressos no local.
          </Styled.SpanInfo>
        </Styled.ContainerInformDate>
      )}
    </Styled.WrapperCreditCard>
  );
};

export default CreditCard;
