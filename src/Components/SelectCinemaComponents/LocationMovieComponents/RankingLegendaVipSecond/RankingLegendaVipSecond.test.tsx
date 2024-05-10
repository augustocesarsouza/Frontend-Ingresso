import { render, screen } from '@testing-library/react';
import RankingLegendaVipSecond from './RankingLegendaVipSecond';

describe('RankingLegendaVipSecond', () => {
  const cinemaDTO = {
    district: 'Estrada de campo limpo, 459 | Santo Amaro',
    nameCinema: 'Cine Araújo Campo Limpo',
    ranking: 'DUBLADO',
    id: '698e5eaf-d2a8-4ccb-8134-090e6a6ab982',
  };

  const objCinemaMovie = {
    cinemaDTO,
    screeningSchedule: '17:00D, 19:15D, 21:30D',
    IsOnlyLegVip: 1,
    IsOnlyLegImax: 1,
    IsOnlyDubVip: 1,
    IsOnlyDubImax: 1,
    IsOnlyDubLeg: 1,
    IsOnlyLegVipImax: 1,
  };

  const key = 0;
  const arrayHours = ['21:40L', '13:40LV', '17:00LV', '20:20LV'];

  const listHoursKeyValue = {
    [key]: arrayHours,
  };

  let fn = jest.fn();

  test('should render Ranking LegendaVipSecond', () => {
    const { debug } = render(
      <RankingLegendaVipSecond
        el={objCinemaMovie}
        listHoursKeyValue={listHoursKeyValue}
        handleClickHourMovie={fn}
      />
    );

    const spanLegendado = screen.getByText('LEGENDADO');
    expect(spanLegendado).toBeInTheDocument();

    const spanVip = screen.getByText('VIP');
    expect(spanVip).toBeInTheDocument();

    const pFirstHour = screen.getByText(listHoursKeyValue[key][1].slice(0, 6));
    expect(pFirstHour).toBeInTheDocument();

    const pSecondHour = screen.getByText(listHoursKeyValue[key][2].slice(0, 6));
    expect(pSecondHour).toBeInTheDocument();

    const pThirdHour = screen.getByText(listHoursKeyValue[key][3].slice(0, 6));
    expect(pThirdHour).toBeInTheDocument();

    expect.assertions(5);
    debug();
  });
});
