import { render, screen } from '@testing-library/react';
import YourName from './YourName';
import { ContextMyOrders } from '../../../Templates/SettingsAccount/SettingsAccount';

describe('YourName', () => {
  let userObj = {
    id: '59a889f9-2695-45bf-b846-2b207e1b5539',
    name: 'Augusto',
    email: 'augustocesarsantana90@gmail.com',
  };

  const setUserObj = null;
  test('should render span your name, input name', () => {
    const fn = jest.fn();

    const { container } = render(
      <ContextMyOrders.Provider value={{ userObj, setUserObj }}>
        <YourName svgDataPersonal={false} setNameUserChange={fn} />
      </ContextMyOrders.Provider>
    );

    const span = screen.getByText('*Como quer ser chamado');
    expect(span).toBeInTheDocument();

    const inputName = container.querySelector('#input-your-name');
    expect(inputName).toBeInTheDocument();

    expect.assertions(2);
  });
});
