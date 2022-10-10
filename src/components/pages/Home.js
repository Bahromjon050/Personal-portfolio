import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Home = () => {
  return (
    <>
      <div className="web df aic jcsa fw mt-7 all_padding">
        <div className="web_col" data-aos="fade-left" data-aos-duration="800">
          <h1>
            Men <span className="span_color">Sobitxanov B.</span>
          </h1>
          <h3>Web Designer / UI Designer / Graphic designer</h3>
          <p>
            Rutrum cursus varius ullamcorper venenatis faucibus lobortis turpis{" "}
            <br /> dignissim. Commodo pellentesque tristique aliquet turpis.
            Morbi risus <br /> imperdiet
          </p>
          <button className="btn">Explore My Work</button>
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
            <LazyLoadImage src="./img/bg2.png" effect="blur" alt="Offline" />
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
