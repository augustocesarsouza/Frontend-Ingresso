import CheckSvg from '../../../../Svg/CheckSvg';
import * as Styled from './styled';

interface LabelCheckBoxProps {
  activeLabel: boolean;
}

const LabelCheckBox = ({ activeLabel }: LabelCheckBoxProps) => {
  return (
    <Styled.Label $activelabel={String(activeLabel)}>{activeLabel && <CheckSvg />}</Styled.Label>
  );
};

export default LabelCheckBox;
