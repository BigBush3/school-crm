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
              "https://static.tildacdn.com/tild3435-6463-4436-a637-393566323462/Logo_purple_eng.png"
            }
          />
          <div
            className={styles.title}
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            Log Into Your Account
          </div>
          <TextField
            className={[styles.itemBlock, styles.emailInput]}
            variant="filled"
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
          />
          <FormControl
            style={{ marginTop: "10px", marginBottom: "10px" }}
            className={styles.passInput}
            variant="filled"
          >
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button
            className={[styles.buttonSingUp, styles.itemBlock]}
            variant="contained"
            disableElevation
            style={{
              background: "#302a42",
              textTransform: "capitalize",
            }}
          >
            Sing Up
          </Button>
          <Link href="/reset">
            <Button
              className={styles.buttonForgot}
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                color: "#302a42",
                textTransform: "capitalize",
              }}
            >
              Forgot password?
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
