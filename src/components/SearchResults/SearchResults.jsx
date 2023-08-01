import React from "react";
import './SearchResults.css';
import { useDispatch } from "react-redux";



// importing MUI
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Unstable_Grid2/Grid2";


// importing store 
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";


function searchResults() {
    
    // Store that holds all of the results from the API search
    const apiSearchResult = useSelector(store => store.api.apiSearchResponse)
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



    return (
        <>
            
                <Grid container spacing={{ s: 2, md: 0.5 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {apiSearchResult.map(plant => {
                        return (

                            <Grid xs={8} s={7} md={4} >
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
                                        <Typography>
                                            {plant?.common_name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary">
                                            {plant?.scientific_name}
                                        </Typography>
                                    </CardActionArea>
                                </Card>

                            </Grid>

                        )
                    })}

                </Grid>

        </>

    )

}

export default searchResults;