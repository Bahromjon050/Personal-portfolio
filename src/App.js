import "./App.css";
import './components/style/Sass.css'
import Customers from "./components/pages/Customers";
import Home from "./components/pages/Home";
import MengaYozish from "./components/pages/MengaYozish";
import Portfolio from "./components/pages/Portfolio";
import Services from "./components/pages/Services";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import AOS from "aos";
AOS.init()

function App() {
  return (
    <>
      <Router>
        <nav className="nav_bar df aic jcsb">
          <div className="logo">
            <NavLink to="/">
              B. Sobitxanov<span>.</span>
            </NavLink>
          </div>
          <ul className="nav_item">
            <li className="nav_link ntch">
              <NavLink activclassname="selected" to="/">
                About
              </NavLink>
            </li>
            <li className="nav_link">
              <NavLink activclassname="selected" to="/service">
                Services
              </NavLink>
            </li>
            <li className="nav_link">
              <NavLink activclassname="selected" to="/portfolio">
                Portfolio
              </NavLink>
            </li>
            {/* <li className="nav_link">
              <NavLink activclassname="selected" to="/customers">
                Team
              </NavLink>
            </li> */}
            <li className="nav_link">
              <NavLink activclassname="selected" to="/mengayozish">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/mengayozish" element={<MengaYozish />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
