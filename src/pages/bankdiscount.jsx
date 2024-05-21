import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import "./bankdiscount.css";
const Bankdiscount = () => {
    return (
        <div className="">
            <Header />
            <div className="bankdiscountcontainer">
                <h2 className="bankdiscounttitle">More For Your Money</h2>

                <div className="bankdiscountimage-container">

                    <img src="https://media.croma.com/image/upload/v1696307908/Croma%20Assets/CMS/LP%20Page%20Banners/2023/More%20For%20Your%20Money/October/TOP%20BANNERS/HP_MFYM_TopBanner_ICICI_30Sep_2023_amjne7.png" className="bankdiscountresponsive-image" />
                    <img src="https://media.croma.com/image/upload/v1696307902/Croma%20Assets/CMS/LP%20Page%20Banners/2023/More%20For%20Your%20Money/October/TOP%20BANNERS/HP_MFYM_TopBanner_HSBC_30Sep2023_rzkajn.png" className="bankdiscountresponsive-image" />
                    <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637911607/Croma%20Assets/CMS/LP%20Page%20Banners/2021/More%20For%20Your%20Money/LP_single_more4money_26Nov_bcn1p8.png?tr=w-1440" className="bankdiscountresponsive-image" />
                    <div>
                        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1705083527/Croma%20Assets/CMS/LP%20Page%20Banners/2024/More%20For%20Your%20Money/Jan/14th%20to%2018th%20Jan/LP_SingleSplit_MFYMP_ICICI_11Jan2024_ralgfb.png?tr=w-1024" className="bankdiscountresponsive-image" />
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )

}
export default Bankdiscount;