import styles from "../styles/Carrousel.module.scss";
import ProjectCard from "./ProjectCard";

function Carrousel({ projects }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.carrousel}>
        {projects.map((project, index) => (
          <div className={styles.testCard}>
            <ProjectCard
              key={index}
              url={project.url}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
              icons={project.icons}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrousel;
