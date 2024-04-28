import React, { useState } from "react";
import "./Sidebar.css";
import profile from '../../Assets/sample charecter.svg'

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);

    const h1Elements = document.querySelectorAll(".sidebar-contents h1");
    const targetH1 = h1Elements[index];
    if (targetH1) {
      targetH1.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="side-bar-main">
        <div className="sidebar-scroller">
          <div className="scroller-pointer"></div>
        </div>
        <div className="sidebar-contents">
          <h1
            className={activeIndex === 0 ? "active" : ""}
            onClick={() => handleItemClick(0)}
          >
            Introduction
          </h1>
          <h1
            className={activeIndex === 1 ? "active" : ""}
            onClick={() => handleItemClick(1)}
          >
            Strength and Weakness
          </h1>
          <h1
            className={activeIndex === 2 ? "active" : ""}
            onClick={() => handleItemClick(2)}
          >
            Career path
          </h1>
          <h1
            className={activeIndex === 3 ? "active" : ""}
            onClick={() => handleItemClick(3)}
          >
            Workplace Habit
          </h1>
          <h1
            className={activeIndex === 4 ? "active" : ""}
            onClick={() => handleItemClick(4)}
          >
            Conclusion
          </h1>
          <h1
            className={activeIndex === 5 ? "active" : ""}
            onClick={() => handleItemClick(5)}
          >
            Celebrity
          </h1>
        </div>
      </div>
      <div className="progress-main">
        <div className="progress-image-palce">
          <h1>Your Results</h1>
          <img src={profile} alt=""/>
          <h3>Trait Name</h3>
          <p>ENFP-A</p>
        </div>
        <div className="results">

        </div>
      </div>
    </>
  );
};

export default Sidebar;
