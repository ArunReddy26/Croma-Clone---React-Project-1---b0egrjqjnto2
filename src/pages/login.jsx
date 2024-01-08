import React, { useState, useEffect } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/header";

const Login = () => {

    const navigate = useNavigate();



    async function userLogin(userData) {
        try {
            const response = await fetch("https://academics.newtonschool.co/api/v1/user/login", {
                method: 'POST',
                headers: { 'projectID': 'b0egrjqjnto2', "Content-Type": "application/json", },
                body: JSON.stringify(userData),
            });
            const jsonData = await response.json();
            localStorage.setItem('token', jsonData.token);
            delete jsonData['token'];
            navigate("/");
            console.log(jsonData);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/');
        }
        window.scrollTo(0, 0);
    }, [])

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
        appType: "ecommerce"
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        const updateddata = { ...loginData };
        updateddata[e.target.name] = e.target.value;
        setLoginData(updateddata);
    }
    const signedin = () => {
        if (loginData.email && loginData.password)
            userLogin(loginData);

    }
    return (
        <div>
        <Header/>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center", background:"#191919", height:"92vh"}}>
                <div className="login">
                    <p>Please enter your Email ID or Phone number</p>
                    <div className="details">
                        <input
                            type="email"
                            name="email"
                            className="input"
                            placeholder="Enter your Email ID"
                            onChange={handleSubmit}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            className="input"
                            placeholder="Enter your password"
                            onChange={handleSubmit}
                            required
                        />
                    </div>
                    <div className="logincheck">
                        <input type="checkbox" />
                        <p style={{ fontSize: "0.85rem" }}>Keep me signed in</p>
                    </div>

                    <p className="terms">By continuing you agree to our terms and policies</p>
                    <button onClick={signedin}>Continue</button>
                </div>
            </div>
        </div>
    )

}
export default Login;
