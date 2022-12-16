import React, { useState } from "react";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

const ProductImageSlider = ({ showQty, image }) => {
  const [position, setPosition] = useState(0);
  return (
    <div className="product_image_slider">
      <div>
        <div
          style={{ transform: `translateX(${position}px)` }}
          className="product_image_wrapper"
        >
          {image.map((image, id) => {
            return (
              <img
                style={{ width: `calc(100% / ${showQty} - (10px))` }}
                key={id}
                src={image.src}
                alt="slider product"
              />
            );
          })}
        </div>
        <div className="image_slider_button">
          <AiFillCaretLeft onClick={() => setPosition((prev) => prev + 100)} />
          <AiFillCaretRight onClick={() => setPosition((prev) => prev - 100)} />
        </div>
      </div>
    </div>
  );
};

export default ProductImageSlider;
