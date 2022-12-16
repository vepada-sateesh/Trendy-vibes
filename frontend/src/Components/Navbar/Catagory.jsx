import React from "react";
import SubCatagory from "./SubCatagory";
import { useState } from "react";

const Catagory = ({ name, sub_section }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="catagory">
      <span onClick={() => setIsOpen(!isOpen)}>{name}</span>
      {sub_section.length > 0 &&
        isOpen &&
        sub_section.map((section, id) => {
          return <SubCatagory key={id} {...section} />;
        })}
    </div>
  );
};

export default Catagory;
