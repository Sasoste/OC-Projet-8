import CustomHead from '../components/Head';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Project from '../components/Project';
import ContactForm from '../components/Contact';
import '../styles/globals.scss';


function MyApp({ Component, pageProps }) {


    return (
        <div className="scrollContainer">
            <CustomHead />
            <Navbar />
            <Home className="section" /> 
            <About className="section" />   
            <Skills className="section" />
            <Project className="section" />
            <ContactForm className="section" />
        </div>
    );
}

export default MyApp;