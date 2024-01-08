import React from "react";
import "./productcart.css";
import { MdOutlineStar } from "react-icons/md";
import Checkout from "../components/Checkout/checkout";
const Cartproducts = (props) => {
    const { product,movetowishlist, cardClick } = props;

    return (

        // <div style={{ display: "flex", marginTop: "5rem", boxShadow: "1px 1px 5px rgba(0,0,0,0.2)" }}>
        <div style={{display:"flex", gap:"1rem"}}>
            <div className="cart" >
                <div className="images">
                    <img
                        src={product && product?.product?.displayImage}
                        alt=""
                        style={{ width: "200px", height: "200px" }}
                    />
                </div>
                <div style={{ display: "flex" }}>

                    <div className="content">
                        <div className="title" style={{ textAlign: "left" }}>
                            <p style={{ width: "400px", fontWeight: "600" }}>
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
                                Standard Delivery <br /> December 2023
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