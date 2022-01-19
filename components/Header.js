import styles from "../styles/Header.module.css";
import IconButton from "@mui/material/IconButton";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

export default function Header() {
  return (
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
        <div className={styles.icons} style={{ marginTop: "18px" }}>
          <IconButton
            className={styles.iconButton}
            style={{ background: "#302a42", color: "#f8f9fd" }}
            aria-label="youtube"
          >
            <YouTubeIcon />
          </IconButton>
          <IconButton
            className={styles.iconButton}
            style={{ background: "#302a42", color: "#f8f9fd" }}
            aria-label="instagram"
          >
            <InstagramIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
