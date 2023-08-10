import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <div className='logo-name'>
        {!user.id ? (
          <Link to="/landingpage">
            <img
              src='./images/flower-transparent.png'
              height={60}
              alt='flower'
              className='flower-icon'
            />
            <div className='page-logo'>
              <h2 className="nav-title">Your Garden</h2>
            </div>
          </Link>
        ) : (
          <Link to="/home">
            <img
              src='./images/flower-transparent.png'
              height={60}
              alt='flower'
              className='flower-icon'
            />
            <div className='page-logo'>
              <h2 className="nav-title">Your Garden</h2>
            </div>
          </Link>
        )}
        {/* <Link to="/home">
          <img
            src='./images/flower-transparent.png'
            height={60}
            alt='flower'
            className='flower-icon'
          />
        </Link>
        <div className='page-logo'>
          <Link to="/home">
            <h2 className="nav-title">Your Garden</h2>
          </Link>
        </div> */}
      </div>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/home">
              Home
            </Link>
            <Link className="navLink" to="/search">
              Search
            </Link>

            <Link className="navLink" to="/yourgarden">
              Your Garden
            </Link>

            <Link className="navLink" to="/todo">
              To Do Page
            </Link>

            <Link className="navLink" to="/user">
              Profile
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div >
  );
}

export default Nav;
