import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './styled';
import { useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface InputAllCardDebitProps {
  divClickNumberCard: string;
  setDivClickNumberCard: React.Dispatch<React.SetStateAction<string>>;
  setEnterOrLeaveInput: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputAllCardDebit = ({
  divClickNumberCard,
  setDivClickNumberCard,
  setEnterOrLeaveInput,
}: InputAllCardDebitProps) => {
  const handleClickNumberCard = (value: string) => {
    setDivClickNumberCard(value);
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
          <Styled.InputNumber placeholder="Nome como está no cartão" $errorexpiredateyear={false} />
        </Styled.ContainerInputNumber>
      </Styled.ContainerNumberCard>
    </Styled.ContainerMainInputInfo>
  );
};

export default InputAllCardDebit;
