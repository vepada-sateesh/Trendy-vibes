import React from "react";
import "../../Styles/Navbar/navbar.scss";
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
} from "react-icons/md";

const Navbar = () => {
  return (
    <div>
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
          <AiFillStar color="##ffc106" />
          <AiFillStar color="#ec008c" />
          <span>Extra 10% Off on a buy of ₹1999 | Code: ALL10</span>
          <AiFillStar color="#ec008c" />
          <AiFillStar color="##ffc106" />
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
        <div className="search_bar_box">
          <MdSearch />
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
    </div>
  );
};

export default Navbar;
