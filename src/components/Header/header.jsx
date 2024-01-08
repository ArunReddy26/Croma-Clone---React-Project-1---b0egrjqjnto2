import React, { useEffect } from "react";
import "./header.css";
import { useState } from "react";


import { MdLocationOn } from "react-icons/md";
import { IoPencil } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import BasicMenu from "../Dropdown/dropdown";
import { Link , useNavigate} from "react-router-dom";
import { SEARCH_PRODUCT_LIST } from "../Constants/Api";
import Maininput from "../Input/input";
import { CiHeart } from "react-icons/ci";


const Header = () => {
  const navigate=useNavigate()
  const [dropdown, setdropdown] = useState([]);
  const [open, setopen] = useState(false);

  const handlelogout=()=>{
    localStorage.removeItem("token");
    navigate("/")

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
  // const data = ["Trending", "Best sellers", "New Arrival", "Electronics", "Top Rated"];


  const fetchinputdata = (value) => {
    fetch(SEARCH_PRODUCT_LIST(value), {
      headers: {
        projectID: "b0egrjqjnto2",
      },
    }).then((response) => response.json()).then((json) => {
      const array = json.data;
      const results = array.filter((user) => {
        return (
          value && user.name && user.name.toLowerCase().includes(value)
        );

      })

    })

  }
  // const handleChange = (value) => {
  //   setinputdata(value);
  //   fetchinputdata(value);
  // }
  useEffect(() => {
    getDropdown();
  }, []);


  return (



    <header className="header">
      <div className="content1">
        <div>
          <Link to="/">
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg"
              alt="chromalogo"
            />
          </Link>
        </div>
        <div className="Menu">


          <BasicMenu categories={dropdown} className="dropdown" />

          <p className="text-sm">Menu</p>
        </div>

        <Maininput />






      </div>


      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginLeft: "8rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
          <MdLocationOn className="MdLocationOn" />
          <p
            style={{
              whiteSpace: "nowrap",
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
            }}
          >
            Mumbai 400049
          </p>
          <IoPencil className="text-xs" />
        </div>
        <div style={{ fontSize: "1.25rem", lineHeight: "2rem", cursor:"pointer"}}>
          <FaUser onClick={()=>setopen(!open)}/>
          {open && (
            <div className="dropdown-content" style={{position:"absolute", right:"8rem", top:"100%", padding:"10px", zIndex:"1", backgroundColor:"black"}}>
              <ul className="profile">
                <li><Link to="/mywhislist">My Whishlist</Link></li>
                <li><Link to="/orders">My Orders</Link></li>
                <li onClick={handlelogout}>Logout</li>
              </ul>
            </div>
          )}
          {/* {open &&(
            <div style={{ background: "white", position:"absolute" }}>
              <ul>
                {
                  Profile.map((data) => {
                    <li key={data}>{data}</li>
                  })
                }

              </ul>
            </div>
          )

          } */}
        </div>
        <div style={{ fontSize: "1.25rem", lineHeight: "1rem" }}>
          {
            localStorage.getItem('token') ? <Link to="/cart" className="carticon"><FaCartShopping /></Link> : (
              <Link to="/emptycart" className="carticon"><FaCartShopping /></Link>

            )}
        </div>
      </div>
    </header>






  );
};


export default Header;
