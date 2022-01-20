import { Button, TextField } from "@mui/material";
import Link from "next/link";
import styles from "../styles/Reset.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Reset() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.block}>
          <div className={styles.title}>Password Reset</div>
          <div
            className={styles.subtitle}
            style={{ marginTop: "10px", marginBottom: "15px" }}
          >
            To reset your password, enter the email address that you&apos;ve
            used to sign up
          </div>
          <TextField
            className={styles.emailInput}
            variant="filled"
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
          />
          <Button
            className={[styles.buttonReset, styles.itemBlock]}
            variant="contained"
            disableElevation
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              background: "#302a42",
              textTransform: "capitalize",
            }}
          >
            Reset Password
          </Button>
          <Link href="/login">
            <Button
              style={{ color: "#302a42", textTransform: "capitalize" }}
              className={styles.buttonLogin}
            >
              Log in
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
