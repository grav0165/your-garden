import React from 'react';
import './RegisterPage.css'

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage() {
  const history = useHistory();

  return (
    <div className='container'>
      <div className='video-wrapper'>
        <video id="background-video" autoPlay muted loop={true}>
          <source src="./video/flower.mp4" type="video/mp4" />
        </video>
      </div>
      <div className='content-register'>
      <RegisterForm />

      <center>
        
      </center>
      </div>
    </div>
  );
}

export default RegisterPage;
