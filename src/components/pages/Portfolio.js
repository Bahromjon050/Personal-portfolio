import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Header } from "./All";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useEffect } from "react";
import axios from "axios";

const Portfolio = () => {
  // const crud = [
  //   {
  //     name: "Amaliyot-Typescript",
  //     link: "https://tsx-crud.netlify.app/",
  //     aos: 150,
  //     src: "./img/port19.png",
  //     git: "https://github.com/Bahromjon050/Typescript-CRUD",
  //   },
  //   {
  //     name: "Amaliyot-Tic-react",
  //     link: "https://tic-tac-toe-050.netlify.app/",
  //     aos: 150,
  //     src: "./img/x-o1.jpg",
  //     git: "https://github.com/Bahromjon050/Tic-tac-toe",
  //   },
  //   {
  //     name: "Amaliyot-Tic-js",
  //     link: "https://x-o-050.netlify.app/",
  //     aos: 250,
  //     src: "./img/x-o2.jpg",
  //     git: "https://github.com/Bahromjon050/Amaliyot-js",
  //   },
  //   {
  //     name: "Amaliyot-toolkit",
  //     link: "https://redux-toolkit050.netlify.app/",
  //     aos: 100,
  //     src: "./img/toolkit.png",
  //     git: "https://github.com/Bahromjon050/redux-toolkit",
  //   },
  //   {
  //     name: "Admin",
  //     link: "https://admin050.netlify.app/",
  //     aos: 150,
  //     src: "./img/port1.png",
  //     git: "https://github.com/Bahromjon050/AdminSite",
  //   },
  //   {
  //     name: "DaCode",
  //     link: "http://react-portfolio-new.netlify.app/",
  //     aos: 250,
  //     src: "./img/port2.jpg",
  //     git: "https://github.com/Bahromjon050/DataCode",
  //   },
  //   {
  //     name: "Safari",
  //     link: "https://safari-pro-redux.netlify.app/",
  //     aos: 100,
  //     src: "./img/port4.png",
  //     git: "https://github.com/Bahromjon050/shopping-redux",
  //   },
  //   {
  //     name: "Sahovat",
  //     link: "https://sahovat-ziyotest.netlify.app/",
  //     aos: 150,
  //     src: "./img/port5.jpg",
  //     git: "https://github.com/Bahromjon050",
  //   },
  //   {
  //     name: "Shop-javaScript",
  //     link: "https://shop-js.netlify.app/",
  //     aos: 250,
  //     src: "./img/port6.jpg",
  //     git: "https://github.com/Bahromjon050/shop-js",
  //   },
  //   {
  //     name: "BrandName",
  //     link: "https://brand-name-468.netlify.app/",
  //     aos: 100,
  //     src: "./img/port7.jpg",
  //     git: "https://github.com/Bahromjon050/BrandName",
  //   },
  //   {
  //     name: "Musobaqa",
  //     link: "https://bellashuv.netlify.app",
  //     aos: 100,
  //     src: "./img/port8.jpg",
  //     git: "https://github.com/Bahromjon050/Bellashuv",
  //   },
  //   {
  //     name: "Student-CRUD",
  //     link: "https://bahromjon-crud.netlify.app",
  //     aos: 100,
  //     src: "./img/port9.jpg",
  //     git: "https://github.com/Bahromjon050/Crud-javaScript",
  //   },
  //   {
  //     name: "Redux-shop-amaliyot",
  //     link: "https://coral-women.netlify.app",
  //     aos: 100,
  //     src: "./img/port11.jpg",
  //     git: "https://github.com/Bahromjon050/redux-coral-women-shopping",
  //   },
  //   {
  //     name: "Amaliyot-tab.js",
  //     link: "https://loyiha-cards.netlify.app/",
  //     aos: 100,
  //     src: "./img/port12.jpg",
  //     git: "https://github.com/Bahromjon050/Tab",
  //   },
  //   {
  //     name: "TelegramX.javaScript",
  //     link: "https://telegram-x.netlify.app/",
  //     aos: 100,
  //     src: "./img/port10.jpg",
  //     git: "https://github.com/Bahromjon050/TelegramX",
  //   },
  //   {
  //     name: "TripGoal-animation",
  //     link: "https://bahrom-animations.netlify.app/",
  //     aos: 100,
  //     src: "./img/port14.jpg",
  //     git: "https://github.com/Bahromjon050/TripGoal",
  //   },
  //   {
  //     name: "Kofe-shop",
  //     link: "https://bahrom-shopping-site.netlify.app/",
  //     aos: 100,
  //     src: "./img/port15.jpg",
  //     git: "https://github.com/Bahromjon050/KofeSite",
  //   },
  //   {
  //     name: "Landing page",
  //     link: "https://bahromjonsobitxanov1.netlify.app/",
  //     aos: 100,
  //     src: "./img/port16.jpg",
  //     git: "https://github.com/Bahromjon050/Landing",
  //   },
  //   {
  //     name: "QR code",
  //     link: "https://link-qr.netlify.app",
  //     aos: 100,
  //     src: "./img/port3.png",
  //     git: "https://github.com/Bahromjon050/Qrcode",
  //   },
  //   {
  //     name: "Menu-pro",
  //     link: "https://menu-pro-050.netlify.app",
  //     aos: 100,
  //     src: "./img/port17.jpg",
  //     git: "https://github.com/Bahromjon050/shop-menu",
  //   },
  //   {
  //     name: "Menu-tab",
  //     link: "https://menu050.netlify.app",
  //     aos: 100,
  //     src: "./img/port18.jpg",
  //     git: "https://github.com/Bahromjon050",
  //   },
  // ];
  const [api, setApi] = useState([]);

  const obj = {
    span: `Portfolio { ${api.length} }`,
    name: "Mening",
    des: `
    Rutrum cursus varius ullamcorper venenatis faucibus lobortis
    turpis dignissim. Commodo pellentesque tristique aliquet    
    turpis. Morbi risus imperdiet`,
  };
  const [x, setX] = useState("");
  useEffect(() => {
    axios
      .get(
        // `https://personal-portfolio-050-default-rtdb.firebaseio.com/`
        `https://v1.nocodeapi.com/bahromjon/fbsdk/xVQeXsvrnzvVLzIK/firestore/allDocuments?collectionName=portfolio`
      )
      .then((res) => {
        if (res.status === 200) {
          setApi(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(api);
  return (
    <>
      <section className="services media_service all_padding">
        <Header data={obj} setX={setX} x={x} api={api} />
        <div
          className="cards_port df aic jcc fw g-3"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {x === "" ? (
            api.map((val, i) => (
              <div
                className="card_port"
                key={i}
                data-aos="zoom-in-up"
                // data-aos-delay={val.aos}
              >
                <LazyLoadImage
                  src={val._fieldsProto.photo.stringValue}
                  effect="blur"
                  className="card_port_lazy"
                  style={{ width: "363px", height: "264px" }}
                />
                <a
                  className="nomi all_h3"
                  style={{ color: "#be7b00", fontWeight: "900" }}
                >
                  {val._fieldsProto.name.stringValue}
                </a>
                <div className="card_port_hover">
                  <div className="images">
                    <a href={val._fieldsProto.link.stringValue} target="blank">
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
                    <a href={val._fieldsProto.git.stringValue} target="blank">
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
          ) : api.filter((item) => {
              return (
                item._fieldsProto.name.stringValue
                  .toLowerCase()
                  .indexOf(x.trim().toLowerCase()) !== -1
              );
            }).length > 0 ? (
            api
              .filter((item) => {
                return (
                  item._fieldsProto.name.stringValue
                    .toLowerCase()
                    .indexOf(x.trim().toLowerCase()) !== -1
                );
              })
              .map((val, i) => (
                <div
                  className="card_port"
                  key={i}
                  data-aos="zoom-in-up"
                  // data-aos-delay={val.aos}
                >
                  <LazyLoadImage
                    src={val._fieldsProto.photo.stringValue}
                    effect="blur"
                    className="card_port_lazy"
                    style={{ width: "363px", height: "264px" }}
                  />
                  <a
                    className="nomi all_h3"
                    style={{ color: "#be7b00", fontWeight: "900" }}
                  >
                    {val._fieldsProto.name.stringValue}
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
                      <a href={val.git} target="blank">
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
