import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Lheader.css";
import logo from "../../Assets/mainlogo.svg";
import { Button } from "primereact/button";
import { RiArrowRightLine } from "react-icons/ri";

function Lheader() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="header-main">
      <header>
        <img className="header-logo" src={logo} alt="" />
        <div className="navs">


        <nav ref={navRef}>
          <a href="/#">About Us</a>
          <a href="/#">Courses</a>
          <a href="/#">Contact</a>

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        </div>

        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>

        <Button className="header-login-link">
          Login/Signup <RiArrowRightLine />
        </Button>
      </header>
    </div>
  );
}

export default Lheader;
