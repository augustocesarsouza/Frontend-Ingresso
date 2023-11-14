import { getDaysInMonth, getMonth, parse } from 'date-fns';
import * as Styled from './styled';
import { useState, useEffect, useRef } from 'react';
import { ptBR } from 'date-fns/locale';
import DayMonth from '../DayMonth/DayMonth';

const BirthdayAndGender = () => {
  const [changeOptions, setChangeOption] = useState(false);
  const [dayMes, setDaysMes] = useState<number[] | []>([]);
  const SelectMonthRef = useRef<HTMLSelectElement | null>(null);
  const SelectDayOfMonthRef = useRef<HTMLSelectElement | null>(null);

  useEffect(() => {
    const dateActual = new Date().getFullYear();
    const mes = SelectMonthRef.current.value;
    const data = parse(mes, 'MMMM', new Date(), { locale: ptBR });
    let numberOfMes = getMonth(data);

    const date = new Date(dateActual, numberOfMes, 1);
    const daysInMonth = getDaysInMonth(date);
    const array = [];

    for (let i = 1; i <= daysInMonth; i++) {
      array.push(i);
    }
    setDaysMes(array);
  }, [changeOptions]);

  const handleCLickOption = () => {
    setChangeOption((prev) => !prev);
  };

  return (
    <Styled.ContainerMainDateBirthday>
      <Styled.ContainerSelect>
        <Styled.Select ref={SelectMonthRef} onClick={handleCLickOption}>
          <Styled.Option>Mês de aniversário</Styled.Option>
          <Styled.Option>Janeiro</Styled.Option>
          <Styled.Option>Fevereiro</Styled.Option>
          <Styled.Option>Março</Styled.Option>
          <Styled.Option>Abril</Styled.Option>
          <Styled.Option>Maio</Styled.Option>
          <Styled.Option>Junho</Styled.Option>
          <Styled.Option>Julho</Styled.Option>
          <Styled.Option>Agosto</Styled.Option>
          <Styled.Option>Setembro</Styled.Option>
          <Styled.Option>Outubro</Styled.Option>
          <Styled.Option>Novembro</Styled.Option>
          <Styled.Option>Dezembro</Styled.Option>
        </Styled.Select>
      </Styled.ContainerSelect>
      <DayMonth
        SelectDayOfMonthRef={SelectDayOfMonthRef}
        handleCLickOption={handleCLickOption}
        dayMes={dayMes}
      />
      <Styled.ContainerSelect>
        <Styled.Select>
          <Styled.Option>Prefiro não informar</Styled.Option>
          <Styled.Option>Feminino</Styled.Option>
          <Styled.Option>Masculino</Styled.Option>
        </Styled.Select>
      </Styled.ContainerSelect>
    </Styled.ContainerMainDateBirthday>
  );
};

export default BirthdayAndGender;
