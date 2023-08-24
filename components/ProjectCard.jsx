import Link from "next/link";
import Image from "next/image";
import styles from "../styles/ProjectCard.module.scss";

function ProjectCard({url, imageSrc, title, description, icons }) {
  return (
    <Link href={url} className={styles.cardLink}>
      <div className={styles.projectCard}>
        <div className={styles.projectImg}>
          <Image src={imageSrc} alt={title} layout="fill" objectFit="cover"/>
        </div>
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
