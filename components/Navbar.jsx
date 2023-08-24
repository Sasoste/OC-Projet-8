import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useState } from "react";


function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    if (window.innerWidth <= 768) {
      setIsNavOpen(!isNavOpen);
    }
  };

  return (
    <nav className={styles.navbar}>

      {isNavOpen ? (
        <button className={styles.closing} onClick={toggleNav}>
          <MdClose />
        </button>
      ) : (
        <button className={styles.menuBurger} onClick={toggleNav}>
          <HiMenu />
        </button>
      )}
      <ul className={`${styles.navList} ${isNavOpen ? styles.open : ''}`}>
        <li>
          <Link href="/#home" onClick={toggleNav}>Accueil</Link>
        </li>
        <li>
          <Link href="/#about" onClick={toggleNav}>À propos</Link>
        </li>
        <li>
          <Link href="/#skills" onClick={toggleNav}>Compétences</Link>
        </li>
        <li>
          <Link href="/#project" onClick={toggleNav}>Projets</Link>
        </li>
        <li>
          <Link href="/#contact" onClick={toggleNav}>Contact</Link>
        </li>
      </ul>
      {isNavOpen && <div className={styles.overlay} onClick={toggleNav}></div>}
    </nav>
  );
}

export default Navbar;
