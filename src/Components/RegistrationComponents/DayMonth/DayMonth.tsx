import * as Styled from './styled';

interface DayMonthProps {
  SelectDayOfMonthRef: React.MutableRefObject<HTMLSelectElement>;
  handleCLickOption: () => void;
  dayMes: [] | number[];
  whatComponentImRendering: string;
  valueDay: number;
  setValueDay: React.Dispatch<React.SetStateAction<number>>;
}

const DayMonth = ({
  SelectDayOfMonthRef,
  handleCLickOption,
  dayMes,
  whatComponentImRendering,
  valueDay,
  setValueDay,
}: DayMonthProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValueDay(Number(e.target.value));
  };

  return (
    <Styled.ContainerSelect $whatcomponentimrendering={whatComponentImRendering}>
      <Styled.Select
        ref={SelectDayOfMonthRef}
        onClick={handleCLickOption}
        value={valueDay}
        onChange={(e) => handleChange(e)}
      >
        {dayMes.length > 0 ? (
          <>
            {dayMes.map((number) => (
              <Styled.Option key={number}>{number}</Styled.Option>
            ))}
          </>
        ) : (
          <Styled.Option>Dia do aniversário</Styled.Option>
        )}
      </Styled.Select>
    </Styled.ContainerSelect>
  );
};

export default DayMonth;
