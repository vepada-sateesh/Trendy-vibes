import React from "react";

const Griditems = ({ image }) => {
  return (
    <div className="grid_items">
      {image.map((image, id) => {
        return (
          <div key={id}>
            <img src={image.src} alt="grid item image" />
          </div>
        );
      })}
    </div>
  );
};

export default Griditems;
