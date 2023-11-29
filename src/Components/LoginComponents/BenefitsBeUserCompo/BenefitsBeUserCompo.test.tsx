import { render } from '@testing-library/react';
import BenefitsBeUserCompo from './BenefitsBeUserCompo';
import CardSvg from '../../../Svg/CardSvg';

describe('BenefitsBeUserCompo', () => {
  test('should render svg and text', () => {
    render(<BenefitsBeUserCompo svg={<CardSvg />} text={'Salvar Cartões'} />);
  });
});
