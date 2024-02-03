import { Rating } from "@mui/material";
import React from "react";
import { Randomnamegenerator } from "../../utils/Randomname";


// const shuffleArray = (array) => {
//     const shuffledArray = [...array];
//     for (let i = shuffledArray.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
//     }
//     return shuffledArray;
// };

const ReviewList = ({ names, productReviews }) => {
    // const shuffledNames = shuffleArray(names);
    return (
        <div className="review-list">
            {productReviews.map((review) => {

                return (
                    <div key={review._id}>
                        <h3>{Randomnamegenerator()}</h3>
                        {/* <p style={{ color: "white" }}>Rating: {review.ratings}</p> */}
                        <Rating style={{ color: "#12daa8" }} name="read-only" value={review.ratings} readOnly />

                        <p style={{ color: "white" }}>{review.text}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default ReviewList;
