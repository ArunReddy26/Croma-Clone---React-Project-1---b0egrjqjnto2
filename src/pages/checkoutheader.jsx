import React from "react";
import "./checkoutheader.css";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Checkoutheader = () => {
  

    const navigate=useNavigate();
    const checkheader=()=>{
        navigate("/");


    }

    return (
        <div className="checkheader">
            <div className="logo">
                <div>
                    <img
                        src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg"
                        alt="chromalogo"
                        onClick={checkheader}
                    />
                </div>
                <div className="shippaybtn">
                <Link to="/cart" className="checkoutcartbtn">Cart</Link>
                <Link to="/checkout" className="checkoutshippingbtn">Shipping</Link>
                <Link to="/payment" id="paybtn"className="checkoutspaymentbtn">Payment</Link>
                </div>
            </div>


        </div>


        // Adjust the import based on your routing library


        // <div className="header" style={{ backgroundColor: "#191919", border:"1px solid #545454", padding: "10px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
       
        //     <div className="logo">
        //         <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg" alt="Logo" style={{ width: '50px', height: '50px' }} />
        //     </div>

        //     <div className="buttons" style={{ display: 'flex', alignItems: 'center' }}>
              
        //         <Link to="/cart" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px', padding: '5px', borderRadius: '5px', transition: 'background-color 0.3s', backgroundColor: "#191919", border:"1px solid #545454"}} className="button">
        //             Cart
        //         </Link>

        //         <Link to="/shipping" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px', padding: '5px', borderRadius: '5px', transition: 'background-color 0.3s',backgroundColor: "#191919", border:"1px solid #545454" }} className="button">
        //             Shipping
        //         </Link>

                
        //         <Link to="/payment" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px', padding: '5px', borderRadius: '5px', transition: 'background-color 0.3s',backgroundColor: "#191919", border:"1px solid #545454" }} className="button">
        //             Payment
        //         </Link>
        //     </div>
        // </div>




    )


}
export default Checkoutheader;