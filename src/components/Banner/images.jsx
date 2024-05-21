import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./images.css";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Productcard from "../Card/productcard";

const Carousel = () => {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState("https://st2.depositphotos.com/1006899/8352/i/450/depositphotos_83524452-stock-photo-404-error-hanging-on-strings.jpg");
  const [productlist, setproductlist] = useState([]);
  const [audio, setaudio] = useState([]);
  const [kitchenappliances, setkitchenappliances] = useState([]);
  const [washingMachine, setwashingMachine] = useState([]);
  const [trending, settrending] = useState([]);
  const [laptops, setlaptops] = useState([]);
  const [television, settelevision] = useState([]);
  const [ac, setac] = useState([]);
  const [tablet, settablet] = useState([]);
  const [refrigerator, setrefrigerator] = useState([]);
  const [health, sethealth] = useState([]);
  const [travel, settravel] = useState([]);

  async function getAllproducts() {
    try {
      const response = await fetch(
        'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"sellerTag":"top rated"}',
        {
          headers: {
            projectID: "b0egrjqjnto2",
          },
        }
      );
      const promise = await response.json();
      const data = promise.data;
      setproductlist(data);
    } catch (error) {
      console.log('error', error)
    }
  }

  async function gettrendingproducts() {
    try {


      const response = await fetch(
        'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"sellerTag":"top rated"}',
        {
          headers: {
            projectID: "b0egrjqjnto2",
          },
        }
      );
      const promise = await response.json();
      const data = promise.data;
      setproductlist(data);
    } catch (error) {
      console.log('error', error)
    }
  }

  async function getAllproducts() {
    try {


      const response = await fetch(
        'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"sellerTag":"trending"}',
        {
          headers: {
            projectID: "b0egrjqjnto2",
          },
        }
      );
      const promise = await response.json();
      const data = promise.data;
      settrending(data);
    }
    catch (error) {
      console.log('error', error)
    }
  }

  async function getlaptopProducts() {
    try {


      const response = await fetch(
        'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"laptop"}',
        {
          headers: {
            projectID: "b0egrjqjnto2",
          },
        }
      );
      const promise = await response.json();
      const data = promise.data;
      setlaptops(data);
    }
    catch (error) {
      console.log('error', error)
    }
  }

  async function gettvProducts() {
    try {
      const response = await fetch(
        'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"tv"}',
        {
          headers: {
            projectID: "b0egrjqjnto2",
          },
        }
      );
      const promise = await response.json();
      const data = promise.data;
      settelevision(data);
    }
    catch (error) {
      console.log('error', error)
    }
  }


  async function getacProducts() {
    try {
      const response = await fetch(
        'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"ac"}',
        {
          headers: {
            projectID: "b0egrjqjnto2",
          },
        }
      );
      const promise = await response.json();
      const data = promise.data;
      setac(data);
    }
    catch (error) {
      console.log('error', error)
    }
  }

  async function gettabletProducts() {
    try {


      const response = await fetch(
        'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"tablet"}',
        {
          headers: {
            projectID: "b0egrjqjnto2",
          },
        }
      );
      const promise = await response.json();
      const data = promise.data;
      settablet(data);
    }
    catch (error) {
      console.log('error', error)
    }
  }

  async function getrefrigerator() {
    try {


      const response = await fetch(
        'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"refrigerator"}',
        {
          headers: {
            projectID: "b0egrjqjnto2",
          },
        }
      );
      const promise = await response.json();
      const data = promise.data;
      setrefrigerator(data);
    }
    catch (error) {
      console.log('error', error)
    }
  }

  async function gethealth() {
    try {


      const response = await fetch(
        'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"health"}',
        {
          headers: {
            projectID: "b0egrjqjnto2",
          },
        }
      );
      const promise = await response.json();
      const data = promise.data;
      sethealth(data);
    } catch (error) {
      console.log('error', error)
    }

  }


  async function getTravel() {
    try {

      const response = await fetch(
        'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"travel"}',
        {
          headers: {
            projectID: "b0egrjqjnto2",
          },
        }
      );
      const promise = await response.json();
      const data = promise.data;
      settravel(data);
    }
    catch (error) {
      console.log('error', error)
    }
  }

  async function getAudioproduct() {
    try {


      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=50&filter={"subCategory":"audio"}`,
        {
          headers: {
            projectID: "b0egrjqjnto2",
          },
        }
      );
      const promise2 = await response.json();
      const data = promise2.data;
      setaudio(data);
    }
    catch (error) {
      console.log('error', error)
    }
  }

  async function getWashingproduct() {
    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=50&filter={"subCategory":"washingMachine"}`,
        {
          headers: {
            projectID: "b0egrjqjnto2",
          },
        }
      );
      const promise2 = await response.json();
      const data = promise2.data;
      setwashingMachine(data);
    }
    catch (error) {
      console.log('error', error)
    }
  }

  async function getKitchenproduct() {
    try {

      const response = await fetch(
        'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=50&filter={"subCategory":"kitchenappliances"}',
        {
          headers: {
            projectID: "b0egrjqjnto2",
          },
        }
      );
      const promise2 = await response.json();
      const data = promise2.data;
      const kitchenappliances = data.filter((item) => item.subCategory === "kitchenappliances");
      setkitchenappliances(kitchenappliances);
    }
    catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    getlaptopProducts();
    getAudioproduct();
    getAllproducts();
    gettvProducts();
    getacProducts();
    gettabletProducts();
    getrefrigerator();
    gethealth();
    getTravel();
    gettrendingproducts();
    getKitchenproduct();
    getWashingproduct();
  }, [])

  const images = [
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690220193/Croma%20Assets/CMS/LP%20Page%20Banners/2023/UNBOXED/UPDATE/2407/category-icon_unboxed_e123f4.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968095/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_Mobile_21Feb2023_y6hsfe.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968095/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_TV_21Feb2023_repyuk.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1700225992/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/CategoryNavigation_AudioSplit_Laptops_17Nov2023_wcqnvs.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968094/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_H_E_21Feb2023_cw375r.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968094/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_Ref_21Feb2023_ztynzt.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968094/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_HT_SB_21Feb2023_rk8ohd.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968094/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_AC_21Feb2023_azyacw.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968095/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_S_M_21Feb2023_qllhag.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281227/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/washingmachine_categoryicons_ktcdeu.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281227/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/kitchenappliances_categoryicons_xulmep.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281227/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/grooming_categoryicons_oj7mrc.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281228/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/tablet_categoryicons_d9a5ru.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281228/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/wearable_categoryicons_sl3n0l.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690270086/Croma%20Assets/CMS/Category%20icon/Updated%20Icons/LP_WishlistSale_CN_WP_4July2023_jtwzp9.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690521345/Croma%20Assets/CMS/Category%20icon/CategoryNavigation_AudioSplit_Cameras_21Feb2023_fxbmtt.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1680608144/Croma%20Assets/CMS/Homepage%20Banners/Category%20Navigation/CategoryNavigation_AudioSplit_Accessories_21Feb2023_mtqgol.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281227/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/gaming_categoryicons_hfqpze.png?tr=w-720",
  ];

  const audioimages = [
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703567882/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Dec%202023/26-12-2023/HP_4Split_audio_TWS_26dec2023_njwbdp.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702271762/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Dec%202023/11-12-2023/HP_4Split_audio_croma_11dec2023_hc990y.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703308393/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Dec%202023/23-12-2023/HP_4Split_audio_SB_23dec2023_vwxix3.png?tr=w-720",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703481249/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Dec%202023/25-12-2023/HP_4Split_audio_Luxury_25dec2023_dod7ca.png?tr=w-720"
  ]

  const kitchenimages = [
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702193023/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Dec%202023/10-12-2023/HP_4Split_KA_MW_10dec2023_mijq5a.png?tr=w-480",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702271769/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Dec%202023/11-12-2023/HP_4Split_KA_mixer_11dec2023_upoifc.png?tr=w-480",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1700975390/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Nov%202023/26-11-2023/HP_4Split_KA_Chimnneys_26Nov2023_iibz9w.png?tr=w-480",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1700459132/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Nov%202023/20-11-2023/HP_4Split_KA_CM_20Nov2023_pofymo.png?tr=w-480",
  ]

  const laptopimages = [
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702360436/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Dec%202023/12-12-2023/HP_4Split_Laptops_student_12dec2023_w6hhcg.png?tr=w-480",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702360434/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Dec%202023/12-12-2023/HP_4Split_Laptops_professional_12dec2023_turuvi.png?tr=w-480",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702360431/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Dec%202023/12-12-2023/HP_4Split_Laptops_gaming_12dec2023_rqmz8k.png?tr=w-480",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702360433/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Dec%202023/12-12-2023/HP_4Split_Laptops_latesttech_12dec2023_xkll2z.png?tr=w-480",
  ]
  const washingmachines = [
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713879559/Croma%20Assets/CMS/LP%20Page%20Banners/2024/PCP/WM/April/23042024/MPCP_4split_newatcroma_WM_Bestseller_23April2024_g14p2f.png?tr=w-360",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713879472/Croma%20Assets/CMS/LP%20Page%20Banners/2024/PCP/WM/April/23042024/MPCP_4split_newatcroma_WM_Whirpool_23April2024_eipnd5.png?tr=w-360",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713879536/Croma%20Assets/CMS/LP%20Page%20Banners/2024/PCP/WM/April/23042024/PCP_4split_newatcroma_WM_FL_23April2024_zcqswp.png?tr=w-480",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713879586/Croma%20Assets/CMS/LP%20Page%20Banners/2024/PCP/WM/April/23042024/PCP_4split_newatcroma_WM_FA_23April2024_johxtc.png?tr=w-1024",
  ]
  const refrigerators = [
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698220072/Croma%20Assets/CMS/Bugs/01012023/040423/ref/PCP_ref_types_FrenchDoor_28Oct2023_sqwwdv.png?tr=w-1024",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698220072/Croma%20Assets/CMS/Bugs/01012023/040423/ref/PCP_ref_types_SBS_28Oct2023_rfswbo.png?tr=w-1024",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688389313/Croma%20Assets/CMS/PCP/July-2023/03-07-2023/DESKTOP/Choose%20Your%20Type/PCP_ref_types_DD_22May2023_tpotel.png?tr=w-1024",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698220073/Croma%20Assets/CMS/Bugs/01012023/040423/ref/PCP_ref_types_Singledoor_28Oct2023_iw5kls.png?tr=w-1024",

  ]
  const airconditioners = [
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715578462/Croma%20Assets/CMS/LP%20Page%20Banners/2024/PCP/May/PCP_4split_HOC_AC_1T3S_12May2024_jakjuq.png?tr=w-1024",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1712904802/Croma%20Assets/CMS/LP%20Page%20Banners/2024/PCP/Website%20change%20banner/PCP_4split_HOC_AC_Window_12april2024_c6c6pf.png?tr=w-1024",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698229072/Croma%20Assets/CMS/PCP/Oct-2023/25-10-2023/AC%20PCP%20Features/D/PCP_4Split_FTM_inverter_25oct2023_kmehza.png?tr=w-1024",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698229072/Croma%20Assets/CMS/PCP/Oct-2023/25-10-2023/AC%20PCP%20Features/D/PCP_4Split_FTM_performance_25oct2023_fq0q3b.png?tr=w-1024",
  ]

  const tvs = [
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684504627/Croma%20Assets/CMS/PCP/TV%20PCP/PCP_TV_NC_OS_firetv_15may2023_rjdkui.png?tr=w-1024",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685420323/Croma%20Assets/CMS/Bugs/01012023/040423/PCP_TV_NC_rightype_OLEDTV_15may2023_o2ioff.png?tr=w-1024",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684504682/Croma%20Assets/CMS/PCP/TV%20PCP/PCP_TV_NC_rightype_QLED_15may2023_yzotzq.png?tr=w-1024",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684504682/Croma%20Assets/CMS/PCP/TV%20PCP/PCP_TV_NC_rightype_LED_15may2023_bqpmmo.png?tr=w-1024",

  ]
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  const settings1 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  }
  const tvsimagesclick = () => {
    navigate(`/search/tv`);

  }
  const airconditionersimagesclick = () => {
    navigate(`/search/ac`);

  }
  const refrigeratorsimagesclick = () => {
    navigate(`/search/refrigerator`);
  }
  const washingimagesclick = () => {
    navigate(`/search/washingmachine`);

  }
  const audioimagesclick = () => {
    navigate(`/search/audio`);
  }

  const kitchenimagesclick = () => {
    navigate(`/search/kitchenappliances`);
  }

  const laptopimagesclick = () => {
    navigate(`/search/laptop`);
  }

  const imageclick = (e, index) => {
    console.log(`Clicked on image with index: ${index}`);
    if (index == 0) {
      navigate(`/unboxed`)
    }
    else if (index == 1) {
      navigate(`/search/iphone`)
    }
    else if (index == 2) {
      navigate(`/search/tv`);
    }
    else if (index == 3) {
      navigate(`/search/laptop`);
    }
    else if (index == 5) {
      navigate(`/search/refrigerator`);
    }
    else if (index == 7) {
      navigate(`/search/ac`);
    }
    else if (index == 8 || index == 4) {
      navigate(`/search/audio`);
    }
    else if (index == 9) {
      navigate(`/search/washingMachine`);
    }
    else if (index == 10) {
      navigate(`/search/kitchenappliances`);
    }
    else if (index == 12) {
      navigate(`/search/tablet`);
    }
    else if (index == 11 || index == 13 || index == 14 || index == 15 || index == 16 || index == 17) {
      navigate("/unboxed");
    }
  }

  return (
    <div className="carousel">
      <Slider {...settings}>
        {images?.map((image, index) => (
          <div key={index} className="images" onClick={(e) => imageclick(e, index)} >
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <p className="homeheadings_1">Deals Of The Day</p>
      <div className="slider-container">
        <Slider {...settings1}>
          {
            productlist.map((product) => {
              return <Productcard product={product} />
            })
          }
        </Slider>
      </div>

      <p className="homeheadings_1">Top Trending Deals</p>
      <div className="slider-container">
        <Slider {...settings1}>
          {
            trending.map((product) => {
              return <Productcard product={product} />
            })
          }
        </Slider>
      </div>

      <p className="homeheadings">Audio</p>
      <div className="homestaticimagedeals">
        {audioimages.map((image, index) => (
          <img src={image} alt={`Image ${index + 1}`} className="homeimages" onClick={() => audioimagesclick()} />
        ))}
      </div>

      <p className="homeheadings_1">Deals on Audio</p>
      <div className="slider-container">
        <Slider {...settings1}>
          {
            audio.map((product) => {
              return <Productcard product={product} />
            })
          }
        </Slider>
      </div>

      <p className="homeheadings">Kitchen Appliances</p>
      <div className="homestaticimagedeals">
        {kitchenimages.map((image, index) => (
          <img src={image} alt={`Image ${index + 1}`} className="homeimages" onClick={() => kitchenimagesclick()} />
        ))}
      </div>

      <p className="homeheadings_1" >Kitchen Appliances</p>
      <div className="slider-container">
        <Slider {...settings1}>
          {
            kitchenappliances.map((product) => {
              return <Productcard product={product} />
            })
          }
        </Slider>
      </div>

      <p className="homeheadings">Laptops</p>
      <div className="homestaticimagedeals">
        {laptopimages.map((image, index) => (
          <img src={image} alt={`Image ${index + 1}`} className="homeimages" onClick={() => laptopimagesclick()} />
        ))}
      </div>

      <p className="homeheadings_1">Deals On Laptops</p>
      <div className="slider-container">
        <Slider {...settings1} style={{ marginTop: "2rem" }}>
          {
            laptops.map((product) => {
              return <Productcard product={product} />
            })
          }
        </Slider>
      </div>

      <p className="homeheadings">Televisions</p>
      <div className="homestaticimagedeals">
        {tvs.map((image, index) => (
          <img src={image} alt={`Image ${index + 1}`} className="homeimages" onClick={() => tvsimagesclick()} />
        ))}
      </div>
      <div className="slider-container">
        <Slider {...settings1}>
          {
            television.map((product) => {
              return <Productcard product={product} />
            })
          }
        </Slider>
      </div>

      <p className="homeheadings">Air Conditioners</p>
      <div className="homestaticimagedeals">
        {airconditioners.map((image, index) => (
          <img src={image} alt={`Image ${index + 1}`} className="homeimages" onClick={() => airconditionersimagesclick()} />
        ))}
      </div>
      <div className="slider-container">
        <Slider {...settings1}>
          {
            ac.map((product) => {
              return <Productcard product={product} />
            })
          }
        </Slider>
      </div>

      <p className="homeheadings_1">Tablets</p>
      <div className="slider-container">
        <Slider {...settings1}>
          {
            tablet.map((product) => {
              return <Productcard product={product} />
            })
          }
        </Slider>
      </div>

      <p className="homeheadings">Refrigerators</p>
      <div className="homestaticimagedeals">
        {refrigerators.map((image, index) => (
          <img src={image} alt={`Image ${index + 1}`} className="homeimages" onClick={() => refrigeratorsimagesclick()} />
        ))}
      </div>
      <div className="slider-container">
        <Slider {...settings1}>
          {
            refrigerator.map((product) => {
              return <Productcard product={product} />
            })
          }
        </Slider>
      </div>

      <p className="homeheadings">Washing Machines</p>
      <div className="homestaticimagedeals">
        {washingmachines.map((image, index) => (
          <img src={image} alt={`Image ${index + 1}`} className="homeimages" onClick={() => washingimagesclick()} />
        ))}
      </div>
      <div className="slider-container">
        <Slider {...settings1}>
          {
            washingMachine.map((product) => {
              return <Productcard product={product} />
            })
          }
        </Slider>
      </div>

      <p className="homeheadings_1">Health</p>
      <div className="slider-container">

        <Slider {...settings1}>
          {
            health.map((product) => {
              return <Productcard product={product} />
            })
          }
        </Slider>
      </div>

      <p className="homeheadings_1">Travel</p>
      <div className="slider-container">
        <Slider {...settings1}>
          {
            travel.map((product) => {
              return <Productcard product={product} />
            })
          }
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
