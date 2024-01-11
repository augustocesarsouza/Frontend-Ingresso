import GooglePayButton from '@google-pay/button-react';

interface GooglePayButtonCompoProps {
  googlePayButtonRef: React.MutableRefObject<any>;
  handleCancel: () => void;
}

const GooglePayButtonCompo = ({ googlePayButtonRef, handleCancel }: GooglePayButtonCompoProps) => {
  return (
    <GooglePayButton
      ref={googlePayButtonRef}
      environment="TEST"
      paymentRequest={{
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: 'CARD',
            parameters: {
              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              allowedCardNetworks: ['MASTERCARD', 'VISA'],
            },
            tokenizationSpecification: {
              type: 'PAYMENT_GATEWAY',
              parameters: {
                gateway: 'example',
                gatewayMerchantId: 'exapleGateMerchantID',
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: '12345679533',
          merchantName: 'Deo merchant',
        },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPriceLabel: 'Total',
          totalPrice: '10',
          currencyCode: 'USD',
          countryCode: 'US',
        },
        shippingAddressRequired: true,
        callbackIntents: ['PAYMENT_AUTHORIZATION'],
      }}
      onLoadPaymentData={(PaymentRequest) => {
        console.log(PaymentRequest);
      }}
      onPaymentAuthorized={(paymentData) => {
        console.log(paymentData);

        return { transactionState: 'SUCCESS' };
      }}
      onCancel={handleCancel}
      existingPaymentMethodRequired={false}
      style={{ display: 'none' }}
    ></GooglePayButton>
  );
};

export default GooglePayButtonCompo;
