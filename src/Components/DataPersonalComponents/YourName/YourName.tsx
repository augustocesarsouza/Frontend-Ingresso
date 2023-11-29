import {
  ContextMyOrders,
  ContextMyOrdersProps,
} from '../../../Templates/SettingsAccount/SettingsAccount';
import InputWarning from '../../RegistrationComponents/InputWarning/InputWarning';
import * as Styled from './styled';
import { useState, useRef, useEffect, useContext } from 'react';

interface YourNameProps {
  svgDataPersonal: boolean;
  setNameUserChange: React.Dispatch<React.SetStateAction<string>>;
}

const YourName = ({ svgDataPersonal, setNameUserChange }: YourNameProps) => {
  const [FocusOrBlur, setFocusOrBlur] = useState(false);
  const [greaterThan3LessThan61, setGreaterThan3LessThan61] = useState(true);
  const [hasValueInputName, setHasValueInputName] = useState(false);
  const inputNameRef = useRef<HTMLInputElement | null>(null);
  const useContextMyOrders = useContext<ContextMyOrdersProps | null>(ContextMyOrders);

  const [nameUser, setNameUser] = useState('');

  const handleChangeInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      setHasValueInputName(true);
      setNameUser(e.target.value);
      setNameUserChange(e.target.value);

      if (e.target.value.length >= 3) {
        setGreaterThan3LessThan61(true);
      } else {
        setGreaterThan3LessThan61(false);
      }
    } else {
      setHasValueInputName(false);
      setGreaterThan3LessThan61(false);
      setNameUser(e.target.value);
    }
  };

  useEffect(() => {
    if (useContextMyOrders.userObj === null) return;
    const { name } = useContextMyOrders.userObj;

    setNameUser(name);
    setHasValueInputName(true);
  }, [svgDataPersonal]);

  const handleFocus = () => {
    setFocusOrBlur(true);
  };

  const handleBlur = () => {
    setFocusOrBlur(false);
  };

  return (
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
          value={nameUser}
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
  );
};

export default YourName;
