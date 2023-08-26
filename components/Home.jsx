import styles from "../styles/Home.module.scss";

function Home() {
  return (
    <div id="home" className={`${styles.container} section`}>
      <section className={styles.intro}>
        <h2>Créons votre site web ensemble</h2>
        <h1>
          Bienvenue ! Je m&apos;appelle{" "}
          <span className={styles.name}>David</span> et je suis développeur
          Fullstack Junior
        </h1>
      </section>
    </div>
  );
}

export default Home;
