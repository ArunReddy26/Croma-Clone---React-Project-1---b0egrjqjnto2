import React from "react";
import "./dropcard.css";
import { IoStarSharp } from "react-icons/io5";
import { LiaToolsSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dropcard = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate=useNavigate();

  const DeleteWhislist = async (productID) => {
       
    const options = {
        method: 'DELETE',
        headers: new Headers({ projectID: 'b0egrjqjnto2', 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` })
    }
    const data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${productID}`, options)
    const resData = await data.json();
    // setwhislist(resData.data.items);
    
}

  const AddtoWishlist = async (productId) => {
    const response = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/wishlist", {
      method: 'PATCH',
      headers: { 'projectID': 'b0egrjqjnto2', Authorization: `Bearer ${localStorage.getItem('token')}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId }),
    });
    const resData = await response.json();

  }



  const { product, click } = props;
  function addtowhislist(_id) {
    if (localStorage.getItem('token')) {
      // AddCart(_id);
      // navigate("/cart");
      setIsClicked(true);

      AddtoWishlist(_id);
      alert("Product Added to Whislist");
    }
    else {
      // openModal();
      // setModalOpen(true);

      navigate("/login");

    }
  }

  function delefromwhislist(_id){
    setIsClicked(false);
    alert("Product removed from Whislist");
    
    DeleteWhislist(_id);
  }

  return (

    <div className="dropcontainer">
      <div className="imagecontainer">
        <img src={product.displayImage} alt="" onClick={() => click(product._id)} />
        
          {
            isClicked ? <FaHeart onClick={()=>delefromwhislist(product._id)} className="dropheart" style={{fontSize:"1.2rem", color:"#12daa8"}}/> : <CiHeart className="dropheart" onClick={() => addtowhislist(product._id)}/>
    
          }
        {/* <CiHeart className="dropheart" onClick={() => addtowhislist(product._id)} /> */}

      </div>
      <div className="product-details">
        <div class="product-name">
          <p style={{ fontWeight: "800", height: "56px", overflow: "hidden" }} onClick={() => click(product._id)}>{product.name}</p>
          <span style={{ color: "#12daa8", fontSize: "1rem" }}>{Math.round(product.ratings * 10) / 10}<span> <IoStarSharp style={{ width: "16px", height: "16px", color: "#12daa8" }} onClick={() => click(product._id)} /></span></span>
          <span>₹{product.price}</span>
          <span ><LiaToolsSolid style={{ color: "white", background: "#191919", width: "24px", height: "24px", marginRight: "5px" }} /><span style={{ fontSize: "13px", position: "absolute" }}>    Standard Delivery by Tomorrow</span></span>
        </div>
      </div>
      <div style={{ color: "#393939" }}>________________________________________</div>

    </div>
  );


}
export default Dropcard;