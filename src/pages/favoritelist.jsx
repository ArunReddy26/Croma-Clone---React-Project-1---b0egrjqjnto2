import React, { useState, useEffect } from "react";
import Header from "../components/Header/header";
import { Link } from "react-router-dom";
import Card from "../components/Card/card";
import "./favoritelist.css";


const Favouritelist = () => {
    const [list, setlist] = useState([]);
    const Getwhislist = async () => {

        const wish = await fetch(
            "https://academics.newtonschool.co/api/v1/ecommerce/wishlist",
            {
                headers: {
                    projectID: "b0egrjqjnto2", Authorization: `Bearer ${localStorage.getItem('token')}`
                },
            }
        );
        const response = await wish.json();
        setlist(response.data?.items)



    }
    const AddCart = async (productID) => {


        const options = {
            method: 'PATCH',
            headers: new Headers({ projectID: 'b0egrjqjnto2', 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` }),
            quantity: 1,
        }
        const data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${productID}`, options)
        const resData = await data.json();
        DeleteWhislist(productID);
        alert("Product Added to Cart");


    }


    const DeleteWhislist = async (productID) => {

        const options = {
            method: 'DELETE',
            headers: new Headers({ projectID: 'b0egrjqjnto2', 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` })
        }
        const data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${productID}`, options)
        const resData = await data.json();
        setlist(resData.data.items);

    }

    useEffect(() => {
        Getwhislist();
        window.scrollTo(0, 0);

    }, []);
    return (
        <div>
            <Header />
            <div>
                {list?.length > 0 ? (
                    <div className="product-cart">
                        <div style={{ display: "flex", flexDirection: "column", gap:"1.5rem"}}>

                            {list.map((pro) => {
                                // movetowishlist={AddtoWishlist} cardClick={DeleteCart}
                                // addtocart={AddCart} deletewish={DeleteWhislist}
                                return <Card wishlistproducts={pro} cardClick={DeleteWhislist} addtocart={AddCart} />
                            })}
                        </div>

                    </div>


                ) : (

                    <div className="orderscart" style={{ background: "#191919", height: "100vh" }}>
                        <h2 style={{ textAlign: "center", color: "white" }}>My Whislist</h2>
                        <div className="image" style={{ margin: "auto" }}>
                            <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:No_image.png/Croma%20Assets/UI%20Assets/sshz69afrixwivcsgnpx.svg" style={{ width: "260px", height: "150px" }} alt="order-cart" />
                            <h3 style={{ fontWeight: "800", color: "white" }}>Oops! Your wishlist looks empty</h3>
                            <p>Create your own wishlist with your favourites & share with your friends and loved ones!</p>
                            <Link to="/" style={{ color: "#088466", fontWeight: "800", textDecoration: "underline" }}>continue shopping</Link>
                        </div>

                    </div>


                )

                }
            </div>
        </div>
    )

}
export default Favouritelist;
