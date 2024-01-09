import React from "react";
import { useState, useEffect } from "react"
import "./payment.css";
import WalletForm from "./component/wallet";
import UPIForm from "./component/upi";
import NetBankingForm from "./component/netbanking";
import DebitCreditCardForm from "./component/debitcredit";
import Checkoutheader from "./checkoutheader";

const Payment = () => {
  // const [cartData, setCartDat] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState(1);
  const [totalprice, settotalprice] = useState("");
  const [paymentproduct, setpaymentproduct] = useState([]);



  const Getcart = async () => {

    const promise = await fetch(
      "https://academics.newtonschool.co/api/v1/ecommerce/cart",
      {
        headers: {
          projectID: "b0egrjqjnto2", Authorization: `Bearer ${localStorage.getItem('token')}`
        },
      }
    );
    const response = await promise.json();

    // setproducts(response.data.items);
    setpaymentproduct(response.data.items);
    settotalprice(response.data.totalPrice);


  }



  // let totalPrice = 0;
  // for (let x of cartData) {
  //   totalPrice += x.product.price;
  // }

  function handlePaymentOption(val) {
    setPaymentMethod(val);
  }



  useEffect(() => {

    Getcart();

  }, [])
  return (
    <>
      <Checkoutheader />
      <div style={{ display: "flex" , backgroundColor:"white", height:"100vh"}}>
        <div className="checkoutMainContainer">
          <div className="paymentContainer">
            {/* <div className="paymentMethodText">
              <span>
                Payable Amount: <span>{totalprice}</span>
              </span>
              <button className="paynowbtn">Pay Now</button>
            </div> */}
            <div className="paymentOptionContainer">
              <div className="paymentOptions">
                <div
                  className={`paymentType ${paymentMethod == 1 ? "paymentTypeOnClick" : ""
                    }`}
                  onClick={() => {
                    handlePaymentOption(1);
                  }}
                >
                  <span style={{ marginRight: "10px" }}>
                    <img src="https://assets.juspay.in/hyper/images/croma/ic_card.png" />
                  </span>
                  Credit / Debit Cards
                </div>

                <div
                  className={`paymentType ${paymentMethod == 2 ? "paymentTypeOnClick" : ""
                    }`}
                  onClick={() => {
                    handlePaymentOption(2);
                  }}
                >
                  <span style={{ marginRight: "10px" }}>
                    <img src="https://assets.juspay.in/hyper/images/croma/wallet_icon.png" />
                  </span>
                  Wallet
                </div>

                <div
                  className={`paymentType ${paymentMethod == 3 ? "paymentTypeOnClick" : ""
                    }`}
                  onClick={() => {
                    handlePaymentOption(3);
                  }}
                >
                  <span style={{ marginRight: "10px" }}>
                    <img src="https://assets.juspay.in/hyper/images/croma/ic_upi_icon.png" />
                  </span>
                  UPI
                </div>

                <div
                  className={`paymentType ${paymentMethod == 4 ? "paymentTypeOnClick" : ""
                    }`}
                  onClick={() => {
                    handlePaymentOption(4);
                  }}
                >
                  <span style={{ marginRight: "10px" }}>
                    <img src="https://assets.juspay.in/hyper/images/croma/net_banking_icon.png" />
                  </span>
                  Net banking
                </div>

                <div
                  className={`paymentType ${paymentMethod == 5 ? "paymentTypeOnClick" : ""
                    }`}
                  onClick={() => {
                    handlePaymentOption(5);
                  }}
                >
                  {/* <span style={{ marginRight: "10px" }}>
                <img src="	https://images.bewakoof.com/web/cod-icon-1645705427.png" />
              </span>
              Cash On Delivery */}
                </div>
              </div>
              <div className="paymentForm">
                {paymentMethod == 1 && (
                  <DebitCreditCardForm totalPrice={totalprice} />
                )}
                {paymentMethod == 2 && <WalletForm totalPrice={totalprice} />}
                {paymentMethod == 3 && <UPIForm totalPrice={totalprice} />}
                {paymentMethod == 4 && <NetBankingForm totalPrice={totalprice} />}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="payout-form">
          <div className="checkout-total-summary">
            <h3 className="checkout-form-heading">Order Summary</h3>
            <div className="paymentimagecontainer" style={{ display: "flex" }}>

          
              {paymentproduct.map((pay, index) => (
                <div key={index}>
                  <img src={pay.product.displayImage} />
                  <p>{pay.product.name}</p>
                  <p>{pay.product.price}</p>
                </div>
              ))}


            </div>

          </div>
        </div> */}
      </div>
    </>
  );
};
export default Payment;
