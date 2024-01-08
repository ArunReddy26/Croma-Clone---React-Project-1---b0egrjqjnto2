import React, { useState, useEffect } from "react";
import "./inputproducts.css";

import { useParams } from "react-router-dom";
import Header from "../components/Header/header";
import Dropcard from "../components/Card/dropcard";
const Inputproduct = () => {

  const [userproducts, setuserproducts] = useState([]);
  const { userinput } = useParams();

  const updateSuggestions = async (value) => {
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
  // var heading;
  // userproducts.map((user) => {
  //   heading = user.subCategory;
  // })

  useEffect(() => {
    if (userinput) {
      updateSuggestions(userinput);
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

    else if(value==="trending"){
      const trending = userproducts.filter(product => product.sellerTag === 'trending');
      setuserproducts(trending);


    }
    else if(value==="best seller"){
      const seller = userproducts.filter(product => product.sellerTag === 'best seller');
      setuserproducts(seller);
    
    }
    else if(value==="new arrival"){
      const arrival = userproducts.filter(product => product.sellerTag === 'new arrival');
      setuserproducts(arrival);  
    }


  };

  return (
    <>
      <Header />
      <div className="searchcontainer">
        <div className="" style={{ padding: "1rem", textAlign: "left", marginLeft: "7rem", color: "white" }}>
          <h1>Results for "{userinput}"</h1>
        </div>
        <div className="dropdowns">
          <div className="firstlist">
            <div className="sort-dropdown">

              <select >
                <option value="">Category</option>
                <option value="topRated">Top Rated</option>
                <option value="priceLowToHigh">Price (Lowest to Highest)</option>
                <option value="priceHighToLow">Price (Highest to Lowest)</option>
              </select>
            </div>
            <div className="sort-dropdown">

              <select >
                <option value="">Brand</option>
                <option value="Croma">Croma</option>
                <option value="LG">LG</option>
                <option value="Acer">Acer</option>
                <option value="OnePlus">OnePlus</option>
                <option value="Xiaomi">Xiaomi</option>
                <option value="Samsung">Samsung</option>
              </select>
            </div>
            <div className="sort-dropdown">

              <select onChange={handleSelectChange} >
                <option value="">SellerTag</option>
                <option value="trending">Trending</option>
                <option value="best seller">Best Seller</option>
                <option value="new arrival">New Arrival</option>
              </select>
            </div>
          </div>
          <div className="sort-dropdown">

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
              return <Dropcard key={user._id} product={user} />;
            })}
        </div>
      </div>
    </>


  )



}
export default Inputproduct;