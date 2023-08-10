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
import { createTheme, ThemeProvider, Tooltip } from "@mui/material";

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

        <div className="to-do-page">
            <ThemeProvider theme={theme}>
                <Container>
                    <h3>To Do Today</h3>
                    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', overflowX: 'scroll', overflowY: 'scroll' }}>
                        {userPlantList.map(plant => {
                            if(toDoDay(plant) > 1) {
                                return (
                                    <Tooltip title="Click me to mark your plant as watered">
                                        <CardActionArea onClick={() => handleWateringUpdate(plant)} sx={{ width: 280, margin: 1 }}>
                                            <Card
                                                key={plant?.id}
                                                className="result-card"
                                                elevation={5}
                                                sx={{ backgroundColor: '#e06469', width: 250, height: 300, display: 'flex', flexDirection: 'column', gap: 0.5, padding: 2, paddingBottom: 3 }}
                                            >
                                                <Typography
                                                    variant="caption"
                                                    sx={{ display: 'flex', position: 'absolute', right: '115px', color: 'white', textShadow: '2px 2px 4px #000000'}}
                                                >
                                                    Over Due
                                                </Typography>
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
                                                    <Typography variant="caption">
                                                        {plant?.scientific_name}
                                                    </Typography>
                                                </div>
                                            </Card>
                                        </CardActionArea>
                                    </Tooltip>

                                )
                            }
                            if (toDoDay(plant) > 0) {
                                return (
                                    <Tooltip title="Click me to mark your plant as watered">
                                        <CardActionArea onClick={() => handleWateringUpdate(plant)} sx={{ width: 280, margin: 1 }}>
                                            <Card
                                                key={plant?.id}
                                                className="result-card"
                                                elevation={5}
                                                sx={{width: 250, height: 300, display: 'flex', flexDirection: 'column', gap: 0.5, padding: 2, paddingBottom: 3 }}
                                            >
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
                                                    <Typography variant="caption">
                                                        {plant?.scientific_name}
                                                    </Typography>
                                                </div>
                                            </Card>
                                        </CardActionArea>
                                    </Tooltip>

                                )
                            }
                        })}
                    </Box>
                    <h3>To Do Tomorrow</h3>
                    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', overflowX: 'scroll', overflowY: 'scroll' }}>
                        {userPlantList.map(plant => {
                            if (-1 < toDoDay(plant)) {
                                if (toDoDay(plant) < 0) {
                                    return (
                                        <Tooltip title="Click me to mark your plant as watered">
                                            <CardActionArea onClick={() => handleWateringUpdate(plant)} sx={{ width: 280, margin: 1 }}>
                                                <Card
                                                    key={plant?.id}
                                                    className="result-card"
                                                    elevation={5}
                                                    sx={{ width: 250, height: 300, display: 'flex', flexDirection: 'column', gap: 0.5, padding: 2, paddingBottom: 3 }}
                                                >
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
                                                        <Typography variant="caption">
                                                            {plant?.scientific_name}
                                                        </Typography>
                                                    </div>
                                                </Card>
                                            </CardActionArea>
                                        </Tooltip>
                                    )
                                }
                            }
                        })}
                    </Box>
                    <h3>To Do the Day After Tomorrow</h3>
                    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', overflowX: 'scroll', overflowY: 'scroll' }}>
                        {userPlantList.map(plant => {
                            if (-2 < toDoDay(plant)) {
                                if (toDoDay(plant) < -1) {
                                    return (
                                        <Tooltip title="Click me to mark your plant as watered">
                                            <CardActionArea onClick={() => handleWateringUpdate(plant)} sx={{ width: 280, margin: 1 }}>
                                                <Card
                                                    key={plant?.id}
                                                    className="result-card"
                                                    elevation={5}
                                                    sx={{ width: 250, height: 300, display: 'flex', flexDirection: 'column', gap: 0.5, padding: 2, paddingBottom: 3 }}
                                                >
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
                                                        <Typography variant="caption">
                                                            {plant?.scientific_name}
                                                        </Typography>
                                                    </div>
                                                </Card>
                                            </CardActionArea>
                                        </Tooltip>

                                    )
                                }
                            }
                        })}
                    </Box>
                </Container>
            </ThemeProvider>
            <div className="to-do-bottom">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>


    )
}

export default ToDo;