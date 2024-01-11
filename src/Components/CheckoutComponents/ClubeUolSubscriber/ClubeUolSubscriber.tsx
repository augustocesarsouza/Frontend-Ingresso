import * as Styled from './styled';
import { useState, useEffect } from 'react';

const ClubeUolSubscriber = () => {
  const [FocusOrBlur, setFocusOrBlur] = useState(false);
  const [valueInput, setValueInput] = useState('');
  const [whatKey, setWhatKey] = useState('');

  const handleFocus = () => {
    setFocusOrBlur(true);
  };

  const handleBlur = () => {
    setFocusOrBlur(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    setWhatKey(e.key);
    if (e.key === 'Backspace') {
      setValueInput((prev) => {
        if (prev.length === 15) {
          setWhatKey('seila');
          return prev;
        }

        const newString = prev.slice(0, prev.length - 1);

        return newString;
      });
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const [unlockApply, setUnlockApply] = useState(false);

  useEffect(() => {
    if (valueInput.length === 14 || valueInput.length === 18) {
      setUnlockApply(true);
    } else {
      setUnlockApply(false);
    }
  }, [valueInput]);

  const handleChangeInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 0) {
      const inputValue = e.target.value;

      const numericOnly = inputValue.replace(/\D/g, '');

      const limitedInput = numericOnly.substring(0, 14);

      if (whatKey === 'seila') {
        if (inputValue.length === 11) {
          setValueInput(formatCPF(limitedInput));
        }
      }

      if (whatKey === 'Backspace') return;

      setValueInput(limitedInput);

      if (limitedInput.length === 11) {
        setValueInput(formatCPF(limitedInput));
      } else if (limitedInput.length >= 12) {
        let formattedInput = '';
        for (let i = 0; i < limitedInput.length; i++) {
          if (i === 2) {
            formattedInput += '.';
          }

          if (i === 5) {
            formattedInput += '.';
          }

          if (i === 8) {
            formattedInput += '/';
          }

          if (i === 12) {
            formattedInput += '-';
          }

          formattedInput += limitedInput[i];
        }
        setValueInput(formattedInput);
      }
    }
  };

  const formatCPF = (numericOnly: string) => {
    let formattedInput = '';
    for (let i = 0; i < numericOnly.length; i++) {
      if (i === 3 || i === 6) {
        formattedInput += '.';
      }

      if (i === 9) {
        formattedInput += '-';
      }

      formattedInput += numericOnly[i];
    }

    return formattedInput;
  };

  const handleClickApply = () => {
    console.log('aqui');
  };

  return (
    <Styled.ContainerCpfOrCnpjBenefit>
      <Styled.ContainerClubeUol>
        <Styled.WrapperImgClubeUol>
          <Styled.WrapperImg
            src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1703514340/logo_header_hksemr.png"
            alt="clube-uol"
          />
        </Styled.WrapperImgClubeUol>
        <Styled.Span $span="1">
          Assinante UOL tem isenção de taxa de serviço em até 2 ingressos por mês.
        </Styled.Span>
        <Styled.Span $span="2">Saiba mais</Styled.Span>
      </Styled.ContainerClubeUol>
      <Styled.ContainerTypeCpfOrCnpj>
        <Styled.Span $span="3">
          Digite seu CPF ou CNPJ para consultar e aplicar o seu benefício. Caso esteja disponível, a
          isenção da taxa será automaticamente aplicada no valor da sua compra.
        </Styled.Span>
        <Styled.WrapperInputAndButton>
          <Styled.ContainerAllColors $focusorblur={String(FocusOrBlur)}>
            <Styled.Input
              type="text"
              id="input-your-cpf-cnpj"
              placeholder="Digite seu CPF ou CNPJ"
              value={valueInput}
              onChange={handleChangeInputName}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </Styled.ContainerAllColors>
          <Styled.Button
            $unlockapply={unlockApply}
            onClick={() => {
              if (unlockApply) {
                handleClickApply();
              }
            }}
          >
            APLICAR
          </Styled.Button>
        </Styled.WrapperInputAndButton>
      </Styled.ContainerTypeCpfOrCnpj>
    </Styled.ContainerCpfOrCnpjBenefit>
  );
};

export default ClubeUolSubscriber;
