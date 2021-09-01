import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckOutButton = ({ price }) => {
  const priceInCents = price * 100;
  const publishAblekey =
    "pk_test_51JUQv2JIMmiwVffG6T30fJlGK9w7t7TZOZEP0IWH0O4er1NRIRULdy9iYq0drJngZNP1vtc4zy1fcJYIw3YKToCg00bgWI1O4k";

  const onToken = (token) => {
    console.log(token);
    alert("Paid Successfully");
  };

  return (
    <div className="stripeCheckOutButon">
      <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceInCents}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishAblekey}
      />
    </div>
  );
};

export default StripeCheckOutButton;
