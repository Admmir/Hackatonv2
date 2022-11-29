import * as React from "react";
import { useState, useRef } from "react";
import { createDoc3 } from "./NavBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function CreateNews() {
  const titleValue = useRef("");
  const textValue = useRef("");
  const [isCreated, setIsCreated] = useState(false)

    const onClickResetInput = (event)=> {
        if (isCreated) {setIsCreated(false)}
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    if( textValue.current.value.length < 2 || titleValue.current.value.length < 2 ){
        alert("Naslov ili tekst nisu unešeni")
    }else{
        const novost = {
            description: textValue.current.value,
            title: titleValue.current.value
        }
        createDoc3(novost)
        titleValue.current.value = ""
        textValue.current.value = ""
        setIsCreated(true)
    }
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" width="1" sx={{}}>
        <CssBaseline />
        <Box
          className="marginAuto"
          sx={{
            marginTop: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "1000px",
          }}
        >
          <Typography component="h1" variant="h4">
            Kreiraj Novost
          </Typography>
          <Box
            className="marginAuto"
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
            width="1"
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="naslov"
              label="Naslov"
              name="naslov"
              autoFocus
              inputRef={titleValue}
              onClick={onClickResetInput}
              maxlength="50"
            />
            <Typography component="h5" variant="h6">
              Tekst:
            </Typography>
            <textarea  onClick={onClickResetInput} maxlength="500" className="textArea" ref={textValue}></textarea>

            {isCreated && <p className="succes">Uspješno</p>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Objavi
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
