import Link from "next/link";
import styles from "../styles/ProjectCard.module.scss";

function ProjectCard({ url, imageSrc, title, description, icons }) {
  return (
    <Link href={url} className={styles.cardLink}>
      <div
        className={styles.projectCard}
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className={styles.cardOverlay}></div>
        <div className={styles.description}>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className={styles.icons}>
            {icons.map((Icon, index) => (
              <Icon key={index} size={50} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
