import { CEP } from 'cep-promise';
import ComponentReusable from '../ComponentReusable/ComponentReusable';
import * as Styled from './styled';
import { useRef, useEffect, useState } from 'react';

interface UserLocationDataProps {
  useLocationData: CEP;
}

const UserLocationData = ({ useLocationData }: UserLocationDataProps) => {
  const SelectRef = useRef<HTMLSelectElement | null>(null);
  const [blockType, setBlockType] = useState(false);

  useEffect(() => {
    if (useLocationData !== null) {
      SelectRef.current.value = useLocationData.state;
      setBlockType(true);
    } else {
      setBlockType(false);
    }
  }, [useLocationData]);

  return (
    <Styled.ContainerMain>
      <Styled.ContainerFirst>
        <ComponentReusable
          text="Logradouro"
          width="50"
          inputData={useLocationData !== null ? useLocationData.street : ''}
        />
        <ComponentReusable text="Número" width="20" inputData="" />
        <ComponentReusable text="Complemento" width="30" inputData="" />
        <ComponentReusable text="Referência" width="30" inputData="" />
      </Styled.ContainerFirst>
      <Styled.ContainerFirst>
        <ComponentReusable
          text="Bairro"
          width="50"
          inputData={useLocationData !== null ? useLocationData.neighborhood : ''}
        />
        <Styled.ContainerSelect>
          <Styled.Select ref={SelectRef} $blocktype={String(blockType)}>
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
        />
      </Styled.ContainerFirst>
    </Styled.ContainerMain>
  );
};

export default UserLocationData;
