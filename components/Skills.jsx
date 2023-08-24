import styles from "../styles/Skills.module.scss";
import Card from "./Card";
import {
  FaReact,
  FaGitAlt,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";
import Head from "next/head";

function Skills() {
  const handleCardClick = (cardName) => {};
  return (
    <div id="skills" className={`${styles.skills} section`}>
      <h2>Mes compétences</h2>
      <div className={styles.icones}>
        <Card
          icon={FaHtml5}
          title="HTML5"
          name="html"
          onCardClick={handleCardClick}
        />
        <Card
          icon={FaCss3Alt}
          title="CSS3"
          name="css"
          onCardClick={handleCardClick}
        />
        <Card
          icon={FaJsSquare}
          title="JavaScript"
          name="js"
          onCardClick={handleCardClick}
        />
        <Card
          icon={FaGitAlt}
          title="Git"
          name="git"
          onCardClick={handleCardClick}
        />
        <Card
          icon={FaReact}
          title="React"
          name="react"
          onCardClick={handleCardClick}
        />
        <Card
          icon={FaNodeJs}
          title="Node.js"
          name="node"
          onCardClick={handleCardClick}
        />
      </div>
    </div>
  );
}

export default Skills;
