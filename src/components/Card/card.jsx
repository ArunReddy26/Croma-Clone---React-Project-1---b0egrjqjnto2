import "./card.css";
import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { Rating } from "@mui/material";

const Card = (props) => {
  const { wishlistproducts, cardClick, addtocart } = props;
  console.log("wishlistproducts", wishlistproducts);
  return (
    <div className="whislist-cart">
      <div className="whislist-cartimages">
        <img src={wishlistproducts.products.displayImage} alt="" />
      </div>
      <div className="whislist-second-content">
        <div className="whislistcontent1">
          <div className="whislisttitle" >
            <p>{wishlistproducts.products.name}</p>
            <div className="star">
              <Rating style={{ color: "#12daa8", fontSize: "1.2rem" }} name="read-only" value={wishlistproducts.products.ratings} readOnly/>
            </div>
            <div className="whislistproductdelivery">
              Standard Delivery By<br /> February 2024
            </div>
            <div className="whislistButton">
              <button className="whislistButtonadd" onClick={() => addtocart(wishlistproducts.products._id)}>Add to Cart</button>
              <button className="whislistButtondelete" onClick={() => cardClick(wishlistproducts.products._id)}>Delete</button>
            </div>
          </div>
        </div>
        <h2>₹{wishlistproducts.products.price}</h2>
      </div>
    </div>



  );
};
export default Card;
