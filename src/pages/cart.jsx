import React, { useEffect, useState } from "react";
import Header from "../components/Header/header";
import { Link } from "react-router-dom";
import Cartproducts from "./productcart";
import Checkout from "../components/Checkout/checkout";
import "./cart.css";
import Whishlist from "./whislistproduct";


const Cart = () => {
    const [products, setproducts] = useState([]);
    const [whislist, setwhislist] = useState([]);

    const [totalprice, settotalprice] = useState("");


    const AddCart = async (productID) => {

        
        const options = {
            method: 'PATCH',
            headers: new Headers({ projectID: 'b0egrjqjnto2', 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` }),
            quantity: 1,
        }
        const data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${productID}`, options)
        const resData = await data.json();
        DeleteWhislist(productID);  
        setproducts(resData.data.items);
        settotalprice(resData.data.totalPrice);

    }
    const AddtoWishlist = async (productId) => {
        console.log("addtowishlist",productId);
        const response = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/wishlist", {
          method: 'PATCH',
          headers: { 'projectID' : 'b0egrjqjnto2', Authorization: `Bearer ${localStorage.getItem('token')}`, 'Content-Type': 'application/json'},
          body: JSON.stringify({productId}),
      });
      const resData = await response.json();
      console.log("resData",resData);
    //   console.log("deletecart called");
      DeleteCart(productId);
      Getwhislist();
      setproducts(resData.data.items);
      settotalprice(resData.data.totalPrice);
      
      

      }


 




    const Getcart = async () => {

        const promise = await fetch(
            "https://academics.newtonschool.co/api/v1/ecommerce/cart",
            {
                headers: {
                    projectID: "b0egrjqjnto2", Authorization: `Bearer ${localStorage.getItem('token')}`
                },
            }
        );
        const response = await promise.json();

        setproducts(response.data.items);
        settotalprice(response.data.totalPrice);


    }

    const DeleteCart = async (productID) => {
        console.log("productID", productID);
        const options = {
            method: 'DELETE',
            headers: new Headers({ projectID: 'b0egrjqjnto2', 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` })
        }
        const data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${productID}`, options)
        const resData = await data.json();
        setproducts(resData.data.items);
        settotalprice(resData.data.totalPrice)
    }



    const DeleteWhislist = async (productID) => {
       
        const options = {
            method: 'DELETE',
            headers: new Headers({ projectID: 'b0egrjqjnto2', 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` })
        }
        const data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${productID}`, options)
        const resData = await data.json();
        setwhislist(resData.data.items);
        
    }
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
        setwhislist(response.data.items)



    }










    useEffect(() => {
        // AddCart(location.state.id);
        Getcart();
        Getwhislist();
    }, [])

    return (

        <div>

            <Header />

            {products.length > 0 ? (
                <div className="product-cart">
                    <div style={{ display: "flex", flexDirection: "column" }}>

                        {products.map((pro) => {
                            return <Cartproducts product={pro} movetowishlist={AddtoWishlist}cardClick={DeleteCart} />
                        })}
                    </div>
                    <Checkout Price={totalprice} />

                </div>


            ) : (

                <div className="emptycart">
                    <h2 style={{ textAlign: "left", marginLeft: "8rem" }}>YOUR CART</h2>
                    <div className="image" style={{ margin: "auto" }}>
                        <img src="https://kind-leakey-f7509c.netlify.app/img/Empty.png" style={{ width: "260px", height: "150px" }} alt="empty-cart" />
                        <h3 style={{ fontWeight: "800" }}> Your Cart is Empty</h3>
                        <Link to="/" style={{ color: "#088466", fontWeight: "800", textDecoration: "underline" }}>continue shopping</Link>
                    </div>

                </div>


            )

            }
            <div>
                {
                    whislist.length > 0 ? (
                        <>
                            <div>________________________________________________________________________________________________________________________________________________________________</div>


                            <div style={{ display: "flex", gap:"2rem", flexWrap:"wrap" }}>

                                {whislist.map((wish) => {
                                  
                                    return <Whishlist wishlistproducts={wish} addtocart={AddCart}deletewish={DeleteWhislist} />
                                })}
                            </div>




                        </>
                    ) : (
                        <div></div>

                    )
                }
            </div>

        </div >

    )


}
export default Cart;