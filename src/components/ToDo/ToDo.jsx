import { Difference } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import './ToDo.css'

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

function ToDo() {
    // Adding dispatch to help with PUT requests
    const dispatch = useDispatch();

    // Adding store to run calculation
    let userPlantList = useSelector(store => store.userPlantDatabase.userPlantDatabaseResponse);

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

    const handleWateringUpdate = (plant) => {
        dispatch({
            type: 'USER_WATER_UPDATE',
            payload: plant?.id
        })
    }






    return (

        <div>
            <Container>
                <h3>To Do Today</h3>
                <Box sx={{ display:'flex', flexDirection:'row', flexWrap: 'nowrap', overflowX: 'scroll', overflowY: 'scroll'}}>
                {userPlantList.map(plant => {
                    if (toDoDay(plant) > 0) {
                        return (
                            <CardActionArea onClick={() => handleWateringUpdate(plant)}>
                                <Card
                                    key={plant?.id}
                                    className="result-card"
                                    sx={{ width: 250, height: 300, display: 'flex', flexDirection: 'column', gap: 1, margin: 3, padding: 2, paddingBottom: 3 }}
                                >
                                    <CardMedia
                                        component='img'
                                        height='240'
                                        image={plantImage(plant)}
                                        alt={plant?.common_name}
                                    />
                                    <Typography>
                                        {plant?.common_name}
                                    </Typography>
                                </Card>
                            </CardActionArea>

                        )
                    }
                })}
                </Box>
                <h3>To Do Tomorrow</h3>
                <Paper sx={{ display:'flex', flexDirection:'row' }}>
                {userPlantList.map(plant => {
                    if (-1 < toDoDay(plant)) {
                        return (
                            <Card
                                key={plant?.id}
                                className="result-card"
                                sx={{ width: 250, height: 300, display: 'flex', flexDirection: 'column', gap: 1, margin: 3, padding: 2, paddingBottom: 3 }}
                            >
                                <CardActionArea >
                                    <CardMedia
                                        component='img'
                                        height='240'
                                        image={plantImage(plant)}
                                        alt={plant?.common_name}
                                    />
                                    <Typography>
                                        {plant?.common_name}
                                    </Typography>
                                </CardActionArea>
                            </Card>
                        )
                    }
                })}
                </Paper>
                <h3>To Do the Day After Tomorrow</h3>
                <Paper sx={{ display:'flex', flexDirection:'row' }}>

                {userPlantList.map(plant => {
                    if (-2 < toDoDay(plant)) {
                        if (toDoDay(plant) > -1) {
                            return (
                                <Card
                                    key={plant?.id}
                                    className="result-card"
                                    sx={{ width: 250, height: 300, display: 'flex', flexDirection: 'column', gap: 1, margin: 3, padding: 2, paddingBottom: 3 }}
                                >
                                    <CardActionArea >
                                        <CardMedia
                                            component='img'
                                            height='240'
                                            image={plantImage(plant)}
                                            alt={plant?.common_name}
                                        />
                                        <Typography>
                                            {plant?.common_name}
                                        </Typography>
                                    </CardActionArea>
                                </Card>
                            )
                        }
                    }
                })}
                </Paper>
            </Container>
        </div>

    )
}

export default ToDo;