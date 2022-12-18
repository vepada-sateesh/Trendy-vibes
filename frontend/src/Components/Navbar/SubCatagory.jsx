import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SubCatagory = (section) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="sub_catagory" onClick={() => setIsOpen(!isOpen)}>
        {section.name}
      </div>
      {isOpen &&
        section?.items.map((items, id) => {
          return (
            <div className="sub_catagory_item" key={id}>
              <Link to={"/mens"}>{items.name}</Link>
            </div>
          );
        })}
    </>
  );
};

export default SubCatagory;
