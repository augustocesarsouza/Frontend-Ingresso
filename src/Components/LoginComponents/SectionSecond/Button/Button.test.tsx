import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  test('should', () => {
    const fn = jest.fn();
    render(<Button func={fn} text="CRIAR UMA NOVA CONTA" />);

    const button = screen.getByRole('button', { name: 'CRIAR UMA NOVA CONTA' });
    fireEvent.click(button);

    expect(fn).toHaveBeenCalled();
  });
});
