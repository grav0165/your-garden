import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './LoginForm.css'

// MUI components
import { ThemeProvider, Box, Card, Typography, Paper, TextField, Button, createTheme } from '@mui/material';

// MUI theme
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


function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <div className='login-box'>
      <ThemeProvider theme={theme}>
        <Card sx={{ padding: 2, height: 400, width: 290, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'rgba(160, 196, 157, 0.9)' }}>
          <div className='login-top'>
            <div className='login-top-info'>
              <Typography>
                <h2>Login</h2>
                {errors.loginMessage && (
                  <h3 className="alert" role="alert">
                    {errors.loginMessage}
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
              <Button color='success' sx={{ marginTop: 2 }} onClick={login}>Log In</Button>
            </div>
          </div>
          <div className='register-button-div'>
            <Button
              className="btn btn_asLink register-button"
              color='success'
              onClick={() => {
                history.push('/registration');
              }}
            >
              Register
            </Button>
          </div>
        </Card>
      </ThemeProvider>
    </div>
  );
}

export default LoginForm;
