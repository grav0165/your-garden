import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import { Button } from '@mui/material';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <div className='video-wrapper'>
        <video id="background-video"  autoPlay muted loop={true}>
          <source src="./video/flower.mp4" type="video/mp4" />
        </video>
      </div>
      <div className='content'>
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
    </div>
  );
}

export default LandingPage;
