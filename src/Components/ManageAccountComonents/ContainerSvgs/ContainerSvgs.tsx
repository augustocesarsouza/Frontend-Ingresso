import TicketSvg from '../../../Svg/TicketSvg';
import RedirectUserSvg from '../../DataPersonalComponents/RedirectUserSvg/RedirectUserSvg';
import * as Styled from './styled';

interface ContainerSvgsProps {
  setSvgOrdersClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setSvgDataPersonal: React.Dispatch<React.SetStateAction<boolean>>;
  setSvgFormsOfPayment: React.Dispatch<React.SetStateAction<boolean>>;
  svgOrdersClicked: boolean;
  svgDataPersonal: boolean;
  svgFormsOfPayment: boolean;
}

const ContainerSvgs = ({
  setSvgOrdersClicked,
  setSvgDataPersonal,
  setSvgFormsOfPayment,
  svgOrdersClicked,
  svgDataPersonal,
  svgFormsOfPayment,
}: ContainerSvgsProps) => {
  // const [svgOrdersClicked, setSvgOrdersClicked] = useState(false);
  // const [svgDataPersonal, setSvgDataPersonal] = useState(false);
  // const [svgFormsOfPayment, setSvgFormsOfPayment] = useState(false);

  const handleMyOrders = () => {
    setSvgOrdersClicked(true);
    setSvgDataPersonal(false);
    setSvgFormsOfPayment(false);
  };

  const handleDataPersonal = () => {
    setSvgDataPersonal(true);
    setSvgOrdersClicked(false);
    setSvgFormsOfPayment(false);
  };

  const handleFormsOfPayment = () => {
    setSvgFormsOfPayment(true);
    setSvgDataPersonal(false);
    setSvgOrdersClicked(false);
  };

  return (
    <Styled.ContainerOrdersDatePersonalPayment $svgformsofpayment={String(svgFormsOfPayment)}>
      <Styled.ContainerInfo $svgformsofpayment={String(svgFormsOfPayment)}>
        <Styled.WrapperSvg onClick={handleMyOrders}>
          <RedirectUserSvg svg={<TicketSvg />} text={'Meus Pedidos'} svgActive={svgOrdersClicked} />
        </Styled.WrapperSvg>
        <Styled.WrapperSvg onClick={handleDataPersonal}>
          <RedirectUserSvg
            svg={<TicketSvg />}
            text={'Dados Pessoais'}
            svgActive={svgDataPersonal}
          />
        </Styled.WrapperSvg>
        <Styled.WrapperSvg onClick={handleFormsOfPayment}>
          <RedirectUserSvg
            svg={<TicketSvg />}
            text={'Formas de Pagamento'}
            svgActive={svgFormsOfPayment}
          />
        </Styled.WrapperSvg>
      </Styled.ContainerInfo>
    </Styled.ContainerOrdersDatePersonalPayment>
  );
};

export default ContainerSvgs;
