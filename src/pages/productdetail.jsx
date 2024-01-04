import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/header";
import { GET_PRODUCT_DETAILS, PRODUCT_REVIEW } from "../components/Constants/Api";
import { useState, useEffect } from "react";

import "./productdetail.css";
import Footer from "../components/Footer/footer";
const Productdetail = () => {
    const { product_id } = useParams();
    const [productdetails, setProductDetails] = useState({});
    const [productReviews, setProductReviews] = useState([]);
    async function getProductDetails(id) {
        try {
            const response = await fetch(GET_PRODUCT_DETAILS(id), {
                headers: {
                    projectID: "b0egrjqjnto2",
                }
            });
            const jsonData = await response.json();
            setProductDetails(jsonData.data);

        }
        catch (error) {
            console.log(error);
        }
    }

    async function getProductReviews(id) {
        try {
            const response = await fetch(PRODUCT_REVIEW(id), {
                headers: {
                    'projectID': 'kbtsbbfdoig1',
                }
            });
            const jsonData = await response.json();
            setProductReviews(jsonData.data);
            // console.log(jsonData);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getProductDetails(product_id);
        getProductReviews(product_id);
    }, [])


    //     const array=productdetails.features;
    //     console.log("array", array);
    // array.map((feature)=>{
    //     console.log(feature);
    // })
    // array.map((feature)=>{
    //     console.log(feature);
    // })


    // <img src={productdetails.displayImage} alt={productdetails.name} style={{ width: "240px", height: "250px" }} />
    //         <h3>{productdetails.name}</h3>




    //         <ul>
    //             {productdetails.features && productdetails.features.map((feature, index) => (
    //                 <li key={index}>{feature}</li>
    //             ))}
    //         </ul>





    //         <div dangerouslySetInnerHTML={{ __html: productdetails.description }} />



    return (
        <div>

            <Header />


            <div className="descriptionbox">
                <div id="sp-outer-box">
                    <div id="sp-left-box">
                        <div className="sp-container">
                            <img
                                id="sp-image"
                                src={productdetails.displayImage}
                            />
                        </div>
                    </div>
                    <div id="sp-right-box">
                        <h1 id="sp-product-name">
                            {productdetails.name}
                        </h1>

                        <div
                            id="star"
                            style={{ display: "inline-block", marginLeft: "20px" }}
                        >
                            ⭐⭐⭐⭐⭐
                        </div>
                        <div id="sp-price-box">
                            <span id="sp-discounted-amount">₹25990</span>
                            <span className="sp-mrp-text">MRP</span>
                            <span id="sp-original-amount"></span>
                            <span className="sp-tax-text">(Inclusive of all taxes)</span>
                        </div>

                        <hr />

                        <div className="key-features">
                            <h4>Key Features:</h4>
                            <ul>
                                {productdetails.features && productdetails.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <hr />

                        <div className="sp-add-to-cart-btn">
                            <button className="sp-add-to-cart">Buy Now</button>
                            <button className="sp-buy-now">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="container2">
                    <h2 style={{ color: "white", marginLeft: "2rem", marginTop: "2rem" }}>
                        Overview
                    </h2>
                    <div dangerouslySetInnerHTML={{ __html: productdetails.description }} />
                </div>
                <div className="container3">
                    <h2 style={{ color: "white", marginLeft: "2rem", marginTop: "2rem" }}>
                        Reviews
                    </h2>
                    <span>({productdetails.name})</span>
                    {
                        productReviews &&
                        Array.isArray(productReviews) &&
                        productReviews.map((review) => {
                            return (
                                <div key={review._id}>{review.text}</div>
                            )
                        })
                    }
                </div>
            </div>

            <Footer/>


        </div>












    )


}
export default Productdetail;