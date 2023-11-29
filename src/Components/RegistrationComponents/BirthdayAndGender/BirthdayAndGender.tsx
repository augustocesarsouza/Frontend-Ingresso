import { getDaysInMonth, getMonth, parse, eachYearOfInterval, format } from 'date-fns';
import * as Styled from './styled';
import { useState, useEffect, useRef } from 'react';
import { ptBR } from 'date-fns/locale';
import DayMonth from '../DayMonth/DayMonth';

interface BirthdayAndGenderProps {
  setBirthday: React.Dispatch<React.SetStateAction<string>>;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  whatComponentImRendering: string;
  birthday: string;
  gender: string;
}

const BirthdayAndGender = ({
  setBirthday,
  setGender,
  whatComponentImRendering,
  birthday,
  gender,
}: BirthdayAndGenderProps) => {
  const [changeOptions, setChangeOption] = useState(false);
  const [changeOptionsYear, setChangeOptionYear] = useState(false);
  const [changeOptionsGender, setChangeOptionGender] = useState(false);
  const [dayMes, setDaysMes] = useState<number[] | []>([]);
  const SelectMonthRef = useRef<HTMLSelectElement | null>(null);
  const SelectDayOfMonthRef = useRef<HTMLSelectElement | null>(null);
  const SelectYearRef = useRef<HTMLSelectElement | null>(null);
  const SelectGenderRef = useRef<HTMLSelectElement | null>(null);
  const refYears = useRef<string[]>([]);

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

    const startPeriod = new Date(1900, 0, 1);
    const endPeriod = new Date();

    const yearsPeriod = eachYearOfInterval({ start: startPeriod, end: endPeriod });
    if (refYears.current.length > 0) return;

    yearsPeriod.forEach((year) => {
      if (refYears.current !== null) {
        refYears.current.push(format(year, 'yyyy'));
      }
    });
  }, [changeOptions]);

  const handleCLickOption = () => {
    setChangeOption((prev) => !prev);
  };

  const handleCLickOptionYear = () => {
    setChangeOptionYear((prev) => !prev);
  };

  const handleCLickOptionGender = () => {
    setChangeOptionGender((prev) => !prev);
    setGender(SelectGenderRef.current.value);
  };

  useEffect(() => {
    let day = parseInt(SelectDayOfMonthRef.current.value);
    let month = SelectMonthRef.current.value;
    let year = parseInt(SelectYearRef.current.value);
    const numberMonth = getMonthNumber(month);

    if (numberMonth > 0 && day > 0 && year >= 1900) {
      let stringConcat = '';
      if (day <= 9 && numberMonth <= 9) {
        stringConcat = `0${day}/0${numberMonth}/${year}`;
        setBirthday(stringConcat);
        return;
      }

      if (day <= 9) {
        stringConcat = `0${day}/${numberMonth}/${year}`;
        setBirthday(stringConcat);
        return;
      } else if (numberMonth <= 9) {
        stringConcat = `${day}/0${numberMonth}/${year}`;
        setBirthday(stringConcat);
        return;
      }

      stringConcat = `${day}/${numberMonth}/${year}`;
      setBirthday(stringConcat);
    } else {
      setBirthday('');
    }
  }, [SelectDayOfMonthRef, SelectMonthRef, SelectYearRef, changeOptionsYear, changeOptions]);

  const getMonthNumber = (month: string) => {
    let numberMonth = 0;

    switch (month) {
      case 'Janeiro':
        numberMonth = 1;
        break;
      case 'Fevereiro':
        numberMonth = 2;
        break;
      case 'Março':
        numberMonth = 3;
        break;
      case 'Abril':
        numberMonth = 4;
        break;
      case 'Maio':
        numberMonth = 5;
        break;
      case 'Junho':
        numberMonth = 6;
        break;
      case 'Julho':
        numberMonth = 7;
        break;
      case 'Agosto':
        numberMonth = 8;
        break;
      case 'Setembro':
        numberMonth = 9;
        break;
      case 'Outubro':
        numberMonth = 10;
        break;
      case 'Novembro':
        numberMonth = 11;
        break;
      case 'Dezembro':
        numberMonth = 12;
        break;
      default:
        numberMonth = -1;
        break;
    }
    return numberMonth;
  };

  const getMonthName = (month: number) => {
    let nameMonth = '';

    switch (month) {
      case 1:
        nameMonth = 'Janeiro';
        break;
      case 2:
        nameMonth = 'Fevereiro';
        break;
      case 3:
        nameMonth = 'Março';
        break;
      case 4:
        nameMonth = 'Abril';
        break;
      case 5:
        nameMonth = 'Maio';
        break;
      case 6:
        nameMonth = 'Junho';
        break;
      case 7:
        nameMonth = 'Julho';
        break;
      case 8:
        nameMonth = 'Agosto';
        break;
      case 9:
        nameMonth = 'Setembro';
        break;
      case 10:
        nameMonth = 'Outubro';
        break;
      case 11:
        nameMonth = 'Novembro';
        break;
      case 12:
        nameMonth = 'Dezembro';
        break;
      default:
        nameMonth = 'seila';
        break;
    }
    return nameMonth;
  };

  useEffect(() => {
    const gender = SelectGenderRef.current.value;
    setGender(gender);
  }, [changeOptionsGender, SelectGenderRef.current]);

  const [valueDay, setValueDay] = useState(0);
  const [valueYear, setValueYear] = useState(0);

  useEffect(() => {
    if (whatComponentImRendering !== 'alreadyLogged') return;

    const year = birthday.slice(0, 4);
    const month = birthday.slice(5, 7);
    const day = birthday.slice(8, 10);

    const monthString = getMonthName(Number(month));
    if (monthString === 'seila') return;
    let stringConcat = '';
    SelectMonthRef.current.value = monthString;
    setValueDay(Number(day));
    setValueYear(Number(year));
    SelectGenderRef.current.value = gender;

    stringConcat = `${day}/${month}/${year}`;
    setBirthday(stringConcat);
  }, [birthday, whatComponentImRendering]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValueYear(Number(e.target.value));
  };

  return (
    <Styled.ContainerMainDateBirthday>
      <Styled.ContainerSelect $whatcomponentimrendering={whatComponentImRendering}>
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
        whatComponentImRendering={whatComponentImRendering}
        valueDay={valueDay}
        setValueDay={setValueDay}
      />
      <Styled.ContainerSelect $whatcomponentimrendering={whatComponentImRendering}>
        <Styled.Select
          ref={SelectYearRef}
          onClick={handleCLickOptionYear}
          value={valueYear}
          onChange={(e) => handleChange(e)}
        >
          <Styled.Option>Ano</Styled.Option>
          {refYears.current.map((year) => (
            <Styled.Option key={Number(year)}>{year}</Styled.Option>
          ))}
        </Styled.Select>
      </Styled.ContainerSelect>
      <Styled.ContainerSelect $whatcomponentimrendering={whatComponentImRendering}>
        <Styled.Select ref={SelectGenderRef} onClick={handleCLickOptionGender}>
          <Styled.Option>Prefiro não informar</Styled.Option>
          <Styled.Option>Feminino</Styled.Option>
          <Styled.Option>Masculino</Styled.Option>
        </Styled.Select>
      </Styled.ContainerSelect>
    </Styled.ContainerMainDateBirthday>
  );
};

export default BirthdayAndGender;
