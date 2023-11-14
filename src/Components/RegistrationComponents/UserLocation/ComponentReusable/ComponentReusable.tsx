import * as Styled from './styled';
import { useState, useEffect } from 'react';

interface ComponentReusableProps {
  text: string;
  width: string;
  inputData: string;
}

const ComponentReusable = ({ text, width = '50', inputData }: ComponentReusableProps) => {
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

  return (
    <Styled.ContainerWarning $width={width} id="container-warning">
      <Styled.ContainerAllColors $focusorblur={String(FocusOrBlur)}>
        <Styled.SpanName $hasvalueinputname={String(hasValueInputName)}>{text}</Styled.SpanName>
        <Styled.Input
          type="text"
          id={`input-${text.toLowerCase()}`}
          value={valueInput}
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
