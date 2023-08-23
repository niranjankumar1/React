import React, { useState } from "react";
import "../styles/Navbar.css";
import { BsSliders, BsChevronDown } from "react-icons/bs"; //BsSliders2

const Navbar = () => {
  const [slider, setSlider] = useState(false);

  return (
    <div className="navbar">
      <div className="navbarButton">
        <button
          className="p-10 f-16 groupButton"
          onClick={() => setSlider(!slider)}
        >
          <BsSliders /> Display <BsChevronDown />
        </button>

        {slider && (
          <>
            <div className="dropDown">
              <div className="group">
                <span style={{ color: "grey" }}>Grouping</span>
                <select>
                  <option>Status</option>
                  <option>User</option>
                  <option>Priority</option>
                </select>
              </div>

              <div className="group">
                <span style={{ color: "grey" }}>Ordering</span>
                <select>
                  <option>Priority</option>
                  <option>Title</option>
                </select>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
