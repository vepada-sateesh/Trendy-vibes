import React, { useState } from "react";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

const ProductImageSlider = ({ showQty, image }) => {
  const [position, setPosition] = useState(0);
  if (position < -(image.length - showQty) * (99 / showQty)) {
    setPosition(0);
  }
  if (position > 0) {
    setPosition(-(image.length - showQty) * (99 / showQty));
  }

  return (
    <div className="product_image_slider">
      <div>
        <div
          style={{ transform: `translateX(${position}%)` }}
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
          <AiFillCaretLeft
            onClick={() => setPosition((prev) => prev + 99 / showQty)}
          />
          <AiFillCaretRight
            onClick={() => setPosition((prev) => prev - 99 / showQty)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImageSlider;
