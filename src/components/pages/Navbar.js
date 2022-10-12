import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Customers from "./Customers";
import Home from "./Home";
import MengaYozish from "./MengaYozish";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Error from "./Error";

const Navbar = () => {
  const [btn, setBtn] = useState(false);
  const Funk = (boolean) => {
    setBtn(boolean);
  };
  return (
    <>
      <Router>
        <nav className="nav_bar df aic jcsb">
          <div className="logo" onClick={() => setBtn(false)}>
            <NavLink to="/">
              B. Sobitxanov<span>.</span>
            </NavLink>
          </div>
          <ul className={btn ? "nav_item activ" : "nav_item"}>
            <li className="nav_link">
              <NavLink
                to="/"
                onClick={() => Funk(false, "about")}
                className="nav_link_a"
                activclassname="selected"
              >
                About
              </NavLink>
            </li>
            <li className="nav_link">
              <NavLink
                to="/service"
                onClick={() => Funk(false, "texnologiya")}
                className="nav_link_a"
                activclassname="selected"
              >
                Texnologiya
              </NavLink>
            </li>
            <li className="nav_link">
              <NavLink
                to="/portfolio"
                onClick={() => Funk(false, "portfolio")}
                className="nav_link_a"
                activclassname="selected"
              >
                Portfolio
              </NavLink>
            </li>
            {/* <li onClick={() => setBtn(false)} className="nav_link">
              <NavLink" to="/customers" className='nav_link_a' activclassname='selected'>
                Team
              </NavLink>
            </li> */}
            <li className="nav_link">
              <NavLink
                to="/mengayozish"
                onClick={() => Funk(false, "contact")}
                className="nav_link_a"
                activclassname="selected"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div
            className={btn ? "nav_btn activ" : "nav_btn"}
            onClick={() => setBtn(!btn)}
          >
            <span className="span_nav"></span>
            <span className="span_nav"></span>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/mengayozish/" element={<MengaYozish />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
};

export default Navbar;
