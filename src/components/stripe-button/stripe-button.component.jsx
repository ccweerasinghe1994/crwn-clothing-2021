import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_5zczuvHKxs1Ih3uo07klafvO00rfzmKNuh";
  const onToken = (token) => {
    console.log(token);
    alert("payment successful");
  };
  return (
    <StripeCheckout
      label={"Pay Now"}
      name={"Crown Clothing"}
      billingAddress
      shippingAddress
      image={
        "https://cdn.dribbble.com/users/5055/screenshots/746215/media/9ccbbd6239907df7e094add12a123e88.png"
      }
      description={`your total is ${price}`}
      amount={priceForStripe}
      panelLabel={"Pay Now"}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
