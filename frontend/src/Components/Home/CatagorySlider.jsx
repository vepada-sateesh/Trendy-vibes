import React from "react";

const CatagorySlider = ({ catagoryData }) => {
  return (
    <div className="catagory_slider">
      {catagoryData.map((item, id) => {
        return (
          <div key={id}>
            <img src={item.src} alt={item.name} />
            <span>{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CatagorySlider;
