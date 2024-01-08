import "./card.css";
import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
const Card = (props) => {
  const { wishlistproducts,cardClick,addtocart} = props;
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
      <div className="images">
        <img
          src={wishlistproducts.products.displayImage}
          alt=""
          style={{ width: "200px", height: "200px" }}
        />
      </div>
      <div style={{ display: "flex" }}>

        <div className="content1">
          <div className="title" style={{ textAlign: "left" }}>
            <p style={{ width: "400px", fontWeight: "600" }}>
              {wishlistproducts.products.name}
            </p>
            <div className="star">
              <MdOutlineStar className="stars" />
              <MdOutlineStar className="stars" />
              <MdOutlineStar className="stars" />
              <MdOutlineStar className="stars" />
              <MdOutlineStar className="stars" />
            </div>
            <div style={{ marginTop: "1rem" , color:"white"}}>
              Standard Delivery <br /> December 2023
            </div>
            <div className="Button" style={{ marginTop: "1rem" }}>
              <button className="add" onClick={() => addtocart(wishlistproducts.products._id)}>Add to Cart</button>
              <button className="delete" onClick={() => cardClick(wishlistproducts.products._id)}>Delete</button>
            </div>
          </div>
        </div>
        <h2 style={{color:"white"}}>₹{wishlistproducts.products.price}</h2>
      </div>
    </div>



  );
};
export default Card;
