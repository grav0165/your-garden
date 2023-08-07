import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './RegisterForm.css'

// MUI components
import { Card, TextField, Typography, Button } from '@mui/material';

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
      <Card sx={{ padding: 2, height: 400, width: 290, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
          onChange={(event) => setUsername(event.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          id="filled-basic"
          variant="filled"
          label="password"
          type="password"
          value={password}
          required
          onChange={(event) => setPassword(event.target.value)}
        />
        </div>
        <div className='button'>
          <Button onClick={registerUser}>Register</Button>
        </div>
      </Card>
    </div>
  );

}

export default RegisterForm;
