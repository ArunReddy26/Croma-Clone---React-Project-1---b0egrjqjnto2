import React from "react";
import "./cashondelivery.css";
const Cashondelivery = (props) => {
    return (
        <>
            <div className="cashOnDeliveryContainer">
                <div className="paymentText">
                    Cash on delivery charges are free
                </div>

                <div className="CODPayButton">
                    <button >
                        Pay ₹{props.totalPrice}
                    </button>
                </div>
            </div>
        </>
    )

}
export default Cashondelivery;