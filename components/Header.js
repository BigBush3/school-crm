import styles from "../styles/Header.module.css";
import IconButton from "@mui/material/IconButton";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div className={styles.hamburgerMenu}>
        <input
          id="menu__toggle"
          className={styles.menuToggle}
          type="checkbox"
        />
        <label className={styles.menuBtn} htmlFor="menu__toggle">
          <span></span>
        </label>
        <div className={styles.boxShadow}></div>
        <ul id="menuBox" className={styles.menuBox}>
          <li>
            <img
              className={styles.logoBurger}
              src={
                "https://static.tildacdn.com/tild3435-6463-4436-a637-393566323462/Logo_purple_eng.png"
              }
            />
          </li>
          <li>
            <a
              className={styles.menuItem}
              style={{ paddingLeft: "0" }}
              href="#"
            >
              ● Courses
            </a>
          </li>
          <li>
            <a
              className={styles.menuItem}
              style={{ paddingLeft: "0" }}
              href="#"
            >
              ● Contact
            </a>
          </li>
          <li>
            <a
              className={styles.menuItem}
              style={{ paddingLeft: "0" }}
              href="#"
            >
              En
            </a>
          </li>
          <li className={styles.list}>
            <a
              className={styles.menuItem}
              style={{ paddingLeft: "0" }}
              href="#"
            >
              Ru
            </a>
          </li>
          <li>
            <div className={styles.icons}>
              <IconButton
                className={styles.iconButton}
                style={{ width: "30px", heigth: "30px" }}
                aria-label="youtube"
              >
                <YouTubeIcon style={{ width: "20px", heigth: "20px" }} />
              </IconButton>
              <IconButton
                className={styles.iconButton}
                style={{ width: "30px", heigth: "30px" }}
                aria-label="instagram"
              >
                <InstagramIcon style={{ width: "20px", heigth: "20px" }} />
              </IconButton>
            </div>
          </li>
          <li>
            <a
              className={styles.menuItem}
              style={{ fontSize: "16px", paddingLeft: "0", paddingTop: "25px" }}
              href="#"
            >
              En Ru
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <div className={styles.main}>
          <div>
            <div className={styles.headerLogo}>
              <img
                className={styles.logo}
                src={
                  "https://static.tildacdn.com/tild3435-6463-4436-a637-393566323462/Logo_purple_eng.png"
                }
              />
            </div>
            <ul className={styles.titles}>
              <li>Members</li>
              <Link href="/courses">
                <li>Courses</li>
              </Link>
              <li>Contact</li>
              <li>En</li>
              <li>Ru</li>
            </ul>
          </div>
          <div className={styles.icons}>
            <IconButton className={styles.iconButton} aria-label="youtube">
              <YouTubeIcon className={styles.icon} />
            </IconButton>
            <IconButton className={styles.iconButton} aria-label="instagram">
              <InstagramIcon className={styles.icon} />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
