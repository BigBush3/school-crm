import { Visibility, VisibilityOff } from "@mui/icons-material";
import { TextField, Button } from "@mui/material";
import Link from "next/link";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import * as React from "react";
import styles from "../styles/Login.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Login() {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.block}>
          <img
            className={styles.logo}
            src={
              "https://thumb.tildacdn.com/tild6138-6434-4534-b137-616165616662/-/resize/156x/-/format/webp/Logo_purple_eng.png"
            }
          />
          <div
            className={styles.title}
          >
            Log Into Your Account
          </div>
          <input placeholder={"Email"} className={styles.emailInput} />
          <input placeholder={"Password"} className={styles.passInput} />
          <button className={styles.buttonSingUp}>Sing Up</button>
          <Link href="/reset">
            <button className={styles.buttonForgot}>Forgot password?</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
