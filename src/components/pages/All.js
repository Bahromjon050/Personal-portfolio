import React from "react";

export const Header = ({ data, x, setX, api, loading }) => {
  return (
    <div className="media-df df jcsb">
      <header data-aos="fade-down" data-aos-duration="800">
        <h1 className="all_h1">
          {data.name}{" "}
          <span className="span_color positions">
            {data.span}
            {loading ? (
              <img src="./loading/load.svg" className="loading" alt="" />
            ) : null}
          </span>
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
            style={{
              width: "50px",
              padding: "14px 14px 14px 17px",
              borderRight: "0",
              borderRadius: "5px 0 0 5px",
            }}
            value={
              api?.filter((val) => {
                return (
                  val._fieldsProto.name.stringValue
                    .toLowerCase()
                    .indexOf(x.trim().toLowerCase()) !== -1
                );
              }).length
            }
            disabled
          />
          <input
            type="text"
            style={{ borderRadius: "0 5px 5px 0" }}
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
