
import Paybutton from "./paybutton";
import "./netbanking.css";
import { useState } from "react";

function NetBankingForm(props) {
    const {totalPrice, paymentproduct}=props;
    
    console.log("payment",paymentproduct);

    const [paymentNumber, setPaymentNumber] = useState(0);
    function handlePaymentOption(val) {
        setPaymentNumber(val);
    }
    return (
        <div className="walletContainer">
            <div>
                <div
                    className="walletPriceContainer"
                    onClick={() => {
                        handlePaymentOption(1);
                    }}
                >
                    <div className="walletImageAndType">
                        <div>
                            <img src="https://images.bewakoof.com/web/icici-1556185960.png" />
                        </div>

                        <div className="walletText">ICICI</div>
                    </div>
                    <div className="radioButton">
                        <input type="radio" />
                    </div>
                </div>
                {paymentNumber == 1 && <Paybutton totalPrice={totalPrice} paymentproduct={paymentproduct}/>}
            </div>

            <div>
                <div
                    className="walletPriceContainer"
                    onClick={() => {
                        handlePaymentOption(2);
                    }}
                >
                    <div className="walletImageAndType">
                        <div>
                            <img src="		https://images.bewakoof.com/web/axis-1556185962.png" />
                        </div>

                        <div className="walletText">Axis</div>
                    </div>
                    <div className="radioButton">
                        <input type="radio" />
                    </div>
                </div>
                {paymentNumber == 2 && <Paybutton totalPrice={totalPrice} paymentproduct={paymentproduct} />}
            </div>

            <div>
                <div
                    className="walletPriceContainer"
                    onClick={() => {
                        handlePaymentOption(3);
                    }}
                >
                    <div className="walletImageAndType">
                        <div>
                            <img src="	https://images.bewakoof.com/web/sbi-1556185961.png" />
                        </div>

                        <div className="walletText">SBI</div>
                    </div>
                    <div className="radioButton">
                        <input type="radio" />
                    </div>
                </div>
                {paymentNumber == 3 && <Paybutton totalPrice={totalPrice} paymentproduct={paymentproduct}/>}
            </div>

            <div>
                <div
                    className="walletPriceContainer"
                    onClick={() => {
                        handlePaymentOption(4);
                    }}
                >
                    <div className="walletImageAndType">
                        <div>
                            <img src="https://images.bewakoof.com/web/hdfc-1556185961.png" />
                        </div>

                        <div className="walletText">HDFC</div>
                    </div>
                    <div className="radioButton">
                        <input type="radio" />
                    </div>
                </div>
                {paymentNumber == 4 && <Paybutton totalPrice={totalPrice} paymentproduct={paymentproduct} />}
            </div>

            <div>
                <div
                    className="walletPriceContainer"
                    onClick={() => {
                        handlePaymentOption(5);
                    }}
                >
                    <div className="walletImageAndType">
                        <div>
                            <img src="https://images.bewakoof.com/web/kotak-1556185967.png" />
                        </div>

                        <div className="walletText">KOTAK</div>
                    </div>
                    <div className="radioButton">
                        <input type="radio" />
                    </div>
                </div>
                {paymentNumber == 5 && <Paybutton totalPrice={totalPrice} paymentproduct={paymentproduct} />}
            </div>
        </div>
    );
}
export default NetBankingForm;
