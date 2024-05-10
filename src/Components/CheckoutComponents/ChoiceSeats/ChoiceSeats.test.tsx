import { render, screen } from '@testing-library/react';
import ChoiceSeats from './ChoiceSeats';

describe('ChoiceSeats', () => {
  test('should render span', () => {
    const fn = jest.fn();
    const whatClicked = 1;
    const seatJoinList = [];
    const ticketsSeats = ['A1', 'A2', 'A3', 'A4'];
    render(
      <ChoiceSeats
        whatClicked={whatClicked}
        ticketsSeats={ticketsSeats}
        seatJoinList={seatJoinList}
        handleSeatClicked={fn}
      />
    );

    const span1 = screen.getByText('Escolha seus assentos:');
    expect(span1).toBeInTheDocument();
  });
});
