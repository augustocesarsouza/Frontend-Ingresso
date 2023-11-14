import { render, screen } from '@testing-library/react';
import RequirementPassword from './RequirementPassword';

describe('RequirementPassword', () => {
  test('should render all P grey', () => {
    const oneLowerCaseLetter = false;
    const oneUppercaseLetter = false;
    const oneNumber = false;
    const minimumEightCharacter = false;

    render(
      <RequirementPassword
        oneLowerCaseLetter={oneLowerCaseLetter}
        oneUppercaseLetter={oneUppercaseLetter}
        oneNumber={oneNumber}
        minimumEightCharacter={minimumEightCharacter}
      />
    );

    const textOneLetterLowerCase = screen.getByText('Mínimo uma letra minúscula *');
    expect(textOneLetterLowerCase).toHaveStyle({
      color: 'rgb(153, 153, 153)',
    });

    const textOneUppercaseLetter = screen.getByText('Mínimo uma letra maiúscula *');
    expect(textOneUppercaseLetter).toHaveStyle({
      color: 'rgb(153, 153, 153)',
    });

    const textOneNumber = screen.getByText('Mínimo um número *');
    expect(textOneNumber).toHaveStyle({
      color: 'rgb(153, 153, 153)',
    });

    const textMinimumEightCharacter = screen.getByText('Mínimo de 8 caracteres *');
    expect(textMinimumEightCharacter).toHaveStyle({
      color: 'rgb(153, 153, 153)',
    });

    expect.assertions(4);
  });

  test('should render all P green', () => {
    const oneLowerCaseLetter = true;
    const oneUppercaseLetter = true;
    const oneNumber = true;
    const minimumEightCharacter = true;

    render(
      <RequirementPassword
        oneLowerCaseLetter={oneLowerCaseLetter}
        oneUppercaseLetter={oneUppercaseLetter}
        oneNumber={oneNumber}
        minimumEightCharacter={minimumEightCharacter}
      />
    );

    const textOneLetterLowerCase = screen.getByText('Mínimo uma letra minúscula *');
    expect(textOneLetterLowerCase).toHaveStyle({
      color: 'rgb(31, 207, 38)',
    });

    const textOneUppercaseLetter = screen.getByText('Mínimo uma letra maiúscula *');
    expect(textOneUppercaseLetter).toHaveStyle({
      color: 'rgb(31, 207, 38)',
    });

    const textOneNumber = screen.getByText('Mínimo um número *');
    expect(textOneNumber).toHaveStyle({
      color: 'rgb(31, 207, 38)',
    });

    const textMinimumEightCharacter = screen.getByText('Mínimo de 8 caracteres *');
    expect(textMinimumEightCharacter).toHaveStyle({
      color: 'rgb(31, 207, 38)',
    });

    expect.assertions(4);
  });
});
