import { Button, TextField } from "@mui/material";
import Link from "next/link";
import styles from "../styles/Reset.module.css";

export default function Reset() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.block}>
          <div className={styles.title}>Password Reset</div>
          <div className={styles.subtitle}>
            To reset your password, enter the email address that you&apos;ve
            used to sign up
          </div>
          <input className={styles.emailInput} placeholder={"Email"} />
          <button className={styles.buttonReset}>Reset Password</button>
          <Link href="/login">
            <button className={styles.buttonLogin}>Log in</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
