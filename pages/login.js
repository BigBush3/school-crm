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
        <Header />
        <div className={styles.block}>
          <div className={styles.title}>Log Into Your Account</div>
          <TextField
            className={[styles.itemBlock, styles.emailInput]}
            sx={{ width: "315px" }}
            variant="filled"
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          />
          <FormControl
            className={styles.passInput}
            sx={{ width: "315px" }}
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
            sx={{ width: "315px" }}
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              background: "#5e5373",
            }}
          >
            Sing Up
          </Button>
          <Link href="/reset">
            <Button
              className={styles.buttonForgot}
              style={{ color: "#5e5373" }}
            >
              Forgot password?
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
}
