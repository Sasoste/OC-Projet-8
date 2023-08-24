import styles from '../styles/Home.module.scss';
import Head from 'next/head'

function Home() {
  return (
    <div id="home" className={`${styles.container} section`}>
      <section className={styles.intro}>
        <p className={styles.accroche}>Créons votre site web ensemble</p>
        <h1>
          Bienvenue ! Je m'appelle <span className={styles.name}>David</span> et je suis développeur Fullstack Junior
        </h1>
        <p>
          Je suis un développeur fullstack, avec une préférence pour le développement front-end.
          <br />
          Je peux vous aider à construire le site que vous voulez ! 
        </p>
      </section>
    </div>
  );
}

export default Home