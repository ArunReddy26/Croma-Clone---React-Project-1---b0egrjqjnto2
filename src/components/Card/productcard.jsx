import React from "react";
import { useState } from "react";
import "./productcard.css";
import { IoStarSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";



const Productcard = (props) => {
  const {isModalOpen, setModalOpen}=props;
  // const [isModalOpen, setModalOpen] = useState(false);
  // const openModal = () => setModalOpen(true);
  // const closeModal = () => setModalOpen(false);
  const navigate = useNavigate();
  
  const { displayImage, price, name, _id } = props.product;

  const cardclick = () => {
    navigate(`/details/${_id}`)
  }


  function addtowhislist(_id) {
    if(localStorage.getItem('token')){
      // AddCart(_id);
      // navigate("/cart");

      AddtoWishlist(_id);


    }
    else{
      // openModal();
      setModalOpen(true);
      


      // navigate("/login");

    }
   
    // navigate("/cart", { state: { id: _id } });


    // navigate("/cart")
  }




//   const AddCart = async (productID) => {
//     const options = {
//         method: 'PATCH',
//         headers: new Headers({ projectID: 'b0egrjqjnto2', 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` }),
//         quantity: 1,
//     }
//     const data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${productID}`, options)
//     const resData = await data.json();
//     console.log("resdata", resData);
// }


const AddtoWishlist = async (productId) => {
  const response = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/wishlist", {
    method: 'PATCH',
    headers: { 'projectID' : 'b0egrjqjnto2', Authorization: `Bearer ${localStorage.getItem('token')}`, 'Content-Type': 'application/json'},
    body: JSON.stringify({productId}),
});
const resData = await response.json();

}

  return (
    // <Link to={`/details/${_id}`} style={{color:"white"}}></Link>
    <div className="main">
      <CiHeart className="heart" onClick={() => addtowhislist(_id)} />
      <div className="image">
        <img src={displayImage} alt="" onClick={cardclick} />
      </div>
      <div className="product-details" onClick={cardclick}>
        <div className="product-name">
          <p style={{width:"246.25px", height:"57px", fontWeight:"600", overflow:"hidden"}}>{name}</p>
          <span>₹{price}</span>
        </div>
      </div>
      <div className="star" onClick={cardclick}>
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
      </div>
    </div>
  );

}
export default Productcard;

