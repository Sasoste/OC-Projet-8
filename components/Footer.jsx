import styles from "../styles/Footer.module.scss";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.icons}>
        <Link href="https://github.com/Sasoste">
          <FaGithub />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
