import styles from "../styles/Home.module.scss";

function Home() {
  function scrollToContact() {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div id="home" className={`${styles.container} section`}>
      <section className={styles.intro}>
        <h2>Créons ensemble votre site web</h2>
        <h1>
          Bienvenue ! Je m&apos;appelle{" "}
          <span className={styles.name}>David</span>
        </h1>
        <h2>
          Je suis développeur Fullstack Junior <br /> en formation avec
          OpenClassrooms
        </h2>
        <button
          className={styles.contactButton}
          onClick={() => scrollToContact()}
        >
          Contactez-moi !
        </button>
      </section>
    </div>
  );
}

export default Home;
