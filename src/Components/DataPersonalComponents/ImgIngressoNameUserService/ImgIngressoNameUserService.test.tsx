import { render, screen } from '@testing-library/react';
import ImgIngressoNameUserService from './ImgIngressoNameUserService';
import { MemoryRouter } from 'react-router-dom';

describe('ImgIngressoNameUserService', () => {
  const userObj = {
    id: '556e08dd-acd3-4ed0-95fd-db0b8e5d8bb9',
    name: 'Augusto Cesar',
    email: 'augustocesarsantana90@gmail.com',
  };
  test('should render, svgIngresso, spanName, svgUser, spanService, svgQuestionMark', () => {
    const { container } = render(
      <MemoryRouter>
        <ImgIngressoNameUserService userObj={userObj} />
      </MemoryRouter>
    );

    const svgIngresso = container.querySelector('.svg-ingresso');
    expect(svgIngresso).toBeInTheDocument();

    const spanName = screen.getByText(`Olá,${userObj.name}`);
    expect(spanName).toBeInTheDocument();

    const svgUser = container.querySelector('.svg-user');
    expect(svgUser).toBeInTheDocument();

    const spanService = screen.getByText('Atendimento');
    expect(spanService).toBeInTheDocument();

    const svgQuestionMark = container.querySelector('.svg-question-mark');
    expect(svgQuestionMark).toBeInTheDocument();

    expect.assertions(5);
  });
});
