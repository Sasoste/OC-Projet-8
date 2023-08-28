import styles from "../styles/Carrousel.module.scss";
import ProjectCard from "./ProjectCard";

function Carrousel({ projects }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.carrousel}>
        {projects.map((project, index) => (
          <div key={index} className={styles.testCard}>
            <ProjectCard
              url={project.url}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
              difficulty={project.difficulty}
              solution={project.solution}
              icons={project.icons}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrousel;
