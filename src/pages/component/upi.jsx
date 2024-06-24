import { useState } from "react";
import "./upi.css";
import { useNavigate } from "react-router-dom";
function UPIForm(props) {
  const { totalPrice, paymentproduct } = props;
  const [upiId, setUpiId] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [error, setError] = useState('');
  const navigate=useNavigate();

  const validateUpiId = (id) => {
    if (!id) return 'UPI ID is required';
    const regex = /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/;
    return regex.test(id) ? '' : 'Invalid UPI ID format';
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const errorMessage = validateUpiId(upiId);
    setError(errorMessage);

    if (!errorMessage) {
      navigate("/order-placed");
    }
  };

  const checkBoxHandler = () => {
    setCheckbox(!checkbox);
  };

  return (
    <form onSubmit={handleVerify}>
      <div className="UPIContainer">
        <label htmlFor="upiId">UPI ID / VPA</label>
        <div className="UPIInput">
          <input
            type="text"
            id="upiId"
            placeholder="e.g rakesh@upi"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="UPIText">
          A collect request will be sent to this UPI ID
        </div>

        <div className="checkbox">
          <input type="checkbox" onClick={checkBoxHandler}></input>
          <span style={{ marginLeft: "0.8rem" }}>
            Save this UPI ID for faster payments.
          </span>
        </div>

        <div className="UPIButton">
          <button type="submit" className={`${checkbox ? "checkupibtn" : "uncheckupibtn"}`}>Pay ₹{totalPrice}</button>
        </div>
      </div>
    </form>
  )
}
export default UPIForm;
