import Link from "next/link";
import logo from "../image/Logo.png";
import styles from "../styles/Header.module.css";

const Logo = () => {
  return (
    <div className={styles.headerLogo}>
      <Link href="/">
        <a className={styles.logo}>
          <img src={logo} />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
