import React from "react";
import "./dropcard.css";
import { IoStarSharp } from "react-icons/io5";
import { LiaToolsSolid } from "react-icons/lia";

const Dropcard = (props) => {

  const { product } = props;
  return (

    <div className="dropcontainer">
      <div  className="imagecontainer">
        <img src={product.displayImage} alt=""/>
      </div>
      <div className="product-details">
        <div class="product-name">
          <p style={{fontWeight:"800", height:"76px"}}>{product.name}</p>
          <span style={{ color: "#12daa8" , fontSize:"1rem"}}>{Math.round(product.ratings * 10) / 10}<span> <IoStarSharp style={{ width: "16px", height: "16px", color: "#12daa8" }} /></span></span>
          <span>₹{product.price}</span>
          <span ><LiaToolsSolid style={{ color: "white", background: "#191919", width: "24px", height: "24px", marginRight: "5px" }} /><span style={{ fontSize:"13px", position: "absolute" }}>    Standard Delivery by Tomorrow</span></span>
        </div>
      </div>
      <div style={{ color: "#393939" }}>________________________________________</div>

    </div>
  );


}
export default Dropcard;