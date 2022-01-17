import { Button, TextField } from "@mui/material";
import Link from "next/link";
import styles from "../styles/Forgot.module.css";

export default function Reset() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.block}>
          <div className={styles.title}>Password Reset</div>
          <div className={styles.subtitle}>
            To reset your password, enter the email address that you&apos;ve used to
            sign up
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
            sx={{ width: "30ch" }}
          >
            Reset Password
          </Button>
          <Link href="/login">
            <Button className={styles.buttonLogin}>Log in</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
