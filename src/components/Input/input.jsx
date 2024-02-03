import React from "react";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import "./input.css";
import { debounce } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

const Maininput = () => {

    const navigate=useNavigate();

    const initialSuggestions = [
        "Trending",
        "Best sellers",
        "New Arrival",
        "Electronics",
        "Top Rated",
    ];

    // const [inputValue, setInputValue] = useState("");
    const [userInput, setUserInput] = useState({ "input": "", });
    const [suggestions, setSuggestions] = useState(initialSuggestions);
    const [showSuggestions, setShowSuggestions] = useState(false);

    // const updateSuggestions = debounce(async (value) => {
    //     try {
    //         const response = await fetch(
    //             `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?search={"name":"${value}"}`,
    //             {
    //                 headers: {
    //                     projectID: "b0egrjqjnto2",
    //                 },
    //             }
    //         );
    //         const results = await response.json();
    //         console.log("results", results);
    //         //   console.log("results", results);

    //         //   const filteredSuggestions =results.data.slice(0, 9);
    //         // const namedarray=filteredSuggestions.map((item)=>{
    //         //     return item.name;

    //         //   });


    //         console.log("namedarray", namedarray);

    //         //   setSuggestions(filteredSuggestions);
    //         //   setShowSuggestions(true);
    //     } catch (error) {
    //         console.error("Error fetching suggestions:", error);
    //     }
    // }, 1000);
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
            console.log("results", results);
        }
        catch (error) {
            console.error("Error fetching suggestions:", error);
        }
    }

    const handleInputChange = (e) => {
        e.preventDefault();
        const updatedUserInput = { ...userInput };
        const formData = new FormData(e.currentTarget);

        formData.forEach((value, key) => {
            // console.log("value", value);
            // console.log("key", key);
            updatedUserInput[key] = value;
        });


        setUserInput(updatedUserInput);

        // setInputValue(value);
        if(updatedUserInput.input)
        {
            navigate(`/search/${updatedUserInput.input}`)
            //  navigate("/search", { state: { unserinput:updatedUserInput.input } });
        // updateSuggestions(updatedUserInput.input);
        }
        console.log("userInput",updatedUserInput);
    };

    // const handleInputBlur = () => {
    //     setShowSuggestions(false);
    // };

    // const handleInputFocus = () => {
    //     setSuggestions(initialSuggestions);
    //     setShowSuggestions(true);
    // };
    return (
        <div className="headermaininput">
            <form className="input1" onSubmit={handleInputChange}>


                <input

                    // value={inputValue}
                    name="input"
                    id="input"
                    type="text"
                    placeholder="What are you looking for ?"
                    className="input-box"

                    // onBlur={handleInputBlur}
                    // onFocus={handleInputFocus}
                />

                <button type="submit"className="searchbutton" ><CiSearch className="CiSearch" /></button>



            </form>
            {/* {showSuggestions && (
                <ul className="suggestion-box">
                    {showSuggestions && (
                        <ul className="suggestion-box">
                            {suggestions.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                </ul>
            )} */}
        </div>
    )

}
export default Maininput;