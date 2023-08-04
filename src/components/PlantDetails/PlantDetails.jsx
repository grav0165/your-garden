import React, { useState, useEffect } from 'react';
import moment from 'moment/moment';
import { useSelector, useDispatch } from "react-redux";
import './PlantDetails.css'

// Spinner to give visual sign of loading
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';

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
    // Importing user Garden information
    const userPlantList = useSelector(store => store.userPlantDatabase.userPlantDatabaseResponse)
    // Store that holds the status of the loading spinner boolean
    const loadingSpinner = useSelector(store => store.loadingSpinner.loadingSpinner)

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
    const handleRemoveFromGarden = (event, plant) => {
        event.preventDefault();
        console.log('Remove from garden clicked with ID: ', plant?.id)
        dispatch({
            type: 'USER_REMOVE_PLANT',
            payload: plant?.id
        })
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
    const handleRemove = (plantList, plantDetails) => {
        handleClickOpenRemove();
        console.log('Remove button clicked')
    }

    // Button to cancel adding to the database
    const handleCancel = () => {
        console.log('Cancel adding to database');
        handleClose();
        handleCloseRemove();
    }

    // button to handle add to the user's garden, will POST to database
    const handleAddToGarden = (event, plantList, plantDetails) => {
        event.preventDefault();
        console.log('Added to users database');
        let idToAdd
        for (let i = 0; i < plantList.length; i++) {
            if (plantList[i].api_id == plantDetails?.base?.id) {
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


    return loadingSpinner ? (
        <LoadingSpinner /> 
        ) : (
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
                                onChange={(event) => setWateringInput(event.target.value)}
                                sx={{ width: 175 }}
                            >
                                {dropDown.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <Button size="large" variant="contained" onClick={handleCancel}>Cancel</Button>
                            <Button size="large" variant="contained" onClick={() => handleAddToGarden(event, plantList, plantDetails)}>Add</Button>
                        </DialogActions>
                    </Dialog>
                    <Button size="large" variant="contianed" elevation={5} sx={{ margin: 1 }} onClick={() => handleRemove(plantList, plantDetails)}>Remove</Button>
                    <Dialog open={openRemove} onClose={handleClose}>
                        <DialogTitle sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>Removal of {plantDetails?.base?.common_name}</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Are you sure you want to remove {plantDetails?.base?.common_name} from your garden? This cannot be undone.
                            </DialogContentText>
                        </DialogContent>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Plant</TableCell>
                                        <TableCell>Added Date</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {userPlantList.map(plant => {
                                        if (plant?.api_id == plantDetails?.base?.id) {

                                    return (
                                        <TableRow
                                            key={plant?.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">{plant?.common_name}</TableCell>
                                            {/* Moment is a dependency that allows you to easily format the date in a simple to consume way */}
                                            <TableCell>{moment(plant?.added_date).format("MMM Do YY")}</TableCell>
                                            <TableCell align="right"><Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={(event) => handleRemoveFromGarden(event, plant)}>Delete</Button></TableCell>
                                        </TableRow>
                                    )}})}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <DialogActions sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 1}}>
                            <Button size="large" variant="contained" onClick={handleCancel}>Return</Button>
                        </DialogActions>
                    </Dialog>

                </div>
            </div>
        </ThemeProvider>
    )


}

export default PlantDetails;