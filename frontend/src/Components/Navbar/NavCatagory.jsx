import React from "react";
import Catagory from "./Catagory";
import { getWindowSize } from "./Navbar";
import { Link } from "react-router-dom";

const NavCatagory = ({ name, link, sub_section }) => {
  return (
    <>
      {getWindowSize().innerWidth >= 768 && (
        <div className="catagory">
          <span>{name}</span>
          <div className={sub_section.length > 0 ? "hover_dropdown" : ""}>
            {sub_section?.map((section, id) => {
              return (
                <div key={id} className="sub_section">
                  <div className="sub_section_heading">{section.name}</div>
                  <ul>
                    {section.items?.map((items, id) => {
                      return (
                        <li key={id}>
                          <Link to={items.link}>{items.name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {getWindowSize().innerWidth <= 768 && (
        <Catagory name={name} sub_section={sub_section} />
      )}
    </>
  );
};

export default NavCatagory;
