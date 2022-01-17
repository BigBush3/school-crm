import styles from "../styles/Header.module.css";
import IconButton from "@mui/material/IconButton";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

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
            <li>Courses</li>
            <li>Contact</li>
            <li>En</li>
            <li>Ru</li>
          </ul>
        </div>
        <div className={styles.icons} style="margin-top: 11px;">
          <IconButton className={styles.iconButton} aria-label="youtube">
            <YouTubeIcon />
          </IconButton>
          <IconButton className={styles.iconButton} aria-label="instagram">
            <InstagramIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
