import React, { useState } from "react";
import "../Styles/Home/home.scss";
import { getWindowSize } from "../Components/Navbar/Navbar";
import CatagorySlider from "../Components/Home/CatagorySlider";
import {
  catagoryData,
  sliding_images,
  coupon_bag,
  price_store_section,
} from "../Components/Home/homepage_data";
import BannerImage from "../Components/Home/BannerImage";
import { useEffect } from "react";
import ImageSlider from "../Components/Home/ImageSlider";
import ImageHeader from "../Components/Home/ImageHeader";

const Home = () => {
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
    <div>
      <CatagorySlider catagoryData={catagoryData} />
      <BannerImage
        src={
          windowSize.innerWidth >= 768
            ? "https://logan.nnnow.com/content/dam/nnnow-project/06-dec-2022/hp/1DEC22-Christmas-Advent-Calender-Strip-Desk-2x-re.jpg"
            : "https://logan.nnnow.com/content/dam/nnnow-project/06-dec-2022/hp/1DEC22-Christmas-Advent-Calender-Strip-MOB.jpg"
        }
      />
      <div className="sliding_offer_wrapper">
        <ImageSlider
          sliding_images={
            windowSize.innerWidth >= 768
              ? sliding_images.map((item) => item.large)
              : sliding_images.map((item) => item.small)
          }
        />
        <div className="quick_links_offer">
          <div className="offer_list">
            <h2>Quick Links</h2>
            <li>Arrow: Up to 60% Off</li>
            <li>Tommy Hilfiger: Up to 50% Off</li>
            <li>Calvin Klein: Up to 40% Off</li>
            <li>U.S. Polo Assn.: Up to 50% Off Womenswear</li>
          </div>
          <div className="offer_image">
            <img
              src="https://logan.nnnow.com/content/dam/nnnow-project/15-dec-2022/hp/16DEC2-FM-TOPSMALL.jpg"
              alt="offer_image"
            />
          </div>
        </div>
      </div>
      <ImageHeader
        src={
          "https://logan.nnnow.com/content/dam/nnnow-project/06-dec-2022/hp/headers/dsk/7DEC-HP-Headers-Dsk-01.gif"
        }
      />

      <div className="coupon_box">
        {coupon_bag.map((item, id) => {
          return (
            <div key={id}>
              <img src={item.src} alt="coupon item" />
            </div>
          );
        })}
      </div>

      <BannerImage
        src={
          "https://logan.nnnow.com/content/dam/nnnow-project/06-dec-2022/hp/NewArrivals-Strip-DSK.jpg"
        }
      />

      <ImageHeader
        src={
          "https://logan.nnnow.com/content/dam/nnnow-project/06-dec-2022/hp/headers/dsk/7DEC-HP-Headers-Dsk-02.gif"
        }
      />
      <div className="price_store">
        <CatagorySlider catagoryData={price_store_section} />
      </div>
    </div>
  );
};

export default Home;
