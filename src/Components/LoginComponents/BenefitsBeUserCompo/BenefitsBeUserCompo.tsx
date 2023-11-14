import * as Styled from './styled';

const BenefitsBeUserCompo = ({ svg, text }) => {
  return (
    <Styled.ContainerSvgSpan>
      <Styled.ContainerSvg>{svg}</Styled.ContainerSvg>
      <Styled.Span>{text}</Styled.Span>
    </Styled.ContainerSvgSpan>
  );
};

export default BenefitsBeUserCompo;
