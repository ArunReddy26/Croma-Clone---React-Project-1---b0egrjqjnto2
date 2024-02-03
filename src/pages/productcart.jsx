import React from "react";
import "./productcart.css";
import { MdOutlineStar } from "react-icons/md";
import Checkout from "../components/Checkout/checkout";
const Cartproducts = (props) => {
    const { product,movetowishlist, cardClick } = props;

    return (

        // <div style={{ display: "flex", marginTop: "5rem", boxShadow: "1px 1px 5px rgba(0,0,0,0.2)" }}>
        <div className="maincart">
            <div className="cart" >
                <div className="cartimages">
                    <img
                        src={product && product?.product?.displayImage}
                        alt="cartimages"
                        style={{ width: "200px", height: "200px" }}
                    />
                </div>
                <div className="cartseconndivnames">

                    <div className="cartcontent">
                        <div className="carttitle">
                            {/* <p style={{ width: "400px", fontWeight: "600" }}> */}
                            <p className="cartproductname">
                                {product?.product?.name}
                            </p>
                            <div className="star">
                                <MdOutlineStar className="stars" />
                                <MdOutlineStar className="stars" />
                                <MdOutlineStar className="stars" />
                                <MdOutlineStar className="stars" />
                                <MdOutlineStar className="stars" />
                            </div>
                            <div style={{ marginTop: "1rem" }}>
                                Standard Delivery <br /> February 2024
                            </div>
                            <div className="Button" style={{ marginTop: "1rem" }}>
                                <button className="btn1"onClick={() => movetowishlist(product.product._id)}>Move to Wishlist</button>
                                <button className="btn2" onClick={() => cardClick(product.product._id)}>Remove</button>
                            </div>
                        </div>
                    </div>
                    <h2>₹{product?.product?.price}</h2>
                </div>
                {/* <div className="price">
            <div className="main1">
                <h4>₹{product.product.price}</h4>
                <h5>(Incl. all Taxes)</h5>
                <div>____________</div>
                <span className="amountstrike">
                    <span>MRP </span>₹74,990.00
                </span>
                <div className="saverupee">(Save ₹25,151.00)</div>
                <div>____________</div>
                <span className="amountstrike">
                    <span>₹</span>3177/mo*
                </span>
                <span>EMI Options</span>
            </div>
        </div> */}

            </div >
            {/* <Checkout/> */}
        </div>




    )

}

export default Cartproducts;