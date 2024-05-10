import { render, screen } from '@testing-library/react';
import BirthdayAndGender from './BirthdayAndGender';

describe('BirthdayAndGender', () => {
  let whatComponentImRendering = '';
  let birthday = '';
  let gender = '';

  test('should render every month', () => {
    const fn = jest.fn();
    render(
      <BirthdayAndGender
        setBirthday={fn}
        setGender={fn}
        whatComponentImRendering={whatComponentImRendering}
        birthday={birthday}
        gender={gender}
      />
    );

    const optionFirst = screen.getByRole('option', { name: 'Mês de aniversário' });
    const january = screen.getByRole('option', { name: 'Janeiro' });
    const february = screen.getByRole('option', { name: 'Fevereiro' });
    const march = screen.getByRole('option', { name: 'Março' });
    const april = screen.getByRole('option', { name: 'Abril' });
    const may = screen.getByRole('option', { name: 'Maio' });
    const june = screen.getByRole('option', { name: 'Junho' });
    const july = screen.getByRole('option', { name: 'Julho' });
    const august = screen.getByRole('option', { name: 'Agosto' });
    const september = screen.getByRole('option', { name: 'Setembro' });
    const october = screen.getByRole('option', { name: 'Outubro' });
    const november = screen.getByRole('option', { name: 'Novembro' });
    const december = screen.getByRole('option', { name: 'Dezembro' });

    expect(optionFirst).toBeInTheDocument();
    expect(january).toBeInTheDocument();
    expect(february).toBeInTheDocument();
    expect(march).toBeInTheDocument();
    expect(april).toBeInTheDocument();
    expect(may).toBeInTheDocument();
    expect(june).toBeInTheDocument();
    expect(july).toBeInTheDocument();
    expect(august).toBeInTheDocument();
    expect(september).toBeInTheDocument();
    expect(october).toBeInTheDocument();
    expect(november).toBeInTheDocument();
    expect(december).toBeInTheDocument();

    expect.assertions(13);
  });

  test('should render option gender', () => {
    const fn = jest.fn();
    render(
      <BirthdayAndGender
        setBirthday={fn}
        setGender={fn}
        whatComponentImRendering={whatComponentImRendering}
        birthday={birthday}
        gender={gender}
      />
    );

    const optionFirst = screen.getByRole('option', { name: 'Prefiro não informar' });
    const female = screen.getByRole('option', { name: 'Feminino' });
    const masculine = screen.getByRole('option', { name: 'Masculino' });

    expect(optionFirst).toBeInTheDocument();
    expect(female).toBeInTheDocument();
    expect(masculine).toBeInTheDocument();

    expect.assertions(3);
  });
});
