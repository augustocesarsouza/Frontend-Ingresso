import { CEP } from 'cep-promise';
import ComponentReusable from '../ComponentReusable/ComponentReusable';
import * as Styled from './styled';
import { useRef, useEffect, useState } from 'react';

interface UserLocationDataProps {
  useLocationData: CEP;
  setLogradouro: React.Dispatch<React.SetStateAction<string>>;
  setNumero: React.Dispatch<React.SetStateAction<string>>;
  setComplemento: React.Dispatch<React.SetStateAction<string>>;
  setReferencia: React.Dispatch<React.SetStateAction<string>>;
  setBairro: React.Dispatch<React.SetStateAction<string>>;
  setEstado: React.Dispatch<React.SetStateAction<string>>;
  setCidade: React.Dispatch<React.SetStateAction<string>>;
  logradouro: string;
  numero: string;
  complemento: string;
  referencia: string;
  bairro: string;
  estado: string;
  cidade: string;
  whatComponentImRendering: string;
}

const UserLocationData = ({
  useLocationData,
  setLogradouro,
  setNumero,
  setComplemento,
  setReferencia,
  setBairro,
  setEstado,
  setCidade,
  logradouro,
  numero,
  complemento,
  referencia,
  bairro,
  estado,
  cidade,
  whatComponentImRendering,
}: UserLocationDataProps) => {
  const SelectRef = useRef<HTMLSelectElement | null>(null);
  const [blockType, setBlockType] = useState(false);
  const [clickSelect, setClickSelect] = useState(false);
  const [valueYear, setValueYear] = useState('');

  useEffect(() => {
    if (useLocationData !== null) {
      SelectRef.current.value = useLocationData.state;
      setBlockType(true);
    } else {
      setBlockType(false);
    }
  }, [useLocationData]);

  useEffect(() => {
    if (SelectRef.current.value === 'Estado') {
      setEstado('');
    } else {
      setEstado(SelectRef.current.value);
    }
  }, [SelectRef.current, clickSelect, blockType]);

  const handleClickSelect = () => {
    setClickSelect((prev) => !prev);
  };

  useEffect(() => {
    setValueYear(estado);
  }, [estado]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValueYear(e.target.value);
  };

  return (
    <Styled.ContainerMain>
      <Styled.ContainerFirst>
        <ComponentReusable
          text="Logradouro"
          width="50"
          inputData={useLocationData !== null ? useLocationData.street : ''}
          setStateDado={setLogradouro}
          valueInfoUser={logradouro}
          whatComponentImRendering={whatComponentImRendering}
        />
        <ComponentReusable
          text="Número"
          width="20"
          inputData=""
          setStateDado={setNumero}
          valueInfoUser={numero}
          whatComponentImRendering={whatComponentImRendering}
        />
        <ComponentReusable
          text="Complemento"
          width="30"
          inputData=""
          setStateDado={setComplemento}
          valueInfoUser={complemento}
          whatComponentImRendering={whatComponentImRendering}
        />
        <ComponentReusable
          text="Referência"
          width="30"
          inputData=""
          setStateDado={setReferencia}
          valueInfoUser={referencia}
          whatComponentImRendering={whatComponentImRendering}
        />
      </Styled.ContainerFirst>
      <Styled.ContainerFirst>
        <ComponentReusable
          text="Bairro"
          width="50"
          inputData={useLocationData !== null ? useLocationData.neighborhood : ''}
          setStateDado={setBairro}
          valueInfoUser={bairro}
          whatComponentImRendering={whatComponentImRendering}
        />
        <Styled.ContainerSelect onClick={handleClickSelect}>
          <Styled.Select
            ref={SelectRef}
            $blocktype={String(blockType)}
            value={valueYear}
            onChange={(e) => handleChange(e)}
          >
            <Styled.Option>Estado</Styled.Option>
            <Styled.Option>AC</Styled.Option>
            <Styled.Option>AL</Styled.Option>
            <Styled.Option>AP</Styled.Option>
            <Styled.Option>AM</Styled.Option>
            <Styled.Option>BA</Styled.Option>
            <Styled.Option>CE</Styled.Option>
            <Styled.Option>DF</Styled.Option>
            <Styled.Option>ES</Styled.Option>
            <Styled.Option>GO</Styled.Option>
            <Styled.Option>MA</Styled.Option>
            <Styled.Option>MT</Styled.Option>
            <Styled.Option>MS</Styled.Option>
            <Styled.Option>MG</Styled.Option>
            <Styled.Option>PA</Styled.Option>
            <Styled.Option>PB</Styled.Option>
            <Styled.Option>PR</Styled.Option>
            <Styled.Option>PE</Styled.Option>
            <Styled.Option>PI</Styled.Option>
            <Styled.Option>RJ</Styled.Option>
            <Styled.Option>RN</Styled.Option>
            <Styled.Option>RS</Styled.Option>
            <Styled.Option>RO</Styled.Option>
            <Styled.Option>RR</Styled.Option>
            <Styled.Option>SC</Styled.Option>
            <Styled.Option>SP</Styled.Option>
            <Styled.Option>SE</Styled.Option>
            <Styled.Option>TO</Styled.Option>
          </Styled.Select>
        </Styled.ContainerSelect>
        <ComponentReusable
          text="Cidade"
          width="30"
          inputData={useLocationData !== null ? useLocationData.city : ''}
          setStateDado={setCidade}
          valueInfoUser={cidade}
          whatComponentImRendering={whatComponentImRendering}
        />
      </Styled.ContainerFirst>
    </Styled.ContainerMain>
  );
};

export default UserLocationData;
