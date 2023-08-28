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
        <h1>
          Créons ensemble <span className={styles.name}>votre site web</span>
        </h1>
        <h2>
          Bienvenue ! Je suis David
          <br />
          développeur Fullstack Junior <br /> en formation avec OpenClassrooms
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
