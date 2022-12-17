import React, { useEffect } from "react";
import "../../Styles/Navbar/navbar.scss";
import { navCatagories } from "./navCatagories";
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
} from "react-icons/md";
import NavCatagory from "./NavCatagory";
import { useState } from "react";

export function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());
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
          <input type="text" placeholder="Search Products" />
        </div>
        <div className="brand_logo_box">
          <img
            src="https://cdn02.nnnow.com/web-images/master/navtree_metaData/59b2425ae4b0d70964ee66e0/1505806763887/12NNNOWLOGODESKTOP.png"
            alt="brand logo"
          />
        </div>
        <div className="cart_wishlist_wrapper">
          <div>
            <AiOutlineHeart />
          </div>
          <span className="header_saparator">|</span>
          <div>
            <MdOutlineShoppingBag />
          </div>
          <span className="header_saparator">|</span>
          <div>
            <AiOutlineUser />
            <span>Login</span>
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
