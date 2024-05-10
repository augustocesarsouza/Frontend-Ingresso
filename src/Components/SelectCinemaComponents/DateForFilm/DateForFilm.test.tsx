import { render, screen } from '@testing-library/react';
import DateForFilm from './DateForFilm';

// export interface next7DaysProps {
//   dayYear: string;
//   weekDay: string;
// }

describe('DateForFilm', () => {
  const objData1 = {
    dayYear: '19/12',
    weekDay: 'Hoje',
  };

  const objData2 = {
    dayYear: '20/12',
    weekDay: 'qua',
  };

  const dataList = [objData1, objData2];
  let fn = jest.fn();

  test('should render days and days of the week', () => {
    render(<DateForFilm next7Days={dataList} setDataSelected={fn} />);

    const firstDay = screen.getByText(dataList[0].dayYear);
    const DayWeek1 = screen.getByText(dataList[0].dayYear);

    const secondDay = screen.getByText(dataList[1].dayYear);
    const DayWeek2 = screen.getByText(dataList[1].dayYear);

    expect(firstDay).toBeInTheDocument();
    expect(DayWeek1).toBeInTheDocument();
    expect(secondDay).toBeInTheDocument();
    expect(DayWeek2).toBeInTheDocument();

    expect.assertions(4);
  });
});
