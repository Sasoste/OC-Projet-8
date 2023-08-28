import CustomHead from "../components/Head";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Project from "../components/Project";
import ContactForm from "../components/Contact";
import "../styles/globals.scss";

function MyApp() {
  return (
    <div className="scrollContainer">
      <CustomHead />
      <Navbar />
      <Home className="section" id="home" />
      {/* <About className="section" id="about" /> */}
      <Skills className="section" id="skills" />
      <Project className="section" id="project" />
      <ContactForm className="section" id="contact" />
    </div>
  );
}

export default MyApp;
