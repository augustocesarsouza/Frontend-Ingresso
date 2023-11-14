import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  test('should render click', () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick} children="Ok" unlockButtonOk={true} />);

    const button = screen.getByRole('button', { name: 'Ok' });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
