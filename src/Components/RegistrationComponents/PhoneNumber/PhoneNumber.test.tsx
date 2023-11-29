import { render } from '@testing-library/react';
import PhoneNumber from './PhoneNumber';

describe('PhoneNumber', () => {
  test('should', () => {
    const fn = jest.fn();
    render(<PhoneNumber setPhone={fn} setNumber={fn} dd="" number="" setDD={fn} />);
  });
});
