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
          <div className={styles.title}>Log Into Your Account</div>
          <TextField
            className={[styles.itemBlock, styles.emailInput]}
            sx={{ width: "30ch" }}
            variant="filled"
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
          />
          <FormControl
            className={styles.passInput}
            sx={{ width: "30ch" }}
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
            sx={{ width: "12ch" }}
          >
            Sing Up
          </Button>
          <Link href="/reset">
            <Button className={styles.buttonForgot}>Forgot password?</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}