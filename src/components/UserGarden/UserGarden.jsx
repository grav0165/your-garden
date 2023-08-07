import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './UserGarden.css'

// MUI components
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { responsiveFontSizes, createTheme, ThemeProvider } from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function UserGarden() {

    // Adding dispatch to component
    const dispatch = useDispatch();
    // Calling history to push into details page
    const history = useHistory();


    // Store to hold the user's garden information imported
    let userPlantResult = useSelector(store => store.userPlantDatabase.userPlantDatabaseResponse)
    console.log('user plant result call: ', userPlantResult)

    // Creating a function to wait
    const wait = (ms) => {
        const start = Date.now();
        let now = start;
        while (now - start < ms) {
            now = Date.now();
        }
    }

    // Use Effect on page load to obtain users plant information
    useEffect(() => {
        dispatch({ type: 'FETCH_PLANT_USER' })
    }, [])

    // API dispatch to call up details of a specific plant
    const handleDetails = (event, plant) => {
        event.preventDefault();
        dispatch({
            type: 'SEARCH_API_DETAILS',
            payload: plant?.api_id
        })
        // Wait before rendering next page to allow for API call to complete
        wait(700);
        history.push('/details')
    }


    // created a variable that's conditional to avoid broken image links
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


    let pageContent;
    const plantContentReview = (userPlantResult) => {
        if (userPlantResult.length == 0) {
            pageContent =
                <div>
                    <h2> Nothing in your garden yet. </h2>
                    <h3> Why don't you add something first?</h3>
                </div>

        } else {
            pageContent =
                <Grid container spacing={{ s: 2, md: 0.5 }} columns={{ xs: 4, sm: 6, md: 12 }}>
                    {userPlantResult.map(plant => {
                        return (
                            <Grid >
                                <Card
                                    key={plant?.id}
                                    sx={{ width: 250, height: 300, display: 'flex', flexDirection: 'column', gap: 1, margin: 3, padding: 2, paddingBottom: 3 }}
                                    className="result-card">
                                    <CardActionArea onClick={() => handleDetails(event, plant)}>
                                        <CardMedia
                                            component='img'
                                            height='240'
                                            image={plantImage(plant)}
                                            alt={plant?.common_name}
                                        />
                                        <div className="card-name">
                                            <Typography>
                                                {plant?.common_name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary">
                                                {plant?.scientific_name}
                                            </Typography>
                                        </div>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
        }
        return pageContent
    }


    return (
        <ThemeProvider theme={theme}>
            <div className="your-garden-main">
                <Card sx={{ width: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
                    <Typography variant="h4">
                        Welcome to your garden state of mind
                    </Typography>
                </Card>
                {plantContentReview(userPlantResult)}
                <br />
                <br />
                <br />
                <br />
                <br />
                
            </div>
        </ThemeProvider>
    )
}

export default UserGarden;
