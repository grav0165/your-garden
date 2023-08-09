import React from 'react';
import './AboutPage.css'
import { Card, Typography, Paper, CardMedia, createTheme, ThemeProvider } from '@mui/material'

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

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


function AboutPage() {
  return (
    <div className="container">
      <ThemeProvider theme={theme}>
        <div className='video-wrapper'>
          <video id="background-video" autoPlay muted loop={true}>
            <source src="./video/flower.mp4" type="video/mp4" />
          </video>
        </div>
        <div className='content-about'>
          <div className='about-text'>
            <div className='technologies-used'>

              <Card sx={{ width: 250, display: 'flex', flexDirection: 'column', padding: 3, marginRight: 3 }}>
                <Typography>
                  Technologies Used in this project:
                </Typography>
                <Typography>
                  - Javascript
                </Typography>
                <Typography>
                  - CSS
                </Typography>
                <Typography>
                  - React
                </Typography>
                <Typography>
                  - Redux / Sagas
                </Typography>
                <Typography>
                  - Node.js
                </Typography>
                <Typography>
                  - Express
                </Typography>
                <Typography>
                  - PostgreSQL
                </Typography>
                <Typography>
                  - Material UI
                </Typography>
                <Typography>
                 - <a href="https://perenual.com/">Perenual API</a>
                </Typography>
              </Card>
              <Card sx={{ height: 330, width: 400, display: 'flex', flexDirection: 'column' }}>
                <img src="./images/linkedin.JPG" />
              </Card>
            </div>
            <div className='thank-you-text'>
              <Card sx={{ width: 200, height: 200, display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 2, padding: 3 }}>
                <Typography sx={{ marginBottom: 2 }}>
                  Big shout out to all my 'Emma'-ralds
                </Typography>
                <img src='./images/emerald-gem.png' width='100' />
              </Card>
              <Card sx={{ display: 'flex', flexDirection: 'column', padding: 3, margin: 1, marginTop: 3, marginBottom: 3 }}>
                <Typography>
                  😒 Amy for letting me complain without judgment (even when I deserved it)
                </Typography>
                <Typography>
                  🫡 Georgie for helping me understand graphic design and that I can never do a backflip
                </Typography>
                <Typography>
                  🫥 Jon for asking the questions I always forget to ask
                </Typography>
                <Typography>
                  🤐 Justin for always mentally checking if those complaints ever really mattered
                </Typography>
                <Typography>
                  🦆 Peder for doing free photoshop design work and being a top tier rubber duck
                </Typography>
                <Typography>
                  🐰 Quynh for inspiring me to do better with my CSS, and having pets with amazing names
                </Typography>
                <Typography>
                  😱 Sam for reminding me that I don't always have to get anxious. Sometimes you just gotta work it out.
                </Typography>
                <Typography>
                  🙌 Savon for showing me believing in yourself and personal discipline can get you further than worrying
                </Typography>
                <Typography>
                  🤪 Zach for trading back and forth some of the most rancid memes to keep one another sane
                </Typography>
                <Typography>
                  🤗 Zakariye for reminding me that being soft spoken is often better than being loud (and wrong)
                </Typography>
              </Card>
            </div>
            <div className='prime-thanks'>
              <Card sx={{ width: 400, padding: 3, marginRight: 2, marginBottom: 16 }}>
                <Typography>
                  Emma for being my favorite instructor of my entire educational career.
                  Never a moment I didn't feel her passion for teaching and desire to see
                  each one of us succeed. Your resolve inspired me to become a better
                  student
                </Typography>
              </Card>
              <Card sx={{ width: 400, height: 100, padding: 3 }}>
                <Typography>
                  Thank you to Key, Dane, Matt, Chris, Liz, Anita, Rachel, Justice, Christy, Bellamy, and may more at Prime Digital Academy.
                </Typography>
              </Card>

            </div>
          </div>
        </div>
      </ThemeProvider>
    </div >

  );
}

export default AboutPage;
