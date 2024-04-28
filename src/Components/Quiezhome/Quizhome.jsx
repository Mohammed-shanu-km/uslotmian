import React from "react";
import "./Quizhome.css";
import power from "../../Assets/Group 1.svg";
import { IoCloseOutline } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";
import usloticon from "../../Assets/Isolation_Mode.svg";
import { Link } from "react-router-dom";

const Quizhome = () => {
  return (
    <div className="quizhero-main">
      <div className="hero-content-section">
        <div className="hero-contents">
          <div className="close-button">
            <btutton className="close-btn">
              <IoCloseOutline style={{ fontSize: "30px" }} />
              close
            </btutton>
          </div>{" "}
          *
          <div className="power">
            <img src={power} alt="" />
            <h2>Powere by AI</h2>
          </div>
          <h1>
            The right <span className="heding-span">choice </span>
            {/* <br /> */}
            can take <span className="heding-span">you </span>
            {/* <br /> */}
            long way.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Sit
             molestie vel arcu urna. Urna commodo sed amet
             arcu lacus urna integer.
          </p>
        </div>
        <div className="lets-start-button">
        <Link to={"/rough"}>
          <button>
            Let's Start <IoMdArrowForward />
          </button>
          </Link>
        </div>
      </div>
      <div className="hero-image-section">
        <img className="u-icon" src={usloticon} alt="" />
      </div>
    </div>
  );
};

export default Quizhome;
