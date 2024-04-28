import React from "react";
import "./Herosecond.css";
import person1 from "../../Assets/image 10 (1).svg";
import person2 from "../../Assets/image 10.svg";
import newlogo from "../../Assets/Isolation_Mode.svg";
import frame1 from "../../Assets/hi-welcome-meeting-shot-young-businessman-using-his-laptop-video-call 1.svg";
import frame2 from "../../Assets/image 10 (1).svg";
import newprofile from "../../Assets/Frame 579.png";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import logo from "../../Assets/power.svg";
import images from "../../Assets/Frame 1000004370.svg";
import images1 from "../../Assets/Frame 1000004371.svg";
import smallbox from "../../Assets/image 10 (2).svg";
import grand from "../../Assets/grand.svg";
import profile5 from "../../Assets/image 4.svg";
import boy from "../../Assets/1.svg";
import girl from "../../Assets/2.svg";
import Reviews from "../Reviws/Reviews";
import Footer from "../Homepagefooter/Footer";
const Herosecond = () => {
  return (
    <>
      <div className="hero-secon-main">
        <div className="hero-second-container">
          <div className="scen-main">
            <div className="hero-images-main">
              <div className="hero-image">
                <div className="hero-single">
                  <img src={person1} alt="" />
                </div>
                <div className="hero-single-2">
                  <img src={person2} alt="" />
                </div>
              </div>
              <h1 className="great">Great personalities to discover from</h1>
              <div className="second-image-section-with-heading">
                <div className="hero-single-second">
                  <img src={person1} alt="" />
                </div>

                <div className="hero-single-second-2">
                  <img src={person2} alt="" />
                </div>
              </div>
            </div>
            <div className="hero-second-last-image">
              <img src={person2} alt="" />
            </div>
          </div>
          <div className="hero-section-blue-box">
            <div className="herosecond-content-section">
              <img src={newlogo} alt="" />
              <h1>
                Answer me <br /> questions to know your personality
              </h1>
              <p>Subscribe to our newsletter to get the latest Metarik news</p>
              <div>
                <button>Start the test</button>
              </div>
            </div>
            <div className="herosecond-image-section">
              <div className="girl-iamge-1">
                <img src={frame1} alt="" />
                <div className="feedback">
                  <img className="feedimage"
                    style={{ width: "50px", height: "50px" }}
                    src={newprofile}
                    alt=""
                  />
                  <div>
                    <h1>Mathew Anderson</h1>
                    <p>Defender : ISFJ-A </p>
                  </div>
                </div>
              </div>

              <div className="girl-iamge-2">
                <img src={frame1} alt="" />
                <div className="feedback1">
                  <img className="feedimage"
                    style={{ width: "50px", height: "50px" }}
                    src={newprofile}
                    alt=""
                  />
                  <div>
                    <h1>Mathew Anderson</h1>
                    <p>Defender : ISFJ-A </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-thrid-section-container">
        <div className="hero-third-section-abouts">
          <div className="third-section-heading">
            <h1>Utilize Prepifyer to gain unparallele insight</h1>
          </div>
          <div className="third-section-para">
            <p>
              Lorem ipsum dolor sit amet consectetur. Bibendum rhoncus faucibus
              diam tortor sem risus consequat nunc. Nunc elit vitae justo vitae
              porta magnis. Risus porttitor imperdiet ac sit vel pretium cras
              diam. Turpis ante quis at sit egestas lacus a vulputate.
            </p>
            <div className="test-button">
              <button>
                Take the Test Now <HiOutlineArrowSmRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-fourth-section">
        <div className="coloumns-main">
          <div className="mobile-view">
          <div className="first-coloumn">
            <div className="fisrt-box">
              <div className="i-frame-box">
                <h1>
                  Find <br />
                  Your Potential
                </h1>

                <div className="frame">
                  <iframe
                    title="Embedded Page"
                    src="../../revies"
                    width="100%"
                    height="100%"
                    style={{ borderRadius: "10px 0px 0px 0px" }}
                  />
                </div>
              </div>
            </div>

            <div className="second-box">
              <h1>
                1300 +<br /> Users
              </h1>
              <p>Helped over 1300 students to reach their potential</p>
            </div>
          </div>
          <div className="second-coloumn">
            <div className="third-box">
              <img src={logo} alt="" />
              <h1>
                AI <br />
                Powered
              </h1>
            </div>
            <div className="fourth-box">
              <div className="forth-box-image-1">
                <img src={grand} alt="" />
                <div className="forth-absolute">
                  <img src={profile5} alt="" />
                  <div className="forth-feed">
                    <h2>Mathew Anderson</h2>
                    <p>Defender : ISFJ-A </p>
                  </div>
                </div>
              </div>
              <div className="forth-box-image-2">
                <img src={boy} alt="" />
                <div className="forth-absolute-2">
                  <img src={profile5} alt="" />
                  <div className="forth-feed-2">
                    <h2>Mathew Anderson</h2>
                    <p>Defender : ISFJ-A </p>
                  </div>
                </div>
              </div>
              <div className="forth-box-image-3">
                <img src={girl} alt="" />
                <div className="forth-absolute-3">
                  <img src={profile5} alt="" />
                  <div className="forth-feed-3">
                    <h2>Mathew Anderson</h2>
                    <p>Defender : ISFJ-A </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="third-coloumn">
            <div className="large-box">
              <h1>
                Your path to success more <br />
                clearer than ever
              </h1>
            </div>
            <div className="last-two">
              <div className="small-box-1">
                <div className="small-b1">
                  <div className="small-b2-images">
                    <img src={smallbox} alt="" />
                    <img className="slop" src={smallbox} alt="" />
                  </div>
                  <img src={smallbox} alt="" />
                  <h1 className="hea">
                    16 <span>x2</span>{" "}
                  </h1>
                  <h1 className="headd">Personality TraitsTo Discover</h1>
                </div>
              </div>
              <div className="small-box-2">
                <div className="small-b2">
                  <h1>World Wide Users</h1>

                  <img src={images} alt="" />
                  <img src={images1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Reviews />
      </div>
      <div className="footer-hero">
        <Footer />
      </div>
    </>
  );
};

export default Herosecond;
