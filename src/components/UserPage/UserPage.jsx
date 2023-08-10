import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import './UserPage.css'

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="user-container">
      <h2>Welcome, {user.username}!</h2>
      <div className='info-part'>
        <div className='info-part-1'>
          <Typography sx={{ fontWeight: 'bold' }}>
            Purpose:
          </Typography>
          <Typography sx={{ width: 300, marginBottom: 2 }}>
            The purpose of Your Garden is to give the user the ease of using a client to
            monitor watering habits of your garden to make the day-to-day care of your projects
            that much easier to manage.
          </Typography>
          <Typography sx={{ fontWeight: 'bold' }}>
            Home:
          </Typography>
          <Typography sx={{ width: 300, marginBottom: 2 }}>
            The user's home page will demonstrate all currently required plant watering today
            in a mini-todo bar which takes the user to the full To-Do page. Beneath is an easy
            to access search bar to begin adding and researching plants.
          </Typography>
          <Typography sx={{ fontWeight: 'bold' }}>
            Search:
          </Typography>
          <Typography sx={{ width: 300, marginBottom: 2 }}>
            The Search page allows the user to focus on searching and understanding what plants are
            in their garden, or even research new plants to bring into your ongoing projects.
          </Typography>
        </div>
        <div className='info-part-2'>
          <Typography sx={{ fontWeight: 'bold' }}>
            Your Garden:
          </Typography>
          <Typography sx={{ width: 300, marginBottom: 2 }}>
            Your Garden displays all plants currently avaialble in the user's garden, with the
            ability to click into any of the cards and also go to the details page to get further
            information about a given plant.
          </Typography>
          <Typography sx={{ fontWeight: 'bold' }}>
            Details:
          </Typography>
          <Typography sx={{ width: 300, marginBottom: 2 }}>
            Plant Details gives a specific set of details pulled from the <a href="https://perenual.com/">Perenual API</a> go give
            succinct, easily understood information.
          </Typography>
        </div>
      </div>
      <div className='log-out-button'>
        <LogOutButton className="btn" />
      </div>
    </div >
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
