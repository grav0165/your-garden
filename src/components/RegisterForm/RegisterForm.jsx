import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './RegisterForm.css'

// MUI components
import { Card, TextField, Typography, Button } from '@mui/material';
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
      mode: 'light',
      primary: {
          main: '#a0c49d',
      },
      secondary: {
          main: '#c4d7b2',
      },
      background: {
          paper: '#a0c49d',
          default: '#e1ecc8',
      },
      error: {
          main: '#e06469',
      },
      warning: {
          main: '#f2b6a0',
      },
      info: {
          main: '#dedea7',
      },
  },
});

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <div className='register-box'>
      <ThemeProvider theme={theme}>
      <Card sx={{ padding: 2, height: 400, width: 290, display: 'flex', flexDirection: 'column', backgroundColor: 'rgba(160, 196, 157, 0.9)' }}>
        <div className='register-top'>
        <Typography>
          <h2>Register User</h2>
          {errors.registrationMessage && (
            <h3 className="alert" role="alert">
              {errors.registrationMessage}
            </h3>
          )}
        </Typography>
        <TextField
          id="filled-basic"
          variant="filled"
          label="username"
          value={username}
          required
          color="success"
          onChange={(event) => setUsername(event.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          id="filled-basic"
          variant="filled"
          label="password"
          type="password"
          value={password}
          color='success'
          required
          onChange={(event) => setPassword(event.target.value)}
        />
        </div>
        <div className='button'>
          <Button color='success' sx={{marginTop: 2}} onClick={registerUser}>Register</Button>
        </div>
      </Card>
      </ThemeProvider>
    </div>
  );

}

export default RegisterForm;
