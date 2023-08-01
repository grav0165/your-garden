import React, {useState} from "react";
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
import { responsiveFontSizes, createTheme, ThemeProvider } from "@mui/material/styles";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// State to handle opening and closing dialogue
const [open, setOpen] = useState(false);

// handle click open of dialogue
  const handleClickOpen = () => {
    setOpen(true);
  };

  // handle click close of dialogue 
  const handleClose = () => {
    setOpen(false);
  };

let theme = createTheme();
theme = responsiveFontSizes(theme);


function PlantDetails() {


    // Importing reducer store of plant details API get
    const plantDetails = useSelector(store => store.api.apiDetailsResponse)

    // Importing history to use to push back to the search results
    const history = useHistory();

    const handleReturn = () => {
        console.log('Return button clicked')
        history.push('/search')
    }

    // Button to add will first add plant to the plant database, then ask for a watering prompt on popper window
    const handleAdd = () => {

    }

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
                        <Grid xs={5} lg={4} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
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
                    <Button size="large" variant="contained" elevation={5} sx={{margin: 1}} onClick={handleReturn} startIcon={<SkipPreviousIcon />}>Return</Button>
                    <Button size="large" variant="contained" elevation={5} sx={{margin: 1}} onClick={() => console.log('object is: ', plantDetails)}>Details</Button>
                </div>
                <div className="additional-details">
                    <h4>Additional Plant Details Here</h4>
                </div>
                <div className="add-remove-buttons">
                    <Button size="large" variant="contianed" elevation={5} sx={{margin: 1}} onClick={handleAdd}>Add</Button><Button size="large" variant="contianed" elevation={5} sx={{margin: 1}} onClick={handleRemove}>Remove</Button>
                    
                </div>
            </div>
        </ThemeProvider>
    )


}

export default PlantDetails;