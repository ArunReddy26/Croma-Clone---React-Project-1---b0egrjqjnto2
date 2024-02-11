import "./card.css";
import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
const Card = (props) => {
  const { wishlistproducts, cardClick, addtocart } = props;
  return (
    // <div class="slider">
    //   <CiHeart className="heart" />
    //   <div class="image">
    //     <img src={product.displayImage} alt="" />
    //   </div>
    //   <div class="product-details">
    //     <div class="product-name">  
    //       <p>{product.name}</p>
    //       <span>₹{product.price}</span>
    //     </div>
    //   </div>
    //   <div className="star">
    //     <IoStarSharp />
    //     <IoStarSharp />
    //     <IoStarSharp />
    //     <IoStarSharp />
    //     <IoStarSharp />
    //   </div>
    // </div>
    <div className="whislist-cart">
      <div className="whislist-cartimages">
        <img
          src={wishlistproducts.products.displayImage}
          alt=""

        />
      </div>
      <div className="whislist-second-content">

        <div className="whislistcontent1">
          <div className="whislisttitle" >
            <p >
              {wishlistproducts.products.name}
            </p>
            <div className="star">
              <MdOutlineStar className="stars" />
              <MdOutlineStar className="stars" />
              <MdOutlineStar className="stars" />
              <MdOutlineStar className="stars" />
              <MdOutlineStar className="stars" />
            </div>
            <div className="whislistproductdelivery">
              Standard Delivery By<br /> February 2024
            </div>
            <div className="whislistButton" style={{ marginTop: "1rem" }}>
              <button className="whislistButtonadd" onClick={() => addtocart(wishlistproducts.products._id)}>Add to Cart</button>
              <button className="whislistButtondelete" onClick={() => cardClick(wishlistproducts.products._id)}>Delete</button>
            </div>
          </div>
        </div>
        <h2 style={{ color: "white", lineHeight:"1rem", marginLeft:"2rem" }}>₹{wishlistproducts.products.price}</h2>
      </div>
    </div>



  );
};
export default Card;
