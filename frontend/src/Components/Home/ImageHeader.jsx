import React from "react";

const ImageHeader = ({ src }) => {
  return (
    <div className="image_header">
      <img src={src} alt="image header" />
    </div>
  );
};

export default ImageHeader;
