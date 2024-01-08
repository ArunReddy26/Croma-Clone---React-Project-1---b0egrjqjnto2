import React from "react";
import { useParams, useNavigate } from "react-router-dom"

import { useEffect, useState } from "react";
import { GET_PRODUCTS_CATEGORYWISE } from "../components/Constants/Api";
import Header from "../components/Header/header";
import "./productcontainer.css";
import Dropcard from "../components/Card/dropcard";

function ProductContainer() {
  const navigate = useNavigate();
  const { productCategory } = useParams();
  const [products, setProducts] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');


  async function getAllProductsCategoryWise(category) {
    const response = await fetch(GET_PRODUCTS_CATEGORYWISE(category), {
      headers: {
        projectID: "b0egrjqjnto2",
      },
    });
    const jsonData = await response.json();
    console.log("jsondata",jsonData )
    setProducts(jsonData.data);
  }

  useEffect(() => {
    getAllProductsCategoryWise(productCategory);
    window.scrollTo(0, 0);
  }, [productCategory]);

  const cardclick = (_id) => {
    navigate(`/details/${_id}`)
  }


  const handleSelectChange = (e) => {
    const value = e.target.value;
    console.log("value", value);  
    if(value==="top rated") 
    {
    const topRatedProducts = products.filter(product => product.sellerTag === 'top rated');
    setProducts(topRatedProducts);
    }
    else if(value==="priceLowToHigh"){
      const filteredProducts = products.filter(product => product.price > 0);
      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);
      setProducts(sortedProducts);
    }
    else if(value==="priceHighToLow"){
      const filteredProducts = products.filter(product => product.price > 0);
      const sortedProducts = filteredProducts.sort((a, b) => b.price - a.price);
      setProducts(sortedProducts);
    }
    else if(value==="trending"){
      const trending = products.filter(product => product.sellerTag === 'trending');
      setProducts(trending);


    }
    else if(value==="best seller"){
      const seller = products.filter(product => product.sellerTag === 'best seller');
      setProducts(seller);
    
    }
    else if(value==="new arrival"){
      const arrival = products.filter(product => product.sellerTag === 'new arrival');
      setProducts(arrival);
    
    }
  

  };



  return (
    <div>
      <Header />
      <div className="container">
        <div className="" style={{ padding: "1rem", textAlign: "left", marginLeft: "7rem", color: "white" }}>
          <h1>{productCategory}</h1>
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
           
            <select  onChange={handleSelectChange} >
              <option value="">Sort By</option>
              <option value="top rated">Top Rated</option>
              <option value="priceLowToHigh">Price (Lowest to Highest)</option>
              <option value="priceHighToLow">Price (Highest to Lowest)</option>
            </select>
          </div>

        </div>
        <div className="producContainer2">
          {products &&
            Array.isArray(products) &&
            products.map((product) => {
              return <Dropcard key={product._id} product={product} click={cardclick} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default ProductContainer;
