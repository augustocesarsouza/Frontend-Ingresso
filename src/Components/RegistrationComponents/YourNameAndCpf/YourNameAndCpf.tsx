import * as Styled from './styled';
import { useState, useEffect, useRef } from 'react';
import InputWarning from '../InputWarning/InputWarning';

interface YourNameAndCpfProps {
  verifyFields: boolean;
  setVerifyFields: React.Dispatch<React.SetStateAction<boolean>>;
  setValueOfName: React.Dispatch<React.SetStateAction<string>>;
  setValueOfCpf: React.Dispatch<React.SetStateAction<string>>;
}

const YourNameAndCpf = ({
  verifyFields,
  setVerifyFields,
  setValueOfName,
  setValueOfCpf,
}: YourNameAndCpfProps) => {
  const [numberYes, setNumberYes] = useState(false);
  const [backspacePress, setBackspacePress] = useState(false);
  const [valueNumber, setValueNumber] = useState('');
  const [FocusOrBlur, setFocusOrBlur] = useState(false);
  const [FocusOrBlurCpf, setFocusOrBlurCpf] = useState(false);
  const [hasValueInputName, setHasValueInputName] = useState(false);
  const [greaterThan3LessThan61, setGreaterThan3LessThan61] = useState(true);
  const [greaterThan14Cpf, setGreaterThan14Cpf] = useState(true);

  const refInputCpf = useRef<HTMLInputElement | null>(null);
  const inputNameRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (verifyFields) {
      const nameValue = inputNameRef.current.value;
      const cpfValue = refInputCpf.current.value;
      setValueOfName(nameValue);
      setValueOfCpf(cpfValue);

      if (nameValue.length < 3) {
        setVerifyFields(false);
        setGreaterThan3LessThan61(false);
      }

      let count = 0;
      for (let i = 0; i < cpfValue.length; i++) {
        if (
          refInputCpf.current.value[i] !== '.' &&
          refInputCpf.current.value[i] !== '-' &&
          refInputCpf.current.value[i] !== '_'
        ) {
          count++;
        }
      }

      if (count < 11) {
        setVerifyFields(false);
        setGreaterThan14Cpf(false);
      }
    }
  }, [inputNameRef.current, refInputCpf.current, verifyFields]);

  const handleChangeInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      setHasValueInputName(true);

      if (e.target.value.length >= 3) {
        setGreaterThan3LessThan61(true);
      } else {
        setGreaterThan3LessThan61(false);
      }
    } else {
      setHasValueInputName(false);
      setGreaterThan3LessThan61(false);
    }
  };

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

  const [hasValueInputCpf, setHasValueInputCpf] = useState('___.___.___-__');
  const [cursorPositionIndex, setCursorPositionIndex] = useState(0);
  const [cursorPositionIndexDelete, setCursorPositionIndexDelete] = useState(0);

  const handleChangeInputCpf = (e: React.ChangeEvent<HTMLInputElement>) => {
    let count = 0;
    for (let i = 0; i < e.target.value.length; i++) {
      if (e.target.value[i] !== '.' && e.target.value[i] !== '-' && e.target.value[i] !== '_') {
        count++;
      }
    }

    if (count >= 11) {
      setGreaterThan14Cpf(true);
    } else {
      setGreaterThan14Cpf(false);
    }

    if (backspacePress) {
      const firstUnderscoreIndex = hasValueInputCpf.indexOf('_');

      if (firstUnderscoreIndex >= 0) {
        let positionSub = firstUnderscoreIndex - 1;
        if (hasValueInputCpf[positionSub] === '.' || hasValueInputCpf[positionSub] === '-') {
          positionSub = positionSub - 1;
        }

        if (positionSub >= 0) {
          const newValue =
            hasValueInputCpf.substring(0, positionSub) + // pega uma parte da string até onde quero deleta coloco no lugar _
            '_' +
            hasValueInputCpf.substring(positionSub + 1); // pego a parte depois do index que eu inseri _, pego resto e junto

          setHasValueInputCpf(newValue);
        }

        setCursorPositionIndexDelete(positionSub);
      }

      if (firstUnderscoreIndex === -1) {
        const newValue = hasValueInputCpf.substring(0, hasValueInputCpf.length - 1) + '_';

        setHasValueInputCpf(newValue);
        setCursorPositionIndexDelete(hasValueInputCpf.length - 1);
      }
    }

    if (numberYes) {
      const original = hasValueInputCpf;
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

      setHasValueInputCpf(newValue.join(''));
      if (cursorPosition !== null) {
        setCursorPositionIndex(cursorPosition);
      }
    }
  };

  useEffect(() => {
    if (cursorPositionIndex !== null) {
      if (refInputCpf.current) {
        refInputCpf.current.setSelectionRange(cursorPositionIndex, cursorPositionIndex);
      }
    }
  }, [cursorPositionIndex]);

  useEffect(() => {
    if (cursorPositionIndexDelete !== null) {
      if (refInputCpf.current) {
        refInputCpf.current.setSelectionRange(cursorPositionIndexDelete, cursorPositionIndexDelete);
      }
    }
  }, [cursorPositionIndexDelete]);

  const handleFocus = () => {
    setFocusOrBlur(true);
  };

  const handleBlur = () => {
    setFocusOrBlur(false);
  };

  const handleFocusCpf = () => {
    setFocusOrBlurCpf(true);
  };

  const handleBlurCpf = () => {
    setFocusOrBlurCpf(false);
  };

  const handleClickCpf = () => {
    if (refInputCpf.current) {
      const firstUnderscoreIndex = hasValueInputCpf.indexOf('_');

      refInputCpf.current.setSelectionRange(firstUnderscoreIndex, firstUnderscoreIndex);
    }
  };

  return (
    <Styled.ContainerInputExternal>
      <Styled.ContainerYourNameAndWarning>
        <Styled.ContainerAllColors
          $focusorblur={String(FocusOrBlur)}
          $greaterthan3lessthan61={String(greaterThan3LessThan61)}
        >
          <Styled.SpanName $hasvalueinputname={String(hasValueInputName)}>
            *Como quer ser chamado
          </Styled.SpanName>
          <Styled.Input
            type="text"
            id="input-your-name"
            ref={inputNameRef}
            onChange={handleChangeInputName}
            $hasvalueinputname={String(hasValueInputName)}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </Styled.ContainerAllColors>
        <InputWarning
          Children={'O nome precisa ter entre 3 e 60 caracteres e não possuir caracteres especiais'}
          enableWarning={greaterThan3LessThan61}
        />
      </Styled.ContainerYourNameAndWarning>
      <Styled.ContainerYourCpfWarning>
        <Styled.ContainerCpfColor
          $focusorblur={String(FocusOrBlurCpf)}
          $greaterThan14Cpf={String(greaterThan14Cpf)}
        >
          <Styled.SpanCpf $hasvalueinputname={String(hasValueInputName)}>*CPF</Styled.SpanCpf>
          <Styled.InputCpf
            type="text"
            maxLength={24}
            value={hasValueInputCpf}
            onChange={handleChangeInputCpf}
            $hasvalueinputname={String(hasValueInputName)}
            onFocus={handleFocusCpf}
            onBlur={handleBlurCpf}
            onClick={handleClickCpf}
            ref={refInputCpf}
            id="input-cpf"
          />
        </Styled.ContainerCpfColor>
        <InputWarning
          Children={'É obrigatório preencher o CPF.'}
          enableWarning={greaterThan14Cpf}
        />
      </Styled.ContainerYourCpfWarning>
    </Styled.ContainerInputExternal>
  );
};

export default YourNameAndCpf;
