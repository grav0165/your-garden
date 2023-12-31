import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Search from '../Search/Search';
import PlantDetails from '../PlantDetails/PlantDetails';
import UserGarden from '../UserGarden/UserGarden';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import ToDo from '../ToDo/ToDo';
import Home from '../Home/Home';

import './App.css';
import { Lan } from '@mui/icons-material';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  // Function to do two different dispatch calls
  const dispatchCall = () => {
    dispatch({ type: 'FETCH_PLANT_USER'})
    dispatch({ type: 'GET_PLANT_LIST' });
}

  // Function related to logged in user call
  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  // Dispatch call to get plant database and user garden database info
  useEffect(() => {
    dispatchCall();
}, []);



  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/landingpage" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <ProtectedRoute
          exact
          path="/search"
          >
            <Search />
          </ProtectedRoute>

          <ProtectedRoute
          exact
          path="/details"
          >
            <PlantDetails />
          </ProtectedRoute>

          <ProtectedRoute
          exact
          path="/yourgarden"
          >
            <UserGarden />
          </ProtectedRoute>

          <ProtectedRoute
          exact
          path="/todo"
          >
            <ToDo />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/home" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>
          <Route
            path='/landingpage'
          >
            <LandingPage />
          </Route>

          <ProtectedRoute
            exact
            path="/home"
          >
            <Home />
          </ProtectedRoute>


          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
