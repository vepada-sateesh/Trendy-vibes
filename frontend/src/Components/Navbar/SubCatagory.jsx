import React from "react";
import { useState } from "react";

const SubCatagory = (section) => {
  console.log("section:", section);
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
              {items.name}
            </div>
          );
        })}
    </>
  );
};

export default SubCatagory;
