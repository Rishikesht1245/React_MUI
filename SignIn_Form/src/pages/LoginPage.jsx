import React, { useState } from "react";
import {
  Button,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Formik, Form } from "formik";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import { useTheme } from "@mui/material/styles";
import { loginValidation } from "../schema/loginValidation.js";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();

  //   function for show and hide password
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    // stack is alternative for flex box
    <Stack
      style={{
        height: "100vh",
        backgroundColor: "rgb(0,37,71)",
      }}
    >
      {/* paper can be used as div (box) */}
      <Paper
        sx={{
          maxWidth: "475px",
          width: "90vw",
          margin: "auto",
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidation}
          onSubmit={(formData, { setSubmitting }) => {
            setSubmitting(true);
            console.log(formData);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: theme.spacing(4),
                padding: theme.spacing(6),
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center",
                  marginBottom: "10px",
                  fontWeight: "bold",
                  color: "rgb(105,105,105)",
                }}
              >
                WELCOME USER
              </Typography>
              <Field
                type="email"
                name="email"
                as={TextField}
                label="Email*"
                variant="outlined"
                id="email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <AccountCircle />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={Boolean(errors.email) && Boolean(touched.email)}
                helperText={Boolean(touched.email) && errors.email}
              />
              {/* inside the Field Tag we can use MUI Components using as keyword
              and use all the props of MUI within the Field Component */}
              <Field
                name="password"
                type={showPassword ? "text" : "password"}
                as={TextField}
                label="Password*"
                variant="outlined"
                fullWidth
                id="password"
                //     inside inputprops we can provide Adorment which simply means before and after in CSS
                InputProps={{
                  //after at the end
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                  // before - beginning
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <LockIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                //     error and helperText is provided by MUI TextField and we can
                //     use it for making the input red and showing the errors provided by formik
                error={Boolean(errors.password) && Boolean(touched.password)}
                helperText={Boolean(touched.password) && errors.password}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: "rgb(0,37,71)" }}
              >
                {isSubmitting ? "Please wait..." : "Sign In"}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Stack>
  );
};

export default LoginPage;
