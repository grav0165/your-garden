import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

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

    // function to grab all user submitted plants in garden
    const userPlants = () => {
        dispatch({
            type: 'FETCH_PLANT_USER'
        })
    }

      // Creating a function to wait
      const wait = (ms) => {
        const start = Date.now();
        let now = start;
        while (now - start < ms) {
          now = Date.now();
        }
    }

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


    useEffect(() => {
        userPlants();
    }, []);

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


    return (
        <ThemeProvider theme={theme}>
        <div className="your-garden-main">
            <Card sx={{ width: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
                <Typography variant="h4">
                    Welcome to your garden state of mind
                </Typography>
            </Card>
            <Grid container spacing={{ s: 2, md: 0.5 }} columns={{ xs: 4, sm: 6, md: 12 }}>
                {userPlantResult.map(plant => {
                    return (
                        <Grid xs={4} s={4} md={4} >
                            <Card
                                key={plant?.id}
                                sx={{ width: 250, height: 300, display: 'flex', flexDirection: 'column', gap: 1, margin: 3, padding: 2, paddingBottom: 3 }}
                                className="result-card">
                                <CardActionArea onClick={()=>handleDetails(event, plant)}>
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
        </div>
        </ThemeProvider>
    )
}

export default UserGarden;
