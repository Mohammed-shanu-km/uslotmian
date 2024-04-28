import React from "react";
import "./Resultpage.css";
import resultpageimge from "../../Assets/original.svg";

const Resultheader = () => {
  return (
   
    <div className="result-page-header-main-box">
      <div className="result-box-devider">
        <div className="result-box-content">
          <div className="result-box-head">
            <h1>Trait Name</h1>
            <p>ENFP-A</p>
          </div>
          <div className="result-box-content-2">
            <p>
              ENFPs are vibrant, imaginative, and compassionate individuals who
              bring boundless energy and creativity to everything they do.
            </p>
            <h3>Friendly | Energetic | Creative | Innovative</h3>
          </div>
        </div>
        <div className="result-box-image">
          <img src={resultpageimge} alt="" />
        </div>
      </div>
    </div>
    
  );
};

export default Resultheader;
