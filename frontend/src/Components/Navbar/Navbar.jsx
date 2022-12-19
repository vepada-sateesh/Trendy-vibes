import React, { useEffect } from "react";
import "../../Styles/Navbar/navbar.scss";
import { navCatagories } from "./navCatagories";
import { useNavigate } from "react-router-dom";
import { setSingleProductDetails } from "../../Redux/ProductReducer/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import Logo from "../../trendy_logo.jpg";
import {
  AiFillStar,
  AiOutlineDropbox,
  AiOutlineTrophy,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";
import {
  MdLocationOn,
  MdOutlinePhoneAndroid,
  MdSearch,
  MdOutlineShoppingBag,
  MdMenu,
  MdOutlineAdminPanelSettings,
} from "react-icons/md";
import NavCatagory from "./NavCatagory";
import { useState } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

export function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [isOpenUserOption, setIsOpenUserOption] = useState(false);
  const [searchQuary, setSearchQuary] = useState("");
  const [searchProducts, setSearchProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  // console.log("token:", token);
  if (token) {
    const user_information = jwt_decode(token, "secret");
    localStorage.setItem("user_info", JSON.stringify(user_information));
  }
  const local_storage_name = localStorage.getItem("user_name");

  let user_name = localStorage.getItem("user_info");
  user_name = JSON.parse(user_name);
  const handleUserLogOut = () => {
    localStorage.removeItem("user_info");
    localStorage.removeItem("token");
    alert("LogOut Successfully 😊✔");
  };

  // console.log(
  //   jwt_decode(
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2EwNjkwMjU1NDQ4OGUwM2YxZWJiZmIiLCJpYXQiOjE2NzE0NTcwMzJ9.QhEp_18cz8amr-dldIivtA-JBr8cURM0hloj508lqqs",
  //     "secret"
  //   )
  // );

  // const store = useSelector((store) => console.log(store));

  // console.log("searchProducts:", searchProducts);
  // console.log("searchProducts:", searchProducts.length);
  const handleRedirect = (params) => {
    dispatch(setSingleProductDetails(params));
    setSearchProducts([]);
    navigate("/ProductDetails");
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (searchQuary.length === 0) {
        setSearchProducts([]);
      } else {
        axios
          .get(
            `https://trendy-vibes-backend-production.up.railway.app/men/tshirt?search=${searchQuary}&limit=5`
          )
          .then((res) => setSearchProducts(res.data.data));
      }
    }, 1000);
    return () => {
      clearTimeout(debounce);
    };
  }, [searchQuary]);
  useEffect(() => {
    function handleWindowResize(e) {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <>
      <div className="upper_nav">
        <div>
          <div>
            <MdLocationOn />
            <span>Store Locator</span>
          </div>
          <span className="header_saparator">|</span>
          <div>
            <MdOutlinePhoneAndroid />
            <span>Get APP</span>
          </div>
        </div>
        <div className="text-section">
          <AiFillStar color="#704280" />
          <AiFillStar color="#ffc106" />
          <AiFillStar color="#ec008c" />
          <span>Extra 10% Off on a buy of ₹1999 | Code: ALL10</span>
          <AiFillStar color="#ec008c" />
          <AiFillStar color="#ffc106" />
          <AiFillStar color="#704280" />
        </div>
        <div>
          <div>
            <AiOutlineDropbox />
            <span>Track Order</span>
          </div>
          <span className="header_saparator">|</span>
          <div>
            <AiOutlineTrophy />
            <span>Loyalty</span>
          </div>
        </div>
      </div>
      <div className="features_nav">
        <MdMenu
          onClick={() => setMenuStatus(!menuStatus)}
          className="menu_button"
        />
        <div className="search_bar_box">
          <MdSearch className="search_icon" />
          <input
            onChange={(e) => setSearchQuary(e.target.value)}
            value={searchQuary}
            type="text"
            placeholder="Search Products"
          />
          <div className="serch_result_box">
            {searchProducts.length > 0 &&
              searchProducts.map((item, id) => {
                return (
                  <div
                    onClick={() => handleRedirect(item)}
                    key={id}
                    className="search_product_list"
                  >
                    <img src={item.frontimgsrc} />
                    <span>{item.description}</span>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="brand_logo_box">
          <Link to={"/"}>
            <img src={Logo} alt="brand logo" />
          </Link>
        </div>
        <div className="cart_wishlist_wrapper">
          <div>
            <AiOutlineHeart />
          </div>
          <span className="header_saparator">|</span>
          <div>
            <Link to={"/cart"}>
              <MdOutlineShoppingBag />
            </Link>
          </div>
          <span className="header_saparator">|</span>
          <div>
            <AiOutlineUser
              onClick={() => setIsOpenUserOption(!isOpenUserOption)}
            />
            {/* <span>Login</span> */}
          </div>
          <div
            className={`user_option ${
              isOpenUserOption ? "open_user_option" : ""
            }`}
          >
            {token && (
              <div onClick={() => setIsOpenUserOption(false)}>
                <Link to={"/userinfo"}>{local_storage_name}</Link>
              </div>
            )}
            {!token && (
              <div onClick={() => setIsOpenUserOption(false)}>
                <Link to={"/login"}>User LogIn</Link>
              </div>
            )}
            {!token && (
              <div onClick={() => setIsOpenUserOption(false)}>
                <Link to={"/signup"}>User SignUp</Link>
              </div>
            )}
            <div onClick={() => setIsOpenUserOption(false)}>
              <a
                href="https://trendy-vibes-backend-production.up.railway.app/admin/login"
                target={"_blank"}
              >
                Admin LogIn
              </a>
            </div>
            {token && (
              <div
                onClick={() => {
                  handleUserLogOut();
                  setIsOpenUserOption(false);
                }}
              >
                <Link to="#">LogOut</Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* //For large screen */}
      {windowSize.innerWidth >= 768 && (
        <div className="nav_catagories_wrapper">
          {navCatagories.map((catagory, id) => {
            return <NavCatagory key={id} {...catagory} />;
          })}
        </div>
      )}
      {/* For medium and small screen  */}
      {windowSize.innerWidth <= 768 && (
        <div className={`side_menu ${menuStatus ? "open_side_menu" : ""}`}>
          {navCatagories.map((catagory, id) => {
            return <NavCatagory key={id} {...catagory} />;
          })}
        </div>
      )}
    </>
  );
};

export default Navbar;
