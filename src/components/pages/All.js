import React from "react";

export const Header = ({ data, x, setX }) => {
  return (
    <div className="media-df df jcsb">
      <header data-aos="fade-down" data-aos-duration="800">
        <h1 className="all_h1">
          {data.name} <span className="span_color">{data.span}</span>
        </h1>
        <p className="all_p">
          {data.des.slice(0, 62)} <br /> {data.des.slice(62, 122)} <br />{" "}
          {data.des.slice(123, data.des.length)}
        </p>
      </header>
      {data.name === "Mening" ? (
        <div className="search">
          <input
            type="text"
            value={x}
            placeholder="Search portfolio..."
            onChange={(e) => setX(e.target.value)}
          />
          {x ? <img src="./img/x.svg" onClick={() => setX("")} /> : null}
        </div>
      ) : null}
    </div>
  );
};
