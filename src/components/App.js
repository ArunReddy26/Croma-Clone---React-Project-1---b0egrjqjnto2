import ProductContainer from "../pages/productcontainer";
import "../styles/App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./Header/header";
import Cart from "../pages/cart";
import Banner from "./Banner/banner";
import Home from "./Home/home";
import Productdetail from "../pages/productdetail";
import ProtectedRoute from "./ProtectedRoute/protected";
import Login from "../pages/login";
import Emptycart from "../pages/emptycart";
import Checkoutform from "../pages/checkoutform";
import Inputproduct from "../pages/inputproducts";
import Payment from "../pages/payment";
import Order from "../pages/order";
import Favouritelist from "../pages/favoritelist";
import Register from "../pages/register";
import Bankdiscount from "../pages/bankdiscount";


function App() {

  return (
    <Router>

    <div className="App">
     
      <Routes>
      <Route path="/" element={<Home/>}/>
      
      <Route path="/:productCategory" element={<ProductContainer />} />
      <Route path="/cart" element={<ProtectedRoute><Cart/></ProtectedRoute>} />
      <Route path="/details/:product_id" element={<Productdetail/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/emptycart" element={<Emptycart/>}/>
      <Route path="/checkout" element={<Checkoutform/>}/>
      <Route path="/search/:userinput" element={<Inputproduct/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/orders" element={<Order/>}/>
      <Route path="/mywhislist" element={<Favouritelist/>}/>
      <Route path="/signup" element={<Register/>}/>
      <Route path="/lp-more-for-your-money" element={<Bankdiscount/>}/>
     
    </Routes>
    </div >
    </Router>
  )
}

export default App;
