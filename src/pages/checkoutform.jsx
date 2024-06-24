import React from "react";
import Checkoutheader from "./checkoutheader";
import "./checkoutform.css";
import Checkout from "../components/Checkout/checkout";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkoutform = () => {
    const navigate = useNavigate();
    const [totalprice, settotalprice] = useState("");
    const [local, setlocal] = useState({});

    function checkdatalocal() {
        const datainls = JSON.parse(localStorage.getItem('addresses'));
        console.log("dacainls", datainls);
        if (localStorage.getItem('addresses')) {
            setlocal(datainls);
        }
        else {
            setlocal({})
        }
    }

    function addnewaddress(e) {
        e.preventDefault();
        localStorage.removeItem('addresses');
        checkdatalocal();
        setUserAddress({
            pincode: "",
            fullname: "",
            street: "",
            landmark: "",
            area: "",
            city: "",
            state: "",
            mobileno: "",
            addresstype: ""
        });
        setlocal({});
    }
    const [userAddress, setUserAddress] = useState(
        {
            pincode: "",
            fullname: "",
            street: "",
            landmark: "",
            area: "",
            city: "",
            state: "",
            mobileno: "",
            addresstype: ""
        }
    );
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
        settotalprice(response.data?.totalPrice);
    }
    useEffect(() => {
        checkdatalocal();
        Getcart();
    }, [userAddress])

    const handleSubmit = (e) => {
        e.preventDefault();
        const updateddata = { ...userAddress };
        updateddata[e.target.name] = e.target.value;
        setUserAddress(updateddata);
    }

    const handleclick = (e) => {
        e.preventDefault();
        const updateddata = { ...userAddress };
        updateddata[e.target.name] = e.target.value;
        setUserAddress(updateddata);
    }
    const handleform = (e) => {
        e.preventDefault();
        const updateddata = { ...userAddress };
        if (userAddress.pincode && userAddress.state && userAddress.city && userAddress.fullname && userAddress.landmark && userAddress.area && userAddress.mobileno && userAddress.addresstype && userAddress.street) {

            localStorage.setItem('addresses', JSON.stringify(userAddress));
            setUserAddress(updateddata);
        }
        if (localStorage.getItem('addresses')) {
            navigate("/payment");
        }
        else {
            notify()
        }
    }
    const notify = () => {

            toast.info('Please Fill all details!', {
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

    function gottopaymentpage() {
        navigate("/payment");
    }

    return (
        <div>
            <Checkoutheader />
            <div style={{ display: "flex", gap: "2rem", backgroundColor: "white" }} className="formmediaquery">
                <form className="form-container">
                    <h1>Checkout Form</h1>
                    <div className="form-section1">
                    <label htmlFor="name">Name<sup>*</sup></label>
                        <input type="text" value={userAddress.fullname} id="name" name="fullname" onChange={handleSubmit} required />
                        <label htmlFor="phone">Phone<sup>*</sup></label>
                        <input type="number" value={userAddress.mobileno} id="phone" name="mobileno" placeholder="Enter in numbers only" onChange={handleSubmit} required />
                    </div>
                    <h2 style={{ textAlign: "left" }}>Address Details</h2>
                    <div className="form-section2">
                    <label htmlFor="pincode">Pincode<sup>*</sup></label>
                        <input type="number" id="pincode" value={userAddress.pincode} name="pincode" placeholder="Enter in numbers only" onChange={handleSubmit} required />
                        <label htmlFor="street">Street<sup>*</sup></label>
                        <input type="text" id="street" value={userAddress.street} name="street" onChange={handleSubmit} required />
                        <label htmlFor="landmark">Landmark<sup>*</sup></label>
                        <input type="text" id="landmark" value={userAddress.landmark} name="landmark" onChange={handleSubmit} required />
                        <label htmlFor="area">Section/Area<sup>*</sup></label>
                        <input type="text" id="area" name="area" value={userAddress.area} onChange={handleSubmit} required />
                        <label htmlFor="state">State<sup>*</sup></label>
                        <input type="text" id="state" name="state" value={userAddress.state} onChange={handleSubmit} required />
                        <label htmlFor="city">City<sup>*</sup></label>
                        <input type="text" id="city" name="city" value={userAddress.city} onChange={handleSubmit} required />
                    </div>
                    <label htmlFor="street" >Address Type<sup>*</sup></label>
                    <div className="form-btns">
                        <input type="radio" name="addresstype" value="Home" checked={userAddress.addresstype === "Home"} onChange={handleSubmit} />
                        <label htmlFor="state">Home</label>
                        <input type="radio" name="addresstype" value="Work" checked={userAddress.addresstype === "Work"} onChange={handleSubmit} />
                        <label htmlFor="state" >Work</label>
                        <input type="radio" name="addresstype" value="Other" checked={userAddress.addresstype === "Other"} onChange={handleSubmit} />
                        <label htmlFor="state">Other</label>
                    </div>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", alignItems: "center", marginTop: "1rem" }}>
                        <button className="" style={{ width: "150px", border: "2px solid #12daa8" }} type="submit" onClick={handleform}>Go to Payment</button>
                        <button className="" style={{ width: "150px", border: "2px solid #12daa8" }} onClick={addnewaddress}>Add New Address</button>
                    </div>
                </form>
                <Checkout Price={totalprice} paymentclick={gottopaymentpage} />
            </div>
        </div>
    )

}
export default Checkoutform;