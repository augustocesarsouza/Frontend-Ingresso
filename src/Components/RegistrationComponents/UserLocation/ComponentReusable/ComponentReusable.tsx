import * as Styled from './styled';
import { useState, useEffect } from 'react';

interface ComponentReusableProps {
  text: string;
  width: string;
  inputData: string;
  setStateDado: React.Dispatch<React.SetStateAction<string>>;
  whatComponentImRendering: string;
  valueInfoUser: string;
}

const ComponentReusable = ({
  text,
  width = '50',
  inputData,
  setStateDado,
  whatComponentImRendering,
  valueInfoUser,
}: ComponentReusableProps) => {
  const [FocusOrBlur, setFocusOrBlur] = useState(false);
  const [hasValueInputName, setHasValueInputName] = useState(false);
  const [valueInput, setValueInput] = useState('');
  const [blockType, setBlockType] = useState(false);

  useEffect(() => {
    if (inputData.length > 0) {
      setValueInput(inputData);
      setHasValueInputName(true);
      setBlockType(true);
    } else {
      setValueInput(inputData);
      setHasValueInputName(false);
      setBlockType(false);
    }
  }, [inputData]);

  const handleChangeInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
    if (e.target.value.length > 0) {
      setHasValueInputName(true);
    } else {
      setHasValueInputName(false);
    }
  };

  const handleFocus = () => {
    setFocusOrBlur(true);
  };

  const handleBlur = () => {
    setFocusOrBlur(false);
  };

  useEffect(() => {
    setStateDado(valueInput);
  }, [valueInput]);

  useEffect(() => {
    if (valueInfoUser.length > 0) {
      setValueInput(valueInfoUser);
      setHasValueInputName(true);
    }
  }, [valueInfoUser]);

  return (
    <Styled.ContainerWarning
      $width={width}
      id="container-warning"
      $whatcomponentimrendering={whatComponentImRendering}
    >
      <Styled.ContainerAllColors $focusorblur={String(FocusOrBlur)}>
        <Styled.SpanName $hasvalueinputname={String(hasValueInputName)}>{text}</Styled.SpanName>
        <Styled.Input
          type="text"
          id={`input-${text.toLowerCase()}`}
          value={valueInfoUser.length > 0 ? valueInfoUser : valueInput}
          $blocktype={String(blockType)}
          onChange={handleChangeInputName}
          $hasvalueinputname={String(hasValueInputName)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </Styled.ContainerAllColors>
    </Styled.ContainerWarning>
  );
};

export default ComponentReusable;
