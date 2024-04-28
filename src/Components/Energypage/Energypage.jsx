import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import "./Energypage.css";
import person2 from "../../Assets/Frame 583 (1).png";
import { FaArrowLeft } from "react-icons/fa";
import { resultdata } from "../../utils/Data";
import { CareerPAth } from "../CareerPath/CareerPAth";

const Energypage = () => {
  const [count, setCount] = useState(0);
  const [resultPage, setResultPage] = useState(false);

  const nextButton = () => {
    if (count < resultdata?.length - 1)
      setCount(count + 1);
    else
      setResultPage(true);
      
  };

  const backButton = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  console.log(count);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const length = resultdata?.length;

  return (
    <>
    <Layout>
      <div className="energy-main">
        <div className="energy-main-box">
          <div className="energy-image">
            <img src={resultdata[count]?.image}  alt="" />
          </div>
          <div className="energy-content">
            <div className="above-section">
              {count === 0 ? (
                <>
                  <h3 className="second-heading">{resultdata[count]?.secondheading}</h3>
                  <h4>{resultdata[count]?.title}</h4>
                  <h2 className="third-heading">{resultdata[count]?.thirdheading}</h2>
                </>
              ) : (
                <>
                  <h1>{resultdata[count]?.title}</h1>
                  <h2>52% Introverted</h2>
                  
                    <div className="percentege-box">
                      <div className="percentage-boxenergy-1"></div>
                      <div className="percentage-boxenergy-2"></div>
                    </div>
                  
                  
                    <div className="percentage-numaric">
                      <div className="numaric-first">
                        <p>48%</p>
                        <p>{resultdata[count]?.typecatagory[0]}</p>
                      </div>
                      <div className="numaric-second">
                        <p>52%</p>
                        <p>{resultdata[count]?.typecatagory[1]}</p>
                      </div>
                    </div>
                  
                </>
              )}
              
            </div>
            <div className="belowsection">
              <p>
                Lorem ipsum dolor sit amet consectetur. Pulvinar nisi dolor
                pretium id dapibus faucibus faucibus habitasse augue. Dictum
                vitae non in elementum elit egestas nisl lorem facilisi.
              </p>
              <div className="below-back-section">
                {count !== 0 && (
                  <button onClick={backButton} className="first-back">
                    <FaArrowLeft />
                    Back
                  </button>
                )}
                {(count !== length || count === 0) && (
                  <button onClick={nextButton} className={`first-next ${count === 0 ? 'centered-button' : ''}`}>
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
    {resultPage && <CareerPAth />}
    </>
  );
};

export default Energypage;
