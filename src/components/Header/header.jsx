import React, { useEffect } from "react";
import "./header.css";
import { useState } from "react";


import { MdLocationOn } from "react-icons/md";
import { IoPencil } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import BasicMenu from "../Dropdown/dropdown";
import { Link } from "react-router-dom";
import { SEARCH_PRODUCT_LIST } from "../Constants/Api";
import Maininput from "../Input/input";


const Header = () => {
  const [dropdown, setdropdown] = useState([]);
  const [inputdata, setinputdata] = useState("");
  const [suggestion, setsuggestion] = useState([]);
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
  const handleChange = (value) => {
    setinputdata(value);
    fetchinputdata(value);
  }
  useEffect(() => {
    getDropdown();
  }, []);
  return (



    <header className="header">
      <div className="content1">
        <div>
          <img
            src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg"
            alt="chromalogo"
          />
        </div>
        <div className="Menu">


          <BasicMenu categories={dropdown} className="dropdown" />

          <p className="text-sm">Menu</p>
        </div>

        <Maininput/>

        




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
        <div style={{ fontSize: "1.25rem", lineHeight: "2rem" }}>
          <FaUser />
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
