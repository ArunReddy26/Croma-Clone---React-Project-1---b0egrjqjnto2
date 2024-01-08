import React from "react";
import { useState } from "react";
import "./productcard.css";
import { FaHeart } from "react-icons/fa";
// import { FaRegHeart } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";



const Productcard = (props) => {
  // const {isModalOpen, setModalOpen}=props;
  // const [isModalOpen, setModalOpen] = useState(false);
  // const openModal = () => setModalOpen(true);
  // const closeModal = () => setModalOpen(false);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const { displayImage, price, name, _id } = props.product;

  const cardclick = () => {
    navigate(`/details/${_id}`)
  }


  function addtowhislist(_id) {
    if (localStorage.getItem('token')) {
      // AddCart(_id);
      // navigate("/cart");
      setIsClicked(true);
      AddtoWishlist(_id);


    }
    else {
      // openModal();
      // setModalOpen(true);



      navigate("/login");

    }

    // navigate("/cart", { state: { id: _id } });


    // navigate("/cart")
  }


  function delefromwhislist(_id) {
    setIsClicked(false);
    DeleteWhislist(_id);
  }


  const DeleteWhislist = async (productID) => {
    console.log("productID",productID);

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

  return (
    // <Link to={`/details/${_id}`} style={{color:"white"}}></Link>
    <div className="main">
      {
        isClicked ? <FaHeart onClick={()=>delefromwhislist(_id)} className="heart" style={{ fontSize: "1.2rem", color: "#12daa8" }} /> : <CiHeart className="heart" onClick={() => addtowhislist(_id)} />

      }
      {/* <CiHeart className="heart" onClick={() => addtowhislist(_id)} /> */}
      <div className="image">
        <img src={displayImage} alt="" onClick={cardclick} />
      </div>
      <div className="product-details" onClick={cardclick}>
        <div className="product-name">
          <p style={{ width: "246.25px", height: "57px", fontWeight: "600", overflow: "hidden", }}>{name}</p>
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

