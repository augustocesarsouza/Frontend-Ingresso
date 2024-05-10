import { render, screen } from '@testing-library/react';
import RankingLegendaVip from './RankingLegendaVip';

describe('RankingLegendaVip', () => {
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

  const arrayHours = ['17:00D', '19:15D', '21:30D'];

  let key = 1;

  const listHoursKeyValue = {
    [key]: arrayHours,
  };

  let fn = jest.fn();

  test('should render ranking dublado', () => {
    render(
      <RankingLegendaVip
        el={objCinemaMovie}
        listHoursKeyValue={listHoursKeyValue}
        handleClickHourMovie={fn}
      />
    );

    const spanDublado = screen.getByText('LEGENDADO');
    expect(spanDublado).toBeInTheDocument();

    const pFirstHour = screen.getByText(listHoursKeyValue[key][0].replace(/[^0-9:]/g, ''));
    expect(pFirstHour).toBeInTheDocument();

    const pSecondHour = screen.getByText(listHoursKeyValue[key][1].replace(/[^0-9:]/g, ''));
    expect(pSecondHour).toBeInTheDocument();

    const pThirdHour = screen.getByText(listHoursKeyValue[key][2].replace(/[^0-9:]/g, ''));
    expect(pThirdHour).toBeInTheDocument();

    expect.assertions(4);
  });
});
