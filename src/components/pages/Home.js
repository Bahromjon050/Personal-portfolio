import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const path = useNavigate();
  return (
    <>
      <div className="web df aic jcsa fw mt-7 all_padding">
        <div className="web_col" data-aos="fade-left" data-aos-duration="800">
          <h1>
            Men <span className="span_color">Sobitxanov B.</span>
          </h1>
          <h3>Veb dasturchi / foydalanuvchi interfeysi</h3>
          <p>
            Assalomu alaykum men Front-end dasturchiman. 2022-yil 25-yanvarda{" "}
            <br /> IT ni o'rgana boshladim va 1-avgustda tamomladim.
            <br /> Hozirda UITC kompaniyasida stajyor man.
          </p>
          <button className="btn" onClick={() => path("/portfolio")}>
            Qilgan ishlarim
          </button>
        </div>
        <div
          className="web_col_position"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div className="absolute images1">
            <LazyLoadImage src="./img/bg1.png" effect="blur" alt="Offline" />
          </div>
          <div className="images2">
            <LazyLoadImage
              src="./img/personal.jpg"
              style={{ width: "500px", height: "500px", borderRadius: "50%" }}
              effect="blur"
              alt="Offline"
            />
          </div>
          <div className="absolute images3">
            <LazyLoadImage src="./img/bg3.png" effect="blur" alt="Offline" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
