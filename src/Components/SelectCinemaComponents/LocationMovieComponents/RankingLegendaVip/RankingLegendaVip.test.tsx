import { render, screen } from '@testing-library/react';
import RankingLegendaVip from './RankingLegendaVip';

describe('RankingLegendaVip', () => {
  const cinemaDTO = {
    district: 'Estrada de campo limpo, 459 | Santo Amaro',
    nameCinema: 'Cine Araújo Campo Limpo',
    ranking: 'LEGENDADO, VIP',
  };

  const objCinemaMovie = {
    cinemaDTO,
    screeningSchedule: '17:00D, 19:15D, 21:30D',
  };

  const key = 0;
  const arrayHours = ['17:00D', '19:15D', '21:30D'];

  const listHoursKeyValue = {
    [key]: arrayHours,
  };

  test('should render ranking dublado', () => {
    render(
      <RankingLegendaVip el={objCinemaMovie} listHoursKeyValue={listHoursKeyValue} index={key} />
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
