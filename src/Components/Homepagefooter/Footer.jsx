import React from "react";
import "./Footer.css";
import isolationlogo from "../../Assets/Isolation_Mode.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-main-content">
        <div className="footer-content-1">
          <img src={isolationlogo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Pulvinar nisi dolor pretium
            id dapibus faucibus faucibus habitasse augue. Dictum vitae non in
            elementum elit egestas nisl lorem facilisi.
          </p>
        </div>
        <div className="footer-content-2">
          <h1>QUICK LINKS</h1>
          <a href="https://docs.google.com/document/d/17aaym7E66rYrBN_fXYhuc41j0Gj4HXTt-IF3eMomhZQ/edit?usp=sharing">
            {" "}
            <h2>privacy and policy </h2>
          </a>
          <a href="https://docs.google.com/document/d/15hPPYgBp7aB3TnJ2RHgAfrYLtVMLGa0ih5ghyantVNo/edit?usp=sharingL">
            {" "}
            <h2> terms and condition </h2>
          </a>
          <a href="https://docs.google.com/document/d/1HtOeVq4ER9Ae-YkMWmFp1rOzreBmPVTyvTUyvJ_J6GA/edit?usp=sharing">
            {" "}
            <h2>cancellation and refund </h2>
          </a>

          <a href="https://docs.google.com/document/d/1Q_aKnEt-Ml1piF0iwgkmNuVRvD9kU47ngh2YZcy0zaY/edit?usp=sharing">
            {" "}
            <h2> shipping and delivery</h2>
          </a>
        </div>
        <div className="footer-content-2">
          <h1>Contact us</h1>
         
            <h2> uslotedu@gmail.com</h2>
         
          
            <h2>  +91 8086 480 470 </h2>
        
          
            
        </div>
      </div>
      <div className="footer-line"></div>
    </div>
  );
};

export default Footer;
