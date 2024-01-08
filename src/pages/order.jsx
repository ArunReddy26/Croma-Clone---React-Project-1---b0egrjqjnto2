import React from "react";
import Header from "../components/Header/header";
import { Link } from "react-router-dom";
const Order=()=>{
    return (
        <div className="orderscart" style={{background:"#191919", height:"100vh"}}>
           <Header/>
            <h2 style={{ textAlign: "center", color:"white"}}>My Orders</h2>
            <div className="image" style={{ margin: "auto" }}>
                <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:No_image.png/Croma%20Assets/UI%20Assets/sshz69afrixwivcsgnpx.svg" style={{ width: "260px", height: "150px" }} alt="order-cart" />
                <h3 style={{ fontWeight: "800",color:"white" }}>No Order History Available</h3>
                <Link to="/" style={{ color: "#088466", fontWeight: "800", textDecoration:"underline" }}>continue shopping</Link>
            </div>

        </div>
    )

}
export default Order;