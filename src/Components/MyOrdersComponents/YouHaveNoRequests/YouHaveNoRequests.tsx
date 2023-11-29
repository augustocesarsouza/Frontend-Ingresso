import * as Styled from './styled';

interface YouHaveNoRequestsProps {
  svgOrdersClicked: boolean;
}

const YouHaveNoRequests = ({ svgOrdersClicked }: YouHaveNoRequestsProps) => {
  return (
    <>
      {svgOrdersClicked && (
        <Styled.ContainerOrders>
          <Styled.H2>Você ainda não tem pedidos :(</Styled.H2>
        </Styled.ContainerOrders>
      )}
    </>
  );
};

export default YouHaveNoRequests;
