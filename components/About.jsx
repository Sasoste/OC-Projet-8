import styles from "../styles/About.module.scss";

function About() {
  return (
    <div id="about" className={`${styles.container} section`}>
      <section className={styles.about}>
        <h2>À Propos : Qui suis-je</h2>
        <p>
          Je suis un développeur fullstack en formation. <br />
          Je suis passionné de sport, développement personnel et finance,
          j&apos;apprécie apprendre de nouvelles choses. <br />
          Vous pouvez retrouver dans ce petit portfolio les résultats de ma
          formation.
        </p>
      </section>
    </div>
  );
}

export default About;
