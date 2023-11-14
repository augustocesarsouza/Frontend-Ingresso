import * as Styled from './styled';

interface RequirementPasswordProps {
  oneLowerCaseLetter: boolean;
  oneUppercaseLetter: boolean;
  oneNumber: boolean;
  minimumEightCharacter: boolean;
}

const RequirementPassword = ({
  oneLowerCaseLetter,
  oneUppercaseLetter,
  oneNumber,
  minimumEightCharacter,
}: RequirementPasswordProps) => {
  return (
    <Styled.ContainerPRequirements>
      <Styled.P $position="1" $greenorgray={'nothing'}>
        Sua senha precisa atender aos seguintes critérios:
      </Styled.P>
      <Styled.P $position="2" $greenorgray={String(oneLowerCaseLetter)}>
        Mínimo uma letra minúscula *
      </Styled.P>
      <Styled.P $position="3" $greenorgray={String(oneUppercaseLetter)}>
        Mínimo uma letra maiúscula *
      </Styled.P>
      <Styled.P $position="4" $greenorgray={String(oneNumber)}>
        Mínimo um número *
      </Styled.P>
      <Styled.P $position="5" $greenorgray={String(minimumEightCharacter)}>
        Mínimo de 8 caracteres *
      </Styled.P>
    </Styled.ContainerPRequirements>
  );
};

export default RequirementPassword;
