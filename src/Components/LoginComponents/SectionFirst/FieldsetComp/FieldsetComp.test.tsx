import { render } from '@testing-library/react';
import FieldsetComp from './FieldsetComp';
import { MemoryRouter } from 'react-router-dom';

describe('FieldsetComp', () => {
  test('should render svgUser, spanCpfOrEmail, inputCpfOrEmail, spanPassword, inputPassword', () => {
    const fn = jest.fn();

    render(
      <MemoryRouter>
        <FieldsetComp
          resentCode={false}
          refInputEmail={null}
          valueInputCode=""
          confirmCodeEmail={true}
          refInputPassword={null}
          handleEnter={fn}
          handleResendCode={fn}
          setValueInputCode={fn}
          setConfirmCodeEmail={fn}
        />
      </MemoryRouter>
    );
  });
});
