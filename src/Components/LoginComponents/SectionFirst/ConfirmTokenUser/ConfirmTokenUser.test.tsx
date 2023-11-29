import { render, screen } from '@testing-library/react';
import ConfirmTokenUser from './ConfirmTokenUser';
import { MemoryRouter } from 'react-router-dom';

describe('ConfirmTokenUser', () => {
  test('should render svgExit, ImgLike, paragraph completed, button Continue', async () => {
    const fn = jest.fn();
    const { container } = render(
      <MemoryRouter>
        <ConfirmTokenUser setConfirmTokenEmail={fn} confirmTokenEmail={true} />
      </MemoryRouter>
    );

    const svgExit = container.querySelector('.exit-svg');
    expect(svgExit).toBeInTheDocument();

    const imgLike = container.querySelector('.img-like');
    expect(imgLike).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1700138427/Like_ebvq3w.png'
    );

    const pCompleted = screen.getByText('Cadastro confirmado!');
    expect(pCompleted).toBeInTheDocument();

    const buttonContinue = screen.getByText('CONTINUAR');
    expect(buttonContinue).toBeInTheDocument();

    expect.assertions(4);
  });
});
