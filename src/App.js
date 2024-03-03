import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { BiHomeAlt } from "react-icons/bi";
import { BsFiles } from "react-icons/bs";
import { MdAccountCircle} from "react-icons/md";
import { Link } from "react-scroll";

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <div className="nav">
        <Link
          to="hero"
          activeClass="active_a"
          className="div"
          smooth
          spy
          duration={500}
        >
          <BiHomeAlt className="item" />
        </Link>
        <Link
          to="about"
          activeClass="active_a"
          className="div"
          smooth
          spy
          duration={500}
        >
          <MdAccountCircle className="item" />
        </Link>
        <Link
          to="portfolio"
          activeClass="active_a"
          className="div"
          smooth
          spy
          duration={500}
        >
          <BsFiles className="item" />
        </Link>
      </div>
    </div>
  );
}

export default App;
