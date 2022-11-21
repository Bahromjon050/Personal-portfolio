import "./App.css";
import "./components/style/Sass.scss";
import AOS from "aos";
import Navbar from "./components/pages/Navbar";
AOS.init();

function App() {
  return <Navbar />;
}

export default App;
