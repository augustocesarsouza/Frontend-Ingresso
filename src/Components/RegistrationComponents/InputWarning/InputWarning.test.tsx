import { render, screen } from '@testing-library/react';
import InputWarning from './InputWarning';

describe('InputWarning', () => {
  test('should render span when "EnableWarning" is false', () => {
    const text = 'any test for testing';
    const enableWarning = false;
    render(<InputWarning Children={text} enableWarning={enableWarning} />);
    const spanWarning = screen.getByText(text);
    expect(spanWarning).toBeInTheDocument();
  });

  test('should not render anything when "EnableWarning" is true', () => {
    const text = 'any test for testing';
    const showText = true;
    render(<InputWarning Children={text} enableWarning={showText} />);
  });
});
