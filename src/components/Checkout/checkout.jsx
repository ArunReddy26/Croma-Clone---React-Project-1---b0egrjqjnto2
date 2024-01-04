import React from "react";
import "./checkout.css";

const Checkout = (props) => {
    const {Price}=props;
    return (
            <div className="checkout-form">
                <div className="checkout-total-summary">
                    <h3 className="checkout-form-heading">Order Summary</h3>
                    <div className="cart-total-price">
                        <span className="text-capitalise">Original Price</span>
                        <span className="price-without-discount"></span>
                    </div>
                    <div className="cart-delivery-charges">
                        <span className="text-capitalise">Delivery Charges</span>
                        <span className="deilvery-price-tag">free</span>
                    </div>
                    <div className="cart-total-discounted-price">
                        <span className="amt-payable-tag">Total</span>
                        <span className="payable-amt">₹{Price}</span>
                    </div>
                    <button
                        className="cart-checkout-btn"
                        style={{
                            width: "100%",
                            background: "#12daa8",
                            color: "black",
                            borderRadius: "8px",
                            border: "none",
                        }}
                    >
                        checkout
                    </button>
                    {/* <div className="checkout-static-message">
          Safe and Secure Payments. Easy returns. 100% Authentic products.
        </div> */}
                </div>
            </div>
       
    );
};
export default Checkout;
