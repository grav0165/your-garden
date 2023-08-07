import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import { Button, Paper, Typography } from '@mui/material';
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import GrassIcon from '@mui/icons-material/Grass';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

// Theme for MUI
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


function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <div className='video-wrapper'>
        <video id="background-video" autoPlay muted loop={true}>
          <source src="./video/flower.mp4" type="video/mp4" />
        </video>
      </div>
      <div className='content'>
        <Paper sx={{ backgroundColor: 'rgba(60, 80, 60, 0.5)', marginBottom: 10, display: 'flex', padding: 2 }} className='landing-paper'>
          <div className='mission-statement'>
            <Typography sx={{color: 'white'}}>
              Nurturing your own garden can bring peace of mind and happiness as each
              blooms and becomes a gorgeous display of nature. However, many beginners
              and enthusiasts have trouble keeping track of the watering patterns for
              each plant. Wanting to turn a black thumb to a green thumb, Your Garden
              was created to reduce the amount of effort it takes to manage a garden.
            </Typography>
            <Typography sx={{marginTop: 2, color: 'white'}}>
              Simplifying garden care is the goal for any gardener. Your Garden is 
              setting out to make researching your next plant simple, streamline
              the process of remembering which plants to water, and give you a clear 
              picture of your weekly tasks that bring your happiness.
            </Typography>
            <Typography sx={{marginTop: 2, color: 'white'}}>
              Welcome to Your Garden <LocalFloristIcon fontSize='small' />
            </Typography>
          </div>
          <div className='register-box'>
            <RegisterForm />
            <Typography sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <h4>Already a Member?</h4>
              <Button className="btn btn_sizeSm" variant="contained" color="success" onClick={onLogin}>Login</Button>
            </Typography>
          </div>
        </Paper>
      </div>
      {/* <div className='content'>
        <h2>{heading}</h2>

        <div className="grid">
          <div className="grid-col grid-col_8">
            <p>
              Nurturing your own garden can bring peace of mind and happiness as each
              blooms and becomes a gorgeous display of nature. However, many beginners
              and enthusiasts have trouble keeping track of the watering patterns for
              each plant. Wanting to turn a black thumb to a green thumb, Your Garden
              was created to reduce the amount of effort it takes to manage a garden.
            </p>

            <p>
              Simplifying garden care is the goal for any gardener.
            </p>

          </div>
          <div className="grid-col grid-col_4">
            <RegisterForm />

            <center>
              <h4>Already a Member?</h4>
              <Button className="btn btn_sizeSm" variant="contained" color="success" onClick={onLogin}>Login</Button>
            </center>
          </div>
        </div>
      </div>
    </div> */}
    </div>
  );
}

export default LandingPage;
