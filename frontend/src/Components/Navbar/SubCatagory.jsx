import React from "react";
import { useState } from "react";

const SubCatagory = (section) => {
  console.log("section:", section);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}>{section.name}</div>
      {isOpen &&
        section?.items.map((items, id) => {
          <div key={id}>{items.name}</div>;
        })}
    </>
  );
};

export default SubCatagory;
