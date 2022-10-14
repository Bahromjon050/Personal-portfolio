import React from "react";

const Animation = () => {
  return (
    <>
      <div className="anim_body df aic jcc mt-7">
        <div className="card_anim">
          <div className="box">
            <h1 className="all_h3">Lorem, ipsum dolor.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              tempora.
            </p>
            <button className="btn">Read more</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Animation;

// .card_anim {
//     width: 300px;
//     padding: 50px 30px;
//     background: #383636;
//     position: relative;
//   }
//   .animates {
//     position: absolute;
//     overflow: hidden;
//     inset: 0;
//     /* background: #383636; */
//   }
//   .animates::before {
//     content: "";
//     top: 50%;
//     left: 50%;
//     width: 700px;
//     height: 120px;
//     background: linear-gradient(
//       transparent,
//       #45f3ff,
//       #45f3ff,
//       #45f3ff,
//       transparent
//     );
//     position: absolute;
//     transform: translate(-50%, -50%);
//     animation: anim1 4s linear infinite;
//   }
//   .animates::after {
//     content: "";
//     background: #383636;
//     position: absolute;
//   }