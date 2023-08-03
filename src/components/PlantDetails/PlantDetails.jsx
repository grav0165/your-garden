import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from "react-redux";
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
import TextField from '@mui/material/TextField';
import { responsiveFontSizes, createTheme, ThemeProvider } from "@mui/material/styles";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function PlantDetails() {
    // State to handle opening and closing dialogue for add
    const [open, setOpen] = useState(false);
    // State to handle open and closing dialogue for remove
    const [openRemove, setOpenRemove] = useState(false);
    // State to hold drop down input
    const [wateringInput, setWateringInput] = useState();

    // Array of numbers to be used for the dropDown box in watering
    const dropDown = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

    // Importing reducer store of plant details API get
    const plantDetails = useSelector(store => store.api.apiDetailsResponse)
    //Importing reducer store of plant list to match ID's if the plant needs to be added from API database
    const plantList = useSelector(store => store.plantDatabase.plantDatabaseResponse)

    // Importing history to use to push back to the search results
    const history = useHistory();
    //Importing dispatch to make dispatch calls
    const dispatch = useDispatch();

    // handle click open of ADD dialogue
    const handleClickOpen = () => {
        setOpen(true);
    };

    // handle click close of CLOSE dialogue 
    const handleClose = () => {
        setOpen(false);
    };

     // handle click open of REMOVE dialogue
     const handleClickOpenRemove = () => {
        setOpenRemove(true);
    };

    // handle click close of REMOVE dialogue 
    const handleCloseRemove = () => {
        setOpenRemove(false);
    };

    // Confirmed removed plant dialogue
    const handleRemoveFromGarden = () => {
        console.log('Remove from garden clicked')
    }

    // handle return back to search results
    const handleReturn = () => {
        console.log('Return button clicked')
        history.push('/search')
    }





    // Button to add will first add plant to the plant database, then ask for a watering prompt on popper window
    const handleAdd = (plantList, plantDetails) => {
        console.log('ID from the API detail GET: ', plantDetails?.base?.id)
        handleClickOpen();
        const addToDatabase = plantList.some(plant => plant.api_id == plantDetails?.base?.id)
        if (!addToDatabase) {
            dispatch({
                type: 'ADD_PLANT_LOCAL_DB',
                payload: plantDetails
            })
        }
    }

    //Button to remove plant from your garden, will keep plant details in plant chart
    const handleRemove = () => {
        handleClickOpenRemove();
        console.log('Remove button clicked')
    }

    // Button to cancel adding to the database
    const handleCancel = () => {
        console.log('Cancel adding to database');
        handleClose();
    }

    // button to handle add to the user's garden, will POST to database
    const handleAddToGarden = (event, plantList, plantDetails) => {
        event.preventDefault();
        console.log('Added to users database');
        let idToAdd 
        for(let i=0; i<plantList.length; i++) {
            if(plantList[i].api_id == plantDetails?.base?.id) {
                idToAdd = plantList[i].id
            }
        }
        dispatch({
            type: 'ADD_PLANT_USER',
            payload: {
                id: idToAdd,
                watering: wateringInput
            }
        })
     
        handleClose();
    }


    useEffect(() => {
        dispatch({ type: 'GET_PLANT_LIST' })
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <div className="details-full-page">
                <div className="details-main">
                    <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Grid xs={7}>
                            <Card elevation={5}>
                                <CardMedia
                                    component='img'
                                    height='500'
                                    image={plantDetails?.base?.default_image?.original_url}
                                    sx={{ flexGrow: 2 }}
                                />
                            </Card>
                        </Grid>
                        <Grid xs={5} lg={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Card elevation={5} sx={{ padding: 2, marginBottom: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Typography variant="h4">
                                    {plantDetails?.base?.common_name}
                                </Typography>
                                <Typography variant="subtitle2">
                                    {plantDetails?.base?.scientific_name[0]}
                                </Typography>
                            </Card>
                            <Card elevation={5} sx={{ padding: 2 }}>
                                <Typography variant="body1">
                                    {plantDetails?.base?.description}
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
                <div className="interaction-buttons">
                    <Button size="large" variant="contained" elevation={5} sx={{ margin: 1 }} onClick={handleReturn} startIcon={<SkipPreviousIcon />}>Return</Button>
                    <Button size="large" variant="contained" elevation={5} sx={{ margin: 1 }} onClick={() => console.log('object is: ', plantDetails)}>Details</Button>
                </div>
                <div className="additional-details">
                    <h4>Additional Plant Details Here</h4>
                </div>
                <div className="add-remove-buttons">
                    <Button size="large" variant="contianed" elevation={5} sx={{ margin: 1 }} onClick={() => handleAdd(plantList, plantDetails)}>Add</Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>How would you like to water</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                {plantDetails?.care?.[0]?.section?.[0]?.description}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <TextField
                                id="outlined-select-currency"
                                select
                                label="Select"
                                defaultValue=""
                                onChange={(event)=>setWateringInput(event.target.value)}
                                sx={{ width: 175}}
                            >
                            {dropDown.map((option) => (
                                <MenuItem key={option} value={option}>
                                  {option}
                                </MenuItem>
                              ))}
                              </TextField>
                            <Button size="large" variant="contained" onClick={handleCancel}>Cancel</Button>
                            <Button size="large" variant="contained" onClick={()=>handleAddToGarden(event, plantList, plantDetails)}>Add</Button>
                        </DialogActions>
                    </Dialog>
                    <Button size="large" variant="contianed" elevation={5} sx={{ margin: 1 }} onClick={()=>handleRemove}>Remove</Button>
                    <Dialog open={openRemove} onClose={handleClose}>
                    <DialogTitle>How would you like to water</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                {plantDetails?.care?.[0]?.section?.[0]?.description}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <TextField
                                id="outlined-select-currency"
                                select
                                label="Select"
                                defaultValue=""
                                onChange={(event)=>setWateringInput(event.target.value)}
                                sx={{ width: 175}}
                            >
                            {dropDown.map((option) => (
                                <MenuItem key={option} value={option}>
                                  {option}
                                </MenuItem>
                              ))}
                              </TextField>
                            <Button size="large" variant="contained" onClick={handleCancel}>Cancel</Button>
                            <Button size="large" variant="contained" onClick={(event)=>handleRemoveFromGarden(event, plantList, plantDetails)}>Add</Button>
                        </DialogActions>
                    </Dialog>

                </div>
            </div>
        </ThemeProvider>
    )


}

export default PlantDetails;