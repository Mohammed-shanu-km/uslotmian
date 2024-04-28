import React from "react";
import "./Homehero.css";
import person1 from "../../Assets/Frame 579.png";
import person2 from "../../Assets/image 3.png";
import person3 from "../../Assets/image 4.png";
import { Link } from "react-router-dom";
import Lheader from "../Landingpageheader/Lheader";
import downwordarrow from "../../Assets/Frame 582.svg";
import Herosecond from "../Heropagesecond/Herosecond";

const HomeHero = () => {
  return (
    <>
      <div className="home-div">
        <Lheader />
        <div className="home-hero">
          <div className="home-hero-text">
            <div className="career-path-div">
              <p className="career-paragraph">
                200+ Careers path created and counting
              </p>
              <div className="career-path-imgdiv">
                <img src={person1} alt="" id="person1" />
                <img src={person2} alt="" id="person2" />
                <img src={person3} alt="" id="person3" />
              </div>
            </div>

            <div className="heading-p-div">
              <h1>Your Career, Your Way</h1>
              <p>
                Tailor your career journey with our AI insights, aligning your{" "}
                <br /> unique qualities for success.
              </p>
            </div>
            <div className="hero-section-buttons">
              <Link className="hero-text-btn" to={"/home"}>
                Take The Test
              </Link>
              <div className="down-arrow-div">
                <img className="down-word-arrow" src={downwordarrow} alt="" />
              </div>
            </div>
          </div>
       
        </div>
       <Herosecond/>
      </div>
    </>
  );
};

export default HomeHero;
