import { useState } from "react";
import "./debitcredit.css";
import { useNavigate } from "react-router-dom";
function DebitCreditCardForm(props) {
  const { totalPrice, paymentproduct } = props;
  const navigate = useNavigate();
  const [checkbox, setCheckbox] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const validateCardNumber = (number) => {
    if (!number) return 'Card number is required';
    const regex = /^[0-9]{10}$/;
    return regex.test(number) ? '' : 'Card number must be 10 digits';
  };

  const validateExpiryDate = (date) => {
    if (!date) return 'Expiry date is required';
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    return regex.test(date) ? '' : 'Expiry date must be in MM/YY format';
  };

  const validateCvv = (cvv) => {
    if (!cvv) return 'CVV is required';
    const regex = /^[0-9]{3}$/;
    return regex.test(cvv) ? '' : 'CVV must be 3 digits';
  };

  const orderpostapi = async (details) => {

    const promise = await fetch(
      "https://academics.newtonschool.co/api/v1/ecommerce/order/convertCartToOrder",
      {
        method: "POST",
        headers: {
          projectID: "b0egrjqjnto2", Authorization: `Bearer ${localStorage.getItem('token')}`, "Content-Type": "application/json",
        },
        body: JSON.stringify(details)
      }
    );
    const response = await promise.json();
    navigate("/order-placed");
  }


  function debitcreditplaceorder(e) {

    e.preventDefault();

    const newErrors = {
      cardNumber: validateCardNumber(cardNumber),
      expiryDate: validateExpiryDate(expiryDate),
      cvv: validateCvv(cvv)
    };
    setErrors(newErrors);
    const addressinls = JSON.parse(localStorage.getItem('addresses'));
    const addressType = addressinls.addresstype.toUpperCase();

    delete addressinls.fullname;
    delete addressinls.flatno;
    delete addressinls.mobileno;
    delete addressinls.landmark;
    delete addressinls.area;
    delete addressinls.addresstype;

    const orderdetails = {
      productId: paymentproduct[0]?.product._id,
      quantity: paymentproduct[0]?.quantity,
      addressType,
      address: {
        ...addressinls, country: "India", zipCode: addressinls.pincode,

      }
    }
    delete orderdetails.address.pincode;

    if (!newErrors.cardNumber && !newErrors.expiryDate && !newErrors.cvv) {
      orderpostapi(orderdetails);
    }

  }
  function checkBoxHandler() {
    setCheckbox(!checkbox);
  }
  return (
    <form onSubmit={debitcreditplaceorder}>
      <div className="debitCardContainer">
        <label htmlFor="name">Enter Debit / Credit Card Details</label>
        <label htmlFor="cardnumber" style={{ marginTop: "2rem" }}>
          Card number
          <sup>*</sup>
        </label>
        <div className="cardNumber">
          <input type="number" placeholder="Enter card number here" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
          <img
            src="https://assets.juspay.in/hyper/images/common/jp_default_card.png"
            alt=""
            style={{ width: "40px" }}
          />
        </div>
        {errors.cardNumber && <p className="error-message">{errors.cardNumber}</p>}
        <div className="expiryDateAndCvv">
          <div>
            <label htmlFor="name">Expiry <sup>*</sup></label>
            <input type="text" placeholder="MM/YYYY" style={{ width: "40%" }} value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
          </div>
          <div>
            <label htmlFor="name">CVV <sup>*</sup></label>
            <input type="number" placeholder="CVV" style={{ width: "20%", marginLeft: "5px" }} value={cvv} onChange={(e) => setCvv(e.target.value)} />
          </div>
        </div>
        {errors.expiryDate && <p className="error-message">{errors.expiryDate}</p>}
        {errors.cvv && <p className="error-message">{errors.cvv}</p>}
        <div className="checkbox">
          <input type="checkbox" onClick={checkBoxHandler}></input>
          <span style={{ marginLeft: "0.8rem" }}>
            Save card details for later
          </span>
        </div>

        <div className={`debitButton`}>
          <button type="submit" className={`${checkbox ? "check" : "uncheck"}`}>
            Pay ₹{totalPrice}
          </button>
        </div>
      </div>
    </form>
  );
}
export default DebitCreditCardForm;
