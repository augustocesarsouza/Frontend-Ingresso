import { render, screen } from '@testing-library/react';
import DayMonth from './DayMonth';

const useRefMock = () => {
  return {
    current: null,
  };
};

describe('DayMonth', () => {
  test('should render', () => {
    const selectDayOfMonthRef = useRefMock();
    const fn = jest.fn();
    const dayMes = [1, 2, 3];

    render(
      <DayMonth
        SelectDayOfMonthRef={selectDayOfMonthRef}
        handleCLickOption={fn}
        dayMes={dayMes}
        whatComponentImRendering=""
        valueDay={1}
        setValueDay={fn}
      />
    );

    const options1 = screen.getByRole('option', { name: '1' });
    const options2 = screen.getByRole('option', { name: '2' });
    const options3 = screen.getByRole('option', { name: '3' });

    expect(options1).toBeInTheDocument();
    expect(options2).toBeInTheDocument();
    expect(options3).toBeInTheDocument();

    expect.assertions(3);
  });
});
