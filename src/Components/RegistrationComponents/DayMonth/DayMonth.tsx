import * as Styled from './styled';

interface DayMonthProps {
  SelectDayOfMonthRef: React.MutableRefObject<HTMLSelectElement>;
  handleCLickOption: () => void;
  dayMes: [] | number[];
}

const DayMonth = ({ SelectDayOfMonthRef, handleCLickOption, dayMes }: DayMonthProps) => {
  return (
    <Styled.ContainerSelect>
      <Styled.Select ref={SelectDayOfMonthRef} onClick={handleCLickOption}>
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
