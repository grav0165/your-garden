import React from "react";
import './SearchResults.css';
import { useDispatch } from "react-redux";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";



// importing MUI
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box"
import { responsiveFontSizes, createTheme, ThemeProvider } from "@mui/material/styles";

// MUI theme information 
// let theme = createTheme();
// theme = responsiveFontSizes(theme);
let theme = createTheme({
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

},);
theme = responsiveFontSizes(theme)


// importing store 
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";


function searchResults() {

    // Store that holds all of the results from the API search
    let apiSearchResult = useSelector(store => store.api.apiSearchResponse)
    // Store that holds the status of the loading spinner boolean
    const loadingSpinner = useSelector(store => store.loadingSpinner)
    // Calling in dispatch to use for Saga request
    const dispatch = useDispatch();
    // Calling history to push into details page
    const history = useHistory();

    // API dispatch to call up details of a specific plant
    const handleDetails = (event, plant) => {
        event.preventDefault();
        dispatch({
            type: 'SEARCH_API_DETAILS',
            payload: plant?.id
        })
        history.push('/details')
    }


    // Created a variable thats conditional to avoid broken links
    let image;
    const plantImage = (plant) => {
        if (plant?.default_image == null) {
            image = "images/default.png";
        } else if (plant?.default_image?.original_url == "https://perenual.com/storage/image/upgrade_access.jpg") {
            image = "images/default.png";
        } else {
            image = plant?.default_image?.original_url;
        }
        return image
    }



    return loadingSpinner ? (
        <LoadingSpinner />
    ) :
        (
            <>
                <ThemeProvider theme={theme}>
                    <Grid container spacing={{ s: 2, md: 0.5 }} columns={{ xs: 3, sm: 4, md: 8 }} sx={{ width: '90%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        {apiSearchResult.map(plant => {
                            return (
                                <Grid>
                                    <Card
                                        key={plant?.id}
                                        sx={{ width: 250, height: 300, display: 'flex', flexDirection: 'column', gap: 1, margin: 1, padding: 2, paddingBottom: 3 }}
                                        elevation={5}
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
                </ThemeProvider>
                <br />
                <br />
                <br />
                <br />
                <br />
            </>

        )

}

export default searchResults;