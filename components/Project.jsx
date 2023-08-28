import styles from "../styles/Project.module.scss";
import ProjectCard from "./ProjectCard";
import Carrousel from "./Carrousel";
import {
  FaReact,
  FaGitAlt,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaSass,
} from "react-icons/fa";

function Project() {
  const projects = [
    {
      url: "https://sasoste.github.io/OC-Projet-2/",
      imageSrc: "/Booki.webp",
      title: "Booki",
      description: "Création d'une page web en HTML et CSS",
      difficulty: "Difficulté: Découverte de CSS",
      solution: "Solution: Recherche d'explication sur Youtube",
      icons: [FaHtml5, FaCss3Alt, FaGitAlt],
    },
    {
      url: "https://sasoste.github.io/OC-Projet-5/",
      imageSrc: "/Nina.webp",
      title: "Nina",
      description: "Amélioration des performances d'un site web",
      difficulty: "Difficulté: Amélioration du SEO",
      solution: "Solution: Ajout des éléments un par un",
      icons: [FaHtml5, FaJsSquare, FaGitAlt],
    },
    {
      url: "https://sasoste.github.io/OC-Projet-6/",
      imageSrc: "/Kasa.webp",
      title: "Kasa",
      description: "Création d'une application en ReactJS et Sass",
      difficulty: "Difficulté: Gestion des dossiers et fichiers",
      solution: "Solution: Organisation par pairs",
      icons: [FaReact, FaSass, FaGitAlt],
    },
  ];
  return (
    <div id="project" className={`${styles.projectsPage} section`}>
      <div className={styles.projectContainer}>
        <h2>Mes Réalisations</h2>
        <Carrousel projects={projects} />
      </div>
    </div>
  );
}

export default Project;
