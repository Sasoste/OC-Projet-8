import styles from "../styles/About.module.scss";
import Head from "next/head";


function About() {
  return (
    <div id="about" className={`${styles.container} section`}>
      <section className={styles.about}>
        <p className={styles.accroche}>À Propos</p>
        <h2>
          Qui je suis 
        </h2>
        <p>
          Je suis un développeur fullstack en formation. <br />
          Je viens de commencer le développement web, en ayant une expérience passée avec Java. <br />
          Je suis passionné de sport, développement personnel et finance, j'aime beaucoup apprendre de nouvelles choses. <br />
          <br />
          Suite à l'essor des nouvelles technologies, j'ai voulu apprendre le développement web.<br />
          J'ai donc suivi le parcours de développeur web d'OpenClassroom et voila le résultat de cette formation !<br />
        
        </p>
      </section>
    </div>
  );
}

export default About;