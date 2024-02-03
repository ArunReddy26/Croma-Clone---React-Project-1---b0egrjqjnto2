import React, { useState, useEffect } from "react";
import "./inputproducts.css";

import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header/header";
import Dropcard from "../components/Card/dropcard";
const Inputproduct = () => {


  async function brand(value) {
    console.log("value", value);
    const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=50&filter={"brand":"${value}"}`, {
      headers: {
        projectID: "b0egrjqjnto2",
      },
    });
    const jsonData = await response.json();
    // console.log("jsondata", jsonData.data);

    setuserproducts(jsonData.data);
  }



  const navigate = useNavigate();

  const [userproducts, setuserproducts] = useState([]);
  const { userinput } = useParams();

  const cardclick = (_id) => {
    navigate(`/details/${_id}`)
  }

  const updateSuggestions = async (value) => {
    if(value=="washingmachine"){
      value="washingMachine";
      
    }
    else if(value=="mobile"|| value=="mobiles"){
      value="iphone";
    }
    if (value == "laptop" || value=="ac" || value=="washingMachine" || value=="kitchenappliances"|| value=="tablet"|| value=="audio"|| value=="health"||value=="refrigerator"||value=="travel") {
      try {
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=50&filter={"subCategory":"${value}"}`,
          {
            headers: {
              projectID: "b0egrjqjnto2",
            },
          }
        );
        const results = await response.json();
        setuserproducts(results.data);
      }
      catch (error) {
        console.error("Error fetching suggestions:", error);
      }

    }
    else {
      try {
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=50&search={"name":"${value}"}`,
          {
            headers: {
              projectID: "b0egrjqjnto2",
            },
          }
        );
        const results = await response.json();
        setuserproducts(results.data);
      }
      catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    }
  }
  // var heading;
  // userproducts.map((user) => {
  //   heading = user.subCategory;
  // })

  useEffect(() => {
    if (userinput) {
      updateSuggestions(userinput.toLowerCase());
    }
  }, [userinput]);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    console.log("value", value);
    if (value === "top rated") {
      const topRatedProducts = userproducts.filter(product => product.sellerTag === 'top rated');
      setuserproducts(topRatedProducts);
    }
    else if (value === "priceLowToHigh") {
      const filteredProducts = userproducts.filter(product => product.price > 0);
      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);
      setuserproducts(sortedProducts);
    }
    else if (value === "priceHighToLow") {
      const filteredProducts = userproducts.filter(product => product.price > 0);
      const sortedProducts = filteredProducts.sort((a, b) => b.price - a.price);
      setuserproducts(sortedProducts);
    }

    else if (value === "trending") {
      const trending = userproducts.filter(product => product.sellerTag === 'trending');
      setuserproducts(trending);


    }
    else if (value === "best seller") {
      const seller = userproducts.filter(product => product.sellerTag === 'best seller');
      setuserproducts(seller);

    }
    else if (value === "new arrival") {
      const arrival = userproducts.filter(product => product.sellerTag === 'new arrival');
      setuserproducts(arrival);
    }
    else if (value === "Apple" || value==="Samsung"|| value==="LG" ||value==="Acer"||value=="OnePlus"||value==="Xiaomi" ) {
      
      brand(value);

    }
    else if (value === "electronics") {
      const electronics = userproducts.filter(product => product.category === 'electronics');
      setuserproducts(electronics);

    }



  };

  return (
    <>
      <Header />
      <div className="searchcontainer">
        <div className="" style={{ padding: "1rem", textAlign: "left", marginLeft: "7rem", color: "white" }}>
          <h1>Results for "{userinput}"</h1>
        </div>
        <div className="inputdropdowns">
          <div className="inputfirstlist">
            <div className="inputsort-dropdown">

              <select onChange={handleSelectChange}>
                <option value="">Category</option>
                <option value="electronics">Electronics</option>
                <option value="priceLowToHigh">Price (Lowest to Highest)</option>
                <option value="priceHighToLow">Price (Highest to Lowest)</option>
              </select>
            </div>
            <div className="inputsort-dropdown">

              <select onChange={handleSelectChange} >
                <option value="">Brand</option>
                <option value="LG">LG</option>
                <option value="Acer">Acer</option>
                <option value="OnePlus">OnePlus</option>
                <option value="Xiaomi">Xiaomi</option>
                <option value="Samsung">Samsung</option>
                <option value="Apple">Apple</option>
              </select>
            </div>
            <div className="inputsort-dropdown">

              <select onChange={handleSelectChange} >
                <option value="">SellerTag</option>
                <option value="trending">Trending</option>
                <option value="best seller">Best Seller</option>
                <option value="new arrival">New Arrival</option>
              </select>
            </div>
          </div>
          <div className="inputsort-dropdown">

            <select onChange={handleSelectChange} >
              <option value="">Sort By</option>
              <option value="top rated">Top Rated</option>
              <option value="priceLowToHigh">Price (Lowest to Highest)</option>
              <option value="priceHighToLow">Price (Highest to Lowest)</option>
            </select>
          </div>

        </div>
        <div className="userproductscontainer">
          {userproducts &&
            Array.isArray(userproducts) &&
            userproducts.map((user) => {
              return <Dropcard key={user._id} product={user} click={cardclick} />;
            })}
        </div>
      </div>
    </>


  )



}
export default Inputproduct;