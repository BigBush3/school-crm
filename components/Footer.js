import styles from "../styles/Footer.module.css";
import IconButton from "@mui/material/IconButton";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.blockRow}>
          <div className={styles.blockElementIp}>
            <div>ИП Маринов Д.В.</div>
            <div>ИНН/ОГРНИП</div>
            <div>773271420181/30877463520017</div>
          </div>
          <div className={styles.blockElementLogo}>
            <div>
              <a href="#" className={styles.title}>
                © LAKMUS SCHOOL
              </a>
              <div className={styles.subtitle}>BE OUR FRIEND</div>
              <div className={styles.iconBlock}>
                <IconButton
                  className={styles.iconButtonTelegram}
                  aria-label="telegram"
                  style={{ background: "white", marginTop: "2px" }}
                >
                  <TelegramIcon />
                </IconButton>
                <IconButton
                  className={styles.iconButtonInstagram}
                  aria-label="instagram"
                  style={{
                    background: "white",
                    marginTop: "2px",
                    marginLeft: "10px",
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  className={styles.iconButtonYoutube}
                  aria-label="youtube"
                  style={{
                    background: "white",
                    marginTop: "2px",
                    marginLeft: "10px",
                  }}
                >
                  <YouTubeIcon />
                </IconButton>
              </div>
            </div>
          </div>
          <div className={styles.blockElementRules}>
            <div>
              <a href="#">
                Публичная оферта <span className={styles.spanBlack}>| </span>
              </a>
              <a href="#">Правила Школы</a>
              <br />
              <a href="#">Политика безопасности</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
