import { render, screen } from '@testing-library/react';
import ChoiceSeats from './ChoiceSeats';

describe('ChoiceSeats', () => {
  test('should render span', () => {
    const fn = jest.fn();
    const whatClicked = 1;
    const seatJoinList = [];
    render(
      <ChoiceSeats whatClicked={whatClicked} seatJoinList={seatJoinList} handleSeatClicked={fn} />
    );

    const span1 = screen.getByText('Escolha seus assentos:');
    expect(span1).toBeInTheDocument();
  });
});
