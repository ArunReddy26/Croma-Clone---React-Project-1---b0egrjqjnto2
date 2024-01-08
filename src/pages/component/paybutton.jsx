import "./paybutton.css";
function Paybutton(props) {
  return (
    <div className="payButton">
      <button>Pay ₹{props.totalPrice}</button>
    </div>
  );
}
export default Paybutton;
