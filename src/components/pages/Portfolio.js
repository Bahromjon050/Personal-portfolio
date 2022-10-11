import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Header } from "./All";
import "react-lazy-load-image-component/src/effects/blur.css";

const Portfolio = () => {
  const obj = {
    span: "Portfolio",
    name: "Mening",
    des: `
    Rutrum cursus varius ullamcorper venenatis faucibus lobortis
    turpis dignissim. Commodo pellentesque tristique aliquet    
    turpis. Morbi risus imperdiet`,
  };
  const crud = [
    {
      name: "Admin",
      link: "https://admin050.netlify.app/",
      aos: 150,
      src: "./img/port1.png",
      git: "",
    },
    {
      name: "DaCode",
      link: "http://react-portfolio-new.netlify.app/",
      aos: 250,
      src: "./img/port2.jpg",
      git: "",
    },
    {
      name: "Safari",
      link: "https://safari-pro-redux.netlify.app/",
      aos: 100,
      src: "./img/port4.png",
      git: "",
    },
    {
      name: "Sahovat",
      link: "https://sahovat-ziyotest.netlify.app/",
      aos: 150,
      src: "./img/port5.jpg",
      git: "",
    },
    {
      name: "Shop-javaScript",
      link: "https://shop-js.netlify.app/",
      aos: 250,
      src: "./img/port6.jpg",
      git: "",
    },
    {
      name: "BrandName",
      link: "https://brand-name-468.netlify.app/",
      aos: 100,
      src: "./img/port7.jpg",
      git: "",
    },
    {
      name: "Musobaqa",
      link: "https://bellashuv.netlify.app",
      aos: 100,
      src: "./img/port8.jpg",
      git: "",
    },
    {
      name: "Student-CRUD",
      link: "https://bahromjon-crud.netlify.app",
      aos: 100,
      src: "./img/port9.jpg",
      git: "",
    },
    {
      name: "Redux-shop-amaliyot",
      link: "https://coral-women.netlify.app",
      aos: 100,
      src: "./img/port11.jpg",
      git: "",
    },
    {
      name: "Amaliyot-tab.js",
      link: "https://loyiha-cards.netlify.app/",
      aos: 100,
      src: "./img/port12.jpg",
      git: "",
    },
    {
      name: "TelegramX.javaScript",
      link: "https://telegram-x.netlify.app/",
      aos: 100,
      src: "./img/port10.jpg",
      git: "",
    },
    {
      name: "TripGoal-animation",
      link: "https://bahrom-animations.netlify.app/",
      aos: 100,
      src: "./img/port14.jpg",
      git: "",
    },
    {
      name: "Kofe-shop",
      link: "https://bahrom-shopping-site.netlify.app/",
      aos: 100,
      src: "./img/port15.jpg",
      git: "",
    },
    {
      name: "Landing page",
      link: "https://bahromjonsobitxanov1.netlify.app/",
      aos: 100,
      src: "./img/port16.jpg",
      git: "",
    },
    {
      name: "QR code",
      link: "https://link-qr.netlify.app",
      aos: 100,
      src: "./img/port3.png",
      git: "",
    },
    {
      name: "Menu-pro",
      link: "https://menu-pro-050.netlify.app",
      aos: 100,
      src: "./img/port17.jpg",
      git: "",
    },
    {
      name: "Menu-tob",
      link: "https://menu050.netlify.app",
      aos: 100,
      src: "./img/port18.jpg",
      git: "",
    },
  ];
  const [x, setX] = useState("");
  return (
    <>
      <section className="services all_padding">
        <Header data={obj} setX={setX} x={x} />
        <div
          className="cards_port df aic jcc fw g-3"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {x === "" ? (
            crud.map((val, i) => (
              <div
                className="card_port"
                key={i}
                data-aos="zoom-in-up"
                data-aos-delay={val.aos}
              >
                <LazyLoadImage
                  src={val.src}
                  effect="blur"
                  style={{ width: "363px", height: "264px" }}
                />
                <a
                  className="nomi all_h3"
                  style={{ color: "#be7b00", fontWeight: "900" }}
                >
                  {val.name}
                </a>
                <div className="card_port_hover">
                  <div className="images">
                    <a href={val.link} target="blank">
                      <button>
                        <LazyLoadImage
                          src="./img/lupa1.svg"
                          style={{ width: "30px", height: "30px" }}
                          effect="blur"
                        />
                      </button>
                    </a>
                  </div>
                  <div className="images">
                    <a href={val.git}>
                      <button>
                        <LazyLoadImage
                          src="./img/github.svg"
                          style={{ width: "30px", height: "30px" }}
                          effect="blur"
                        />
                      </button>
                    </a>
                  </div>
                  {/* <a href="" target='blank' className="df fdc aic g-1">
                      <button>
                        <LazyLoadImage src="./img/lupacha.svg" effect="blur" />
                      </button>
                    </a> */}
                </div>
              </div>
            ))
          ) : crud.filter((item) => {
              return (
                item.name.toLowerCase().indexOf(x.trim().toLowerCase()) !== -1
              );
            }).length > 0 ? (
            crud
              .filter((item) => {
                return (
                  item.name.toLowerCase().indexOf(x.trim().toLowerCase()) !== -1
                );
              })
              .map((val, i) => (
                <div
                  className="card_port"
                  key={i}
                  data-aos="zoom-in-up"
                  data-aos-delay={val.aos}
                >
                  <LazyLoadImage
                    src={val.src}
                    effect="blur"
                    style={{ width: "363px", height: "264px" }}
                  />
                  <a
                    className="nomi all_h3"
                    style={{ color: "#be7b00", fontWeight: "900" }}
                  >
                    {val.name}
                  </a>
                  <div className="card_port_hover">
                    <div className="images">
                      <a href={val.link} target="blank">
                        <button>
                          <LazyLoadImage
                            src="./img/lupa1.svg"
                            style={{ width: "30px", height: "30px" }}
                            effect="blur"
                          />
                        </button>
                      </a>
                    </div>
                    <div className="images">
                      <a href={val.git}>
                        <button>
                          <LazyLoadImage
                            src="./img/github.svg"
                            style={{ width: "30px", height: "30px" }}
                            effect="blur"
                          />
                        </button>
                      </a>
                    </div>
                    {/* <a href="" target='blank' className="df fdc aic g-1">
                        <button>
                          <LazyLoadImage src="./img/lupacha.svg" effect="blur" />
                        </button>
                      </a> */}
                  </div>
                </div>
              ))
          ) : (
            <div
              className="df aic jcc fdc g-2 mt-5"
              style={{ cursor: "pointer" }}
              onClick={() => setX("")}
            >
              <LazyLoadImage
                src="./img/found2.svg"
                effect="blur"
                style={{ width: "50px", height: "50px" }}
              />
              <h3 className="all_h3">No found</h3>
            </div>
          )}
        </div>
      </section>
      <div className="mt_close"></div>
    </>
  );
};

export default Portfolio;
