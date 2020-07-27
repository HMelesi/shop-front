import React from "react";
import { PayPalButton } from "react-paypal-button-v2";

class PayPalBtn extends React.Component {
  render() {
    const { amount, onSuccess, currency } = this.props;
    return (
      <PayPalButton
        amount={amount}
        currency={currency}
        onSuccess={(details, data) => onSuccess(details, data)}
        options={{
          clientId:
            "AVESGNT5-fQGe91xuHknJlHjdqlqgvvQ-iYhu6E-j5PDHPDlv5NVezPHinOTxi4umAq31DTklwPptRQq",
        }}
      />
    );
  }
}
export default PayPalBtn;
