import React, { useEffect, useState } from "react";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

const ImageSlider = ({ sliding_images }) => {
  const [position, setPosition] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => prev - 100);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  if (position <= -sliding_images.length * 100) {
    setPosition(0);
  } else if (position > 0) {
    setPosition((sliding_images.length - 1) * -100);
  }
  return (
    <div className="image_slider">
      <div
        style={{ transform: `translateX(${position}%)` }}
        className="image_wrapper"
      >
        {sliding_images.map((src, id) => {
          return <img key={id} src={src} alt="img" />;
        })}
      </div>
      <div className="image_slider_button">
        <AiFillCaretLeft onClick={() => setPosition((prev) => prev + 100)} />
        <AiFillCaretRight onClick={() => setPosition((prev) => prev - 100)} />
      </div>
      <div className="image_slider_indicator">
        {sliding_images.map((_, id) => {
          return (
            <div
              className={
                position === id * -100 ? "active_image_slider_indicator" : ""
              }
              onClick={() => setPosition(id * -100)}
              key={id}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
