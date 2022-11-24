import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";
import Typed from "typed.js";

const Home = () => {
  const path = useNavigate();
  const el = React.useRef(null);
  const typed = React.useRef(null);
  React.useEffect(() => {
    const options = {
      strings: [
        "Veb dasturchi",
        "foydalanuvchi interfeysi",
        "Veb dasturchi",
        "foydalanuvchi interfeysi",
        "Veb dasturchi",
        "foydalanuvchi interfeysi",
        "Veb dasturchi",
        "foydalanuvchi interfeysi",
        "Veb dasturchi",
        "foydalanuvchi interfeysi",
        "Veb dasturchi",
        "foydalanuvchi interfeysi",
        "Veb dasturchi",
        "foydalanuvchi interfeysi",
        "Veb dasturchi",
        "foydalanuvchi interfeysi",
      ],
      typeSpeed: 50,
      backSpeed: 50,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <>
      <div className="margin-media"></div>
      <div className="web df aic jcsa fw mt-7 all_padding">
        <div className="web_col" data-aos="fade-left" data-aos-duration="800">
          <h1>
            Men <span className="span_color">Sobitxanov B.</span>
          </h1>
          <span style={{ whiteSpace: "pre" }} ref={el}></span>
          <p>
            Assalomu alaykum men Front-end dasturchiman. 2022-yil 25-yanvarda{" "}
            <br /> IT ni o'rgana boshladim va 1-avgustda tamomladim.
            <br /> Hozirda UITC kompaniyasida stajyor man.
          </p>
          <button
            className="btn skew-forward"
            onClick={() => path("/portfolio")}
          >
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
              src="./img/person.png"
              style={{ width: "450px", height: "450px", borderRadius: "50%" }}
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
