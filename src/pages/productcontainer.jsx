import React from "react";
import { useParams } from "react-router-dom"

import { useEffect, useState } from "react";
import { GET_PRODUCTS_CATEGORYWISE } from "../components/Constants/Api";
import Header from "../components/Header/header";
import "./productcontainer.css";
import Dropcard from "../components/Card/dropcard";

function ProductContainer() {
  const { productCategory } = useParams();
  const [products, setProducts] = useState([]);

  async function getAllProductsCategoryWise(category) {
    const response = await fetch(GET_PRODUCTS_CATEGORYWISE(category), {
      headers: {
        projectID: "b0egrjqjnto2",
      },
    });
    const jsonData = await response.json();
    setProducts(jsonData.data);
  }

  useEffect(() => {
    getAllProductsCategoryWise(productCategory);
  }, [productCategory]);


  

  return (
    <div>
      <Header />
      <div className="container">
        <div className="" style={{padding:"1rem", textAlign:"left" ,marginLeft:"2.3rem", color:"white"}}>
          <h1>{productCategory}</h1>
        </div>
        <div className="producContainer2">
          {products &&
            Array.isArray(products) &&
            products.map((product) => {
              return <Dropcard key={product._id} product={product} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default ProductContainer;
