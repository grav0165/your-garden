import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import './Home.css'
import Search from "../Search/Search";
import SearchResults from "../SearchResults/SearchResults";

// importing MUI
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Container from "@mui/material/Container";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";


// Testing image layout
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


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




function Home() {

    const dispatch = useDispatch();
    // Importing user reducer to greet a new user to the page
    const user = useSelector(store => store.user)
    // Importing users garden database
    const userPlant = useSelector(store => store.userPlantDatabase.userPlantDatabaseResponse)
    // Importing useHistory to push user to another page
    const history = useHistory();

      // Function to do two different dispatch calls
  const dispatchCall = () => {
    dispatch({ type: 'FETCH_PLANT_USER'})
    dispatch({ type: 'GET_PLANT_LIST' });
}

  // Dispatch call to get plant database and user garden database info
  useEffect(() => {
    dispatchCall();
}, []);


    // Code that looks at current date, matches against database date 
    const toDoDay = (plant) => {
        let date_1 = new Date();
        let date_2 = new Date(plant?.water_date)
        // takes current date, minus the inputed date of the 
        let dateDifference = ((date_1.getTime() - date_2.getTime()) / 1000 / 60 / 60 / 24) - plant?.water_days
        return dateDifference
    }
    // Created a variable thats conditional to avoid broken links
    let image;
    const plantImage = (plant) => {
        if (plant?.image == null) {
            image = "images/default.png";
        } else if (plant?.image == "https://perenual.com/storage/image/upgrade_access.jpg") {
            image = "images/default.png";
        } else {
            image = plant?.image;
        }
        return image
    }

    // function to take user to ToDo Page
    const handleToDo = () => {
        console.log('Handle to do clicked')
        history.push('/todo')
    }


    return (
        <ThemeProvider theme={theme}>
            <div className="home-page">
                <div className="welcome-message">
                    <h1> Welcome home, {user.username}</h1>
                </div>
                <div className="mini-todo-box">
                    <Paper elevation={5} sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', overflowX: 'scroll', width: '90%', justifyContent: 'flex-start', alignItems: 'center', padding: 1 }}>
                        {userPlant.map(plant => {
                            if (toDoDay(plant) > 0) {
                                return (
                                    <CardActionArea onClick={handleToDo}>
                                        <Card
                                            key={plant?.id}
                                            className="result-card"
                                            sx={{ width: 150, height: 50, display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 3, padding: 2, paddingBottom: 2 }}
                                        >
                                            <CardMedia
                                                component='img'
                                                height='240'
                                                image={plantImage(plant)}
                                                alt={plant?.common_name}

                                            />
                                            <Typography sx={{ display: 'flex', flexDirection: 'column', position: 'absolute', color: 'white' }}>
                                                {plant?.common_name}
                                            </Typography>
                                        </Card>
                                    </CardActionArea>

                                )
                            }
                        })}
                    </Paper>
                </div>
                <div className="search-bar">
                    <Search />

                </div>
            </div>
        </ThemeProvider>
    )

}

export default Home;