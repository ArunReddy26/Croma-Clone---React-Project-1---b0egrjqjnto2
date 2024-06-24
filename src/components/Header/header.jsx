import React, { useEffect } from "react";
import "./header.css";
import { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { IoPencil } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import BasicMenu from "../Dropdown/dropdown";
import { Link, useNavigate } from "react-router-dom";
import { SEARCH_PRODUCT_LIST } from "../Constants/Api";
import Maininput from "../Input/input";
import { CiHeart } from "react-icons/ci";
import MenuComponent from "../../pages/Mobileresponsive/menubar";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = (props) => {
  const navigate = useNavigate()
  const [dropdown, setdropdown] = useState([]);
  const [open, setopen] = useState(false);


  const logoutnotify = () => {
    toast.success('Logout Successful', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

}

  const handlelogout = () => {
    if (localStorage.getItem('token')) {
      localStorage.removeItem("token");
      navigate("/");
      logoutnotify();
    }
    else {
      navigate("/login");
    }
  }

  async function getDropdown() {
    const response = await fetch(
      "https://academics.newtonschool.co/api/v1/ecommerce/electronics/categories",
      {
        headers: {
          projectID: "b0egrjqjnto2",
        },
      }
    );
    const drop = await response.json();
    setdropdown(drop.data);
  }

  useEffect(() => {
    getDropdown();
  }, []);

  return (
    <header className="header">
      <div className="content1">
        <div className="headermobileview" >
          <div>
            <Link to="/">
              <img
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg"
                alt="chromalogo"
              />
            </Link>
          </div>
          <div className="Menu">
            <div className="basicMenu">
              <BasicMenu categories={dropdown} className="dropdown" />
            </div>
            <div className="menuComponent">
              <MenuComponent categories={dropdown} />
            </div>
            <p className="text-sm">Menu</p>
          </div>
        </div>
        <Maininput />
      </div>
      <div className="headersection2">
        <div className="headerusericon">
          <FaUser onClick={() => setopen(!open)} />
          {open && (
            <div className="headerdropdown-content">
              {localStorage.getItem('token') ?
                <ul className="headerprofile">
                  <li><Link to="/mywishlist" style={{ color: "white" }}>My Wishlist</Link></li>
                  <li><Link to="/myorders" style={{ color: "white" }}>My Orders</Link></li>
                  <li onClick={handlelogout}>Logout</li>
                </ul> : (
                  <ul className="headerprofile">
                    <li onClick={handlelogout}>Login</li>
                  </ul>
                )
              }
            </div>
          )}
        </div>
        <div className="headercarticon" >
          {
            <Link to="/cart" className="carticon"><FaCartShopping /></Link>
          }
          <p id="cartcountstore">{props.cartcount ? props.cartcount : 0}</p>
        </div>
      </div>
    </header>
  );
};


export default Header;
