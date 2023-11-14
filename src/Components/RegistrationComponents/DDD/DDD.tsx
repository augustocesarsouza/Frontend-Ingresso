import * as Styled from './styled';
import { useState, useEffect, useRef } from 'react';

const DDD = () => {
  const [numberYes, setNumberYes] = useState(false);
  const [FocusOrBlur, setFocusOrBlur] = useState(false);
  const [backspacePress, setBackspacePress] = useState(false);
  const [valueNumber, setValueNumber] = useState('');

  const [hasValueInputName, setHasValueInputName] = useState(false);
  const [hasValueInput, setHasValueInput] = useState('__');
  const [cursorPositionIndex, setCursorPositionIndex] = useState(0);
  const [cursorPositionIndexDelete, setCursorPositionIndexDelete] = useState(0);
  const refInput = useRef<HTMLInputElement | null>(null);

  const handleCLick = (e: KeyboardEvent) => {
    if (e.key === 'Backspace') {
      setBackspacePress(true);
    } else {
      setBackspacePress(false);
    }

    if (!isNaN(Number(e.key))) {
      setValueNumber(e.key);
      setNumberYes(true);
      setCursorPositionIndex(0);
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
    if (backspacePress) {
      const firstUnderscoreIndex = hasValueInput.indexOf('_');

      if (firstUnderscoreIndex >= 0) {
        let positionSub = firstUnderscoreIndex - 1;

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

  useEffect(() => {
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

  return (
    <Styled.ContainerYourWarning>
      <Styled.ContainerColor $focusorblur={String(FocusOrBlur)}>
        <Styled.Span $hasvalueinputname={String(hasValueInputName)}>DDD</Styled.Span>
        <Styled.Input
          type="text"
          maxLength={4}
          value={hasValueInputName ? hasValueInput : ''}
          $hasvalueinputname={String(hasValueInputName)}
          onChange={handleChangeInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={handleClick}
          ref={refInput}
          id="input-ddd"
        />
      </Styled.ContainerColor>
    </Styled.ContainerYourWarning>
  );
};

export default DDD;
