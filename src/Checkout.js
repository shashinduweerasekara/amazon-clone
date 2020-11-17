import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="img/checkoutAd.jpg"
          alt="checkoutAd"
        />
        <div>
          <h2 className="checkout-title">Your Shopping Basket</h2>

          {/*BasketItem */}
          {/*BasketItem */}
          {/*BasketItem */}
          {/*BasketItem */}
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
