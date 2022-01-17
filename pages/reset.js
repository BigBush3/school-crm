import { Button, TextField } from "@mui/material";
import Link from "next/link";
import styles from "../styles/Forgot.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Reset() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Header />
        <div className={styles.block}>
          <div className={styles.title}>Password Reset</div>
          <div
            className={styles.subtitle}
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            To reset your password, enter the email address that you&apos;ve
            used to sign up
          </div>
          <TextField
            className={styles.emailInput}
            sx={{ width: "30ch" }}
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
            sx={{ width: "33ch" }}
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              backgroundСolor: "#5e5373",
            }}
          >
            Reset Password
          </Button>
          <Link href="/login">
            <Button style={{ color: "#5e5373" }} className={styles.buttonLogin}>
              Log in
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
}
