import React, { useState ,useEffect} from "react";
import "./inputproducts.css";

import { useParams } from "react-router-dom";
import Header from "../components/Header/header";
import Dropcard from "../components/Card/dropcard";
const Inputproduct=()=>{

    const [userproducts, setuserproducts]=useState([]);
    const { userinput } = useParams();

    const updateSuggestions = async (value) => {
        try {
            const response = await fetch(
                `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?search={"name":"${value}"}`,
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
        if(userinput)
        {
        updateSuggestions(userinput);
        }
      }, [userinput]);

    return(
        <>
        <Header/>
        <div className="searchcontainer">
        <div className="" style={{padding:"1rem", textAlign:"left" ,marginLeft:"2.3rem", color:"white"}}>
          <h1>Results for "{userinput}"</h1>
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