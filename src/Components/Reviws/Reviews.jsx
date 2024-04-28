import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import stars from "../../Assets/stars.svg";
import quote from "../../Assets/“.svg";
import "./Reviews.css";
import girlimage from "../../Assets/girlsimage.svg";

import { reviewsData } from "../../utils/Data";
const Reviews = () => {
  return (
    <div className="">
      <div className="slider-container">
        <h4 className="silder-head">Happy Customers Comments</h4>
        <p className="testimonial-para">
          Discover the joy our customers are experiencing with our AI-driven
          career guidance. Read their uplifting stories below!
        </p>
      </div>
      <div>
        <Swiper
          slidesPerView={2.75}
          spaceBetween={30}
          centeredSlides={true}
          breakpoints={{
            0: {
              slidesPerView: 1.25,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2.25,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2.75,
              spaceBetween: 30,
            },
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {reviewsData.map((data) => (
            <SwiperSlide>
              <div className="reviwe-slider-container">
                <div className="reviwe-slider-main-box">
                  <div className="slider-image-identification">
                    <img src={girlimage} alt="" />
                    <div className="slider-image-identificaton-content">
                      <h2>Wandihna Ara</h2>
                      <h3>Customers</h3>
                    </div>
                  </div>
                  <img className="qute" src={quote} alt="" />
                  <p className="slider-paragraph">
                    “What a joy it is to do business with a company that truly
                    values its customers. The level of attention and care I
                    received throughout my interaction with this team made all
                    the difference. Highly recommended!"
                  </p>
                  <div className="rating">
                    <img src={stars} alt="" />
                    <h2>4.8/5</h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
