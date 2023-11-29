import { useEffect, useRef, useState } from 'react';
import * as Styled from './styled';
import cep, { CEP } from 'cep-promise';
import InputWarning from '../../InputWarning/InputWarning';
import Button from '../Button/Button';

interface CepProps {
  setUseLocationData: React.Dispatch<React.SetStateAction<CEP>>;
  setCep: React.Dispatch<React.SetStateAction<string>>;
  cepp: string;
}

const Cep = ({ setUseLocationData, setCep, cepp }: CepProps) => {
  const [numberYes, setNumberYes] = useState(false);
  const [FocusOrBlur, setFocusOrBlur] = useState(false);
  const [backspacePress, setBackspacePress] = useState(false);
  const [valueNumber, setValueNumber] = useState('');
  const [hasValueInputName, setHasValueInputName] = useState(false);

  const [hasValueInput, setHasValueInput] = useState('_____-___'); // _____-____
  const [cursorPositionIndex, setCursorPositionIndex] = useState(0);
  const [cursorPositionIndexDelete, setCursorPositionIndexDelete] = useState(0);
  const [errorWhenConsultingCpf, setErrorWhenConsultingCpf] = useState(true);
  const refInput = useRef<HTMLInputElement | null>(null);
  const [typeInputCpf, setTypeInputCpf] = useState(false);

  useEffect(() => {
    const valueInputCpf = refInput.current.value;
    let arrayString = [];
    for (let i = 0; i < valueInputCpf.length; i++) {
      if (!isNaN(Number(valueInputCpf[i]))) {
        arrayString.push(valueInputCpf[i]);
      }
    }
    const joinString = arrayString.join('');
    if (joinString.length === 8) {
      setCep(joinString);
    } else {
      setCep('');
    }
  }, [refInput.current, typeInputCpf]);

  const handleCLick = (e: KeyboardEvent) => {
    if (e.key === 'Backspace') {
      setBackspacePress(true);
    } else {
      setBackspacePress(false);
    }

    if (!isNaN(Number(e.key))) {
      setValueNumber(e.key);
      setNumberYes(true);
    } else {
      setNumberYes(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleCLick);

    return () => {
      document.removeEventListener('keydown', handleCLick);
    };
  }, []);

  const handleChangeInput = () => {
    setTypeInputCpf((prev) => !prev);
    if (backspacePress) {
      const firstUnderscoreIndex = hasValueInput.indexOf('_');

      if (firstUnderscoreIndex >= 0) {
        let positionSub = firstUnderscoreIndex - 1;

        if (hasValueInput[positionSub] === '.' || hasValueInput[positionSub] === '-') {
          positionSub = positionSub - 1;
        }

        if (positionSub >= 0) {
          const newValue =
            hasValueInput.substring(0, positionSub) + // pega uma parte da string até onde quero deleta coloco no lugar _
            '_' +
            hasValueInput.substring(positionSub + 1); // pego a parte depois do index que eu inseri _, pego resto e junto

          setHasValueInput(newValue);
        }

        setCursorPositionIndexDelete(positionSub);
      }

      if (firstUnderscoreIndex === -1) {
        const newValue = hasValueInput.substring(0, hasValueInput.length - 1) + '_';

        setHasValueInput(newValue);
        setCursorPositionIndexDelete(hasValueInput.length - 1);
      }
    }

    if (numberYes) {
      const original = hasValueInput;
      let replaced = false;
      let cursorPosition = null;

      const newValue = original.split('').map((char, index) => {
        if (char === '_' && !replaced) {
          replaced = true;
          cursorPosition = index + 1;
          return valueNumber;
        } else {
          return char;
        }
      });

      setHasValueInput(newValue.join(''));
      if (cursorPosition !== null) {
        setCursorPositionIndex(cursorPosition);
      }
    }
  };

  const [unlockButtonOk, setUnlockButtonOk] = useState(false);

  useEffect(() => {
    let numberChar = hasValueInput[hasValueInput.length - 1];
    if (!isNaN(Number(numberChar))) {
      setUnlockButtonOk(true);
    } else {
      setUseLocationData(null);

      setUnlockButtonOk(false);
    }

    var haveAnyNumber = new RegExp('[0-9]').test(hasValueInput);
    if (haveAnyNumber) {
      setHasValueInputName(true);
    } else {
      setHasValueInputName(false);
    }
  }, [hasValueInput]);

  useEffect(() => {
    if (cursorPositionIndex !== null) {
      if (refInput.current) {
        refInput.current.setSelectionRange(cursorPositionIndex, cursorPositionIndex);
      }
    }
  }, [cursorPositionIndex, hasValueInputName]);

  useEffect(() => {
    if (cursorPositionIndexDelete !== null) {
      if (refInput.current) {
        refInput.current.setSelectionRange(cursorPositionIndexDelete, cursorPositionIndexDelete);
      }
    }
  }, [cursorPositionIndexDelete]);

  const handleFocus = () => {
    setFocusOrBlur(true);
  };

  const handleBlur = () => {
    setFocusOrBlur(false);
  };

  const handleClick = () => {
    if (refInput.current) {
      const firstUnderscoreIndex = hasValueInput.indexOf('_');

      refInput.current.setSelectionRange(firstUnderscoreIndex, firstUnderscoreIndex);
    }
  };

  const handleOkCep = async (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();

    const street = localStorage.getItem(`${hasValueInput} street`);
    const neighborhood = localStorage.getItem(`${hasValueInput} neighborhood`);
    const city = localStorage.getItem(`${hasValueInput} city`);
    const state = localStorage.getItem(`${hasValueInput} state`);
    if (street === null || neighborhood === null || city === null || state === null) {
      await cep(hasValueInput)
        .then((res) => {
          setUseLocationData(res);
          localStorage.setItem(`${hasValueInput} street`, res.street);
          localStorage.setItem(`${hasValueInput} neighborhood`, res.neighborhood);
          localStorage.setItem(`${hasValueInput} city`, res.city);
          localStorage.setItem(`${hasValueInput} state`, res.state);

          setErrorWhenConsultingCpf(true);
        })
        .catch(() => setErrorWhenConsultingCpf(false));
    } else {
      const dataLocationObj = {
        cep: '',
        state,
        city,
        street,
        neighborhood,
        service: '',
      };
      setUseLocationData(dataLocationObj);
    }
  };

  useEffect(() => {
    if (cepp.length <= 0) return;
    setHasValueInput(cepp);
  }, [cepp]);

  return (
    <Styled.ContainerYourWarning>
      <Styled.ContainerColor
        $focusorblur={String(FocusOrBlur)}
        $errorwhenconsultingcpf={String(errorWhenConsultingCpf)}
      >
        <Styled.Span $hasvalueinputname={String(hasValueInputName)}>CEP</Styled.Span>
        <Styled.Input
          type="text"
          maxLength={10}
          value={hasValueInputName ? hasValueInput : ''}
          $hasvalueinputname={String(hasValueInputName)}
          onChange={handleChangeInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={handleClick}
          ref={refInput}
          id="input-cep"
        />
        <Styled.ContainerButtonOk
          $unlockbuttonok={String(unlockButtonOk)}
          onClick={(e) => handleOkCep(e)}
        >
          <Button onClick={handleOkCep} children="Ok" unlockButtonOk={unlockButtonOk} />
        </Styled.ContainerButtonOk>
      </Styled.ContainerColor>
      <InputWarning
        Children={'CEP inválido ou não encontrado'}
        enableWarning={errorWhenConsultingCpf}
      />
    </Styled.ContainerYourWarning>
  );
};

export default Cep;
