import "./card.css";
import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
const Card = (props) => {
  const { product } = props;
  return (
    <div class="slider">
      <CiHeart className="heart" />
      <div class="image">
        <img src={product.displayImage} alt="" />
      </div>
      <div class="product-details">
        <div class="product-name">  
          <p>{product.name}</p>
          <span>₹{product.price}</span>
        </div>
      </div>
      <div className="star">
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
      </div>
    </div>
  );
};
export default Card;
