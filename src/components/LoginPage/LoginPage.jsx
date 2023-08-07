import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import './LoginPage.css'

function LoginPage() {
  const history = useHistory();

  return (
    <div className='container'>
      <div className='video-wrapper'>
        <video id="background-video" autoPlay muted loop={true}>
          <source src="./video/flower.mp4" type="video/mp4" />
        </video>
      </div>
      <div className='content-login'>
      <LoginForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink register-button"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      </center>
      </div>
    </div>
  );
}

export default LoginPage;
