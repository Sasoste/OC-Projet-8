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

  const handleNavigation = (e, target) => {
    e.preventDefault();
    const targetElement = document.getElementById(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    toggleNav();
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
      <ul className={`${styles.navList} ${isNavOpen ? styles.open : ""}`}>
        <li>
          <Link
            href="/#home"
            onClick={(e) => {
              toggleNav();
              handleNavigation(e, "home");
            }}
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            href="/#about"
            onClick={(e) => {
              toggleNav();
              handleNavigation(e, "about");
            }}
          >
            À propos
          </Link>
        </li>
        <li>
          <Link
            href="/#skills"
            onClick={(e) => {
              toggleNav();
              handleNavigation(e, "skills");
            }}
          >
            Compétences
          </Link>
        </li>
        <li>
          <Link
            href="/#project"
            onClick={(e) => {
              toggleNav();
              handleNavigation(e, "project");
            }}
          >
            Projets
          </Link>
        </li>
        <li>
          <Link
            href="/#contact"
            onClick={(e) => {
              toggleNav();
              handleNavigation(e, "contact");
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
      {isNavOpen && <div className={styles.overlay} onClick={toggleNav}></div>}
    </nav>
  );
}

export default Navbar;
