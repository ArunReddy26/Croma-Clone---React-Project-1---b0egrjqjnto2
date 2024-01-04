// import React, { useState, useEffect } from "react";
// import "./login.css";
// import { IoMdClose } from "react-icons/io";
// import { useNavigate } from "react-router-dom";

// const Login = () => {

//     const navigate = useNavigate();



//     async function userLogin(userData) {
//         try {
//             const response = await fetch("https://academics.newtonschool.co/api/v1/user/login", {
//                 method: 'POST',
//                 headers: { 'projectID': 'b0egrjqjnto2', "Content-Type": "application/json", },
//                 body: JSON.stringify(userData),
//             });
//             const jsonData = await response.json();
//             localStorage.setItem('token', jsonData.token);
//             delete jsonData['token'];
//             navigate("/");
//             console.log(jsonData);
//         }
//         catch (error) {
//             console.log(error);
//         }
//     }

//     useEffect(() => {
//         if (localStorage.getItem('token')) {
//             navigate('/');
//         }
//     }, [])

//     const [loginData, setLoginData] = useState({
//         email: "",
//         password: "",
//         appType: "ecommerce"
//     })
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const updateddata = { ...loginData };
//         updateddata[e.target.name] = e.target.value;
//         setLoginData(updateddata);
//     }
//     const signedin = () => {
//         if(loginData.email && loginData.password)
//         userLogin(loginData);

//     }
//     return (
//         <div className="login">
//             <IoMdClose className="closeopopup"/>
//             <p>Please enter your Email ID or Phone number</p>
//             <div className="details">
//                 <input
//                     type="email"
//                     name="email"
//                     className="input"
//                     placeholder="Enter your Email ID"
//                     onChange={handleSubmit}
//                     required
//                 />
//                 <input
//                     type="password"
//                     name="password"
//                     className="input"
//                     placeholder="Enter your password"
//                     onChange={handleSubmit}
//                     required
//                 />
//             </div>
//             <div className="check">
//                 <input type="checkbox" className="checkbox"/>
//                 <p style={{fontSize:"0.85rem"}}>Keep me signed in</p>
//             </div>

//             <p className="terms">By continuing you agree to our terms and policies</p>
//             <button onClick={signedin}>Continue</button>
//         </div>
//     )

// }
// export default Login;
