import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Header } from "./All";

const Services = () => {
  const arr = [
    {
      img: "./img/ser1.svg",
      name: "Service title",
      des: `Rutrum cursus varius ullamcorper venenatis faucibus lobortis
            turpis dignissim. Commodo pellentesque tristique aliquet turpis.
            Morbi risus imperdiet`,
    },
    {
      img: "./img/ser1.svg",
      name: "Service title",
      des: `Rutrum cursus varius ullamcorper venenatis faucibus lobortis
            turpis dignissim. Commodo pellentesque tristique aliquet turpis.
            Morbi risus imperdiet`,
    },
    {
      img: "./img/ser1.svg",
      name: "Service title",
      des: `Rutrum cursus varius ullamcorper venenatis faucibus lobortis
            turpis dignissim. Commodo pellentesque tristique aliquet turpis.
            Morbi risus imperdiet`,
    },
    {
      img: "./img/ser1.svg",
      name: "Service title",
      des: `Rutrum cursus varius ullamcorper venenatis faucibus lobortis
            turpis dignissim. Commodo pellentesque tristique aliquet turpis.
            Morbi risus imperdiet`,
    },
    {
      img: "./img/ser1.svg",
      name: "Service title",
      des: `Rutrum cursus varius ullamcorper venenatis faucibus lobortis
            turpis dignissim. Commodo pellentesque tristique aliquet turpis.
            Morbi risus imperdiet`,
    },
    {
      img: "./img/ser1.svg",
      name: "Service title",
      des: `Rutrum cursus varius ullamcorper venenatis faucibus lobortis
            turpis dignissim. Commodo pellentesque tristique aliquet turpis.
            Morbi risus imperdiet`,
    },
  ];
  const obj = {
    span: "xizmatlarim",
    name: "Mening",
    des: `Rutrum cursus varius ullamcorper venenatis faucibus lobortis
    turpis dignissim. Commodo pellentesque tristique aliquet    
    turpis. Morbi risus imperdiet`,
  };
  return (
    <>
      <section className="services all_padding">
        <Header data={obj} data-aos="fade-down" data-aos-duration="800"/>
        <div className="cards g-3" data-aos="fade-up" data-aos-duration="800">
          {arr.map((val, i) => (
            <div className="card df g-2" key={i}>
              <div className="card_img">
                <LazyLoadImage src={val.img} effect="blur" />
              </div>
              <div className="card_text">
                <h3 className="all_h3">{val.name}</h3>
                <p className="all_p mt-1">{val.des}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt_close"></div>
      </section>
    </>
  );
};

export default Services;
