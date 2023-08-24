import styles from "../styles/Project.module.scss";
import ProjectCard from "./ProjectCard";
import {
  FaReact,
  FaGitAlt,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaSass,
} from "react-icons/fa";

function Project() {
  return (
    <div id="project" className={`${styles.projectsPage} section`}>
      <h2>Mes Projets</h2>
      <div className={styles.projectContainer}>
        <ProjectCard
          url="https://sasoste.github.io/OC-Projet-2/"
          imageSrc="/Booki.png"
          title="Booki"
          description="Création d'une page web en HTML et CSS"
          icons={[FaHtml5, FaCss3Alt, FaGitAlt]}
        />
        <ProjectCard
          url="https://sasoste.github.io/OC-Projet-5/"
          imageSrc="/Nina.png"
          title="Nina"
          description="Amélioration des performances d'un site web"
          icons={[FaHtml5, FaJsSquare, FaGitAlt]}
        />
        <ProjectCard
          url="https://sasoste.github.io/OC-Projet-6/"
          imageSrc="/Kasa.png"
          title="Kasa"
          description="Création d'une application en ReactJS et Sass"
          icons={[FaReact, FaSass, FaGitAlt]}
        />
      </div>
    </div>
  );
}

export default Project;
