import { render } from '@testing-library/react';
import LabelCheckBox from './LabelCheckBox';

describe('LabelCheckBox', () => {
  test('should svg-check be in document', () => {
    const { container } = render(<LabelCheckBox activeLabel={true} />);

    const svgCheck = container.querySelector('.svg-check');
    expect(svgCheck).toBeInTheDocument();
    expect.assertions(1);
  });

  test('should svg-check not be in document', () => {
    render(<LabelCheckBox activeLabel={false} />);
  });
});
