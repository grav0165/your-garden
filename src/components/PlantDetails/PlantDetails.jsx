import React from "react";
import { useSelector } from "react-redux";

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
    const plantDetails = useSelector(store => store.PlantDetails)

    // Importing history to use to push back to the search results
    const history = useHistory();

    const handleReturn = () => {
        console.log('Return button clicked')
        history.push('/search')
    }

    return (
        <div className="details-main">
            <Card>
                <CardMedia
                    component='img'
                    height='300'
                    image={plantDetails?.base?.default_image?.original_url}
                />
            </Card>
            <Button onClick={handleReturn}>Return</Button>
        </div>
    )


}

export default PlantDetails;