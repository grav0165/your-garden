import React from "react";
import { useSelector } from "react-redux";
import './PlantDetails.css'

import { useHistory } from "react-router-dom";

// importing in MUI components
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box"


function PlantDetails() {

    // Importing reducer store of plant details API get
    const plantDetails = useSelector(store => store.api.apiDetailsResponse)

    // Importing history to use to push back to the search results
    const history = useHistory();

    const handleReturn = () => {
        console.log('Return button clicked')
        history.push('/search')
    }

    return (
        <div className="details-full-page">
            <div className="details-main">
                <Grid xs={8} s={7} md={4} sx={{display: 'flex', flexDirection: 'row'}}>
                <Card elevation={5}>
                    <CardMedia
                        component='img'
                        width='450'
                        height='550'
                        image={plantDetails?.base?.default_image?.original_url}
                        sx={{ flexGrow: 2}}
                    />
                </Card>
                <Card elevation={5} sx={{padding: 2}}>
                    <Typography>
                        {plantDetails?.base?.description}
                    </Typography>
                </Card>
                </Grid>
            </div>
            <div>
                <Button onClick={handleReturn}>Return</Button>
                <Button onClick={() => console.log('object is: ', plantDetails)}>Details</Button>
            </div>
        </div>
    )


}

export default PlantDetails;