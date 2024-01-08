import { useState } from "react";
import "./debitcredit.css";
function DebitCreditCardForm(props) {
  const [checkbox, setCheckbox] = useState(false);
  function checkBoxHandler() {
    setCheckbox(!checkbox);
  }
  return (
    <div className="debitCardContainer">

      <label htmlFor="name">Enter Debit / Credit Card Details</label>
      <label htmlFor="cardnumber" style={{ marginTop: "2rem" }}>
        Card number
      </label>

      <div className="cardNumber">
        <input type="text" placeholder="Enter card number here" />
        <img
          src="https://assets.juspay.in/hyper/images/common/jp_default_card.png"
          alt=""
          style={{ width: "40px" }}
        />
      </div>

      <div className="expiryDateAndCvv">
        <div>
          <label htmlFor="name">Expiry</label>
          <input type="text" placeholder="MM/YYYY" style={{ width: "40%" }} />
        </div>
        <div>
          <label htmlFor="name">CVV</label>
          <input
            type="text"
            placeholder="CVV"
            style={{ width: "20%", marginLeft: "5px" }}
          />
        </div>
      </div>
      <div className="checkbox">
        <input type="checkbox" onClick={checkBoxHandler}></input>
        <span style={{ marginLeft: "0.8rem" }}>
          Save card details for later
        </span>
      </div>

      <div className={`debitButton `}>
        <button className={`${checkbox ? "check" : "uncheck"}`}>
          Pay ₹{props.totalPrice}
        </button>
      </div>
    </div>
  );
}
export default DebitCreditCardForm;
