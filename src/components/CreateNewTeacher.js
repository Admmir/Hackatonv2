import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRef } from "react";
import "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { createDoc2 } from "./NavBar";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://hackathon.stemhub.ba/">
        ERROR 404
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function NewTeacher() {
  const [valueHolderName, setValueName] = useState()
  const [valueHolderEmail, setValueEmail] = useState()
  const [valueHolderPassword, setValuePassword] = useState()
  const [valueHolderPredmet, setValuePredmet] = useState()
  const [valueHolderPermisija, setValuePermisija] = useState()
  const [userAdded,setUserAdded] = useState(false)
  const onChangeHandler1 = (event) => {
    setValueName(event.target.value)
  
   }
   const onChangeHandler2 = (event) => {
    setValueEmail(event.target.value)
  
  }
  const onChangeHandler3 = (event) => {
    setValuePassword(event.target.value)
  
  }
  const onChangeHandler4 = (event) => {
    setValuePredmet(event.target.value)
  
  }
  const onChangeHandler5 = (event) => {
    setValuePermisija(event.target.value)
  
  }

  const imePrezimeRef = useRef("");
  const emailRef = useRef("");
  const permisijaRef = useRef("");
  const predmet1Ref = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let emailInput = emailRef.current.value;
    let passwordInput = passwordRef.current.value;

    console.log(passwordRef.current.value);

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyApi8lyZo32hpuecVE7PCXW7UgLBRTSEoI",
      {
        method: "POST",
        body: JSON.stringify({
          email: emailInput,
          password: passwordInput,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          console.log(res);
          console.log("succes");
          createDoc2(
            {
              Ime_Prezime: imePrezimeRef.current.value,
              Permisija: permisijaRef.current.value,
              Predmet: predmet1Ref.current.value,
              email: emailRef.current.value,
            },
            emailRef.current.value
          );
          setValueName("")
          setValueEmail("")
          setValuePassword("")
          setValuePermisija("")
          setValuePredmet("")
          setUserAdded(true)
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentification failed";
            console.log(data);
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Name"
                  label="Ime i Prezime"
                  inputRef={imePrezimeRef}
                  value={valueHolderName}
                  onChange={onChangeHandler1}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email Adresa"
                  name="email"
                  autoComplete="email"
                  inputRef={emailRef}
                  value={valueHolderEmail}
                  onChange={onChangeHandler2}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Lozinka"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  inputRef={passwordRef}
                  value={valueHolderPassword}
                  onChange={onChangeHandler3}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Permisija"
                  inputRef={permisijaRef}
                  value={valueHolderPermisija}
                  onChange={onChangeHandler5}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Predmet"
                  inputRef={predmet1Ref}
                  value={valueHolderPredmet}
                  onChange={onChangeHandler4}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            {userAdded === true && <p className="succes">Uspjesno</p>}
          </Box>
          
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
