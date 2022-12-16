import React from "react";

const BannerImage = ({ src }) => {
  return (
    <div className="banner_image">
      <img src={src} alt="banner image" />
    </div>
  );
};

export default BannerImage;
