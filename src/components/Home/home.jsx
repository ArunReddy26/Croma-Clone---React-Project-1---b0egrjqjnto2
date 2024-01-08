import React from "react";
import { useState } from "react";
import Header from "../Header/header";
import Banner from "../Banner/banner";
import "./home.css";
import Carousel from "../Banner/images";
import Footer from "../Footer/footer";
import { createPortal } from "react-dom";

const Home = () => {
    // const [isModalOpen, setModalOpen] = useState(false);
//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    


    return (
        <div className="Home">
           
            <Header />
            <Banner />
            <div
                style={{
                    display: "flex",
                    gap: "1rem",
                    paddingLeft: "10rem",
                    paddingRight: "10rem",
                    paddingBottom: "2rem"

                }}
            >
                <img
                    src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701943951/Croma%20Assets/CMS/LP%20Page%20Banners/2023/More%20For%20Your%20Money/December/BAU%20Banks/Mon%20-%20IDFC/HP_2Split_IDFC_06Dec2023_jvkfx9.png?tr=w-1024"
                    alt="image1"
                    style={{ width: "550px", borderRadius: "10px" }}
                />
                <img
                    src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702458368/Croma%20Assets/CMS/LP%20Page%20Banners/2023/More%20For%20Your%20Money/December/UPI%2C%20GST%2C%20Paytm%2C%20ZipCare%20Bank%20strip/ZipCare%20-%2028%20Nov%202023/ZipCare%201%20-%20EW/D_2Split_ZipcareEW_13Dec2023_wol1cc.png?tr=w-1024"
                    alt="image2"
                    style={{ width: "550px", borderRadius: "10px" }}
                />
            </div>
            <Carousel />
            <Footer/>
            {/* {

                isModalOpen ? (
                <>
                {
                    createPortal (<div className="modalcontainer"><Login setModalOpen={setModalOpen}/></div> , document.body)
                }

                </>): null
            } */}
           

        </div >
    )

}
export default Home;
