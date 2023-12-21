import { render, screen } from '@testing-library/react';
import RankingLegendaVipSecond from './RankingLegendaVipSecond';

describe('RankingLegendaVipSecond', () => {
  const cinemaDTO = {
    district: 'Estrada de campo limpo, 459 | Santo Amaro',
    nameCinema: 'Cine Araújo Campo Limpo',
    ranking: 'LEGENDADO, VIP',
  };

  const objCinemaMovie = {
    cinemaDTO,
    screeningSchedule: '21:40L, 13:40LV, 17:00LV, 20:20LV',
  };

  const key = 0;
  const arrayHours = ['21:40L', '13:40LV', '17:00LV', '20:20LV'];

  const listHoursKeyValue = {
    [key]: arrayHours,
  };

  test('should render Ranking LegendaVipSecond', () => {
    const { debug } = render(
      <RankingLegendaVipSecond
        el={objCinemaMovie}
        listHoursKeyValue={listHoursKeyValue}
        index={key}
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
