import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

// MUI components
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Unstable_Grid2/Grid2";


function UserGarden () {

    // Adding dispatch to component
    const dispatch = useDispatch();

    // Store to hold the user's garden information imported
    let userPlantResult = useSelector(store => store.userPlantDatabase)

    // function to grab all user submitted plants in garden
    const userPlants = () => {
        dispatch({
            type: 'FETCH_USER_PLANTS'
        })
    }

    const handleDetails = () => {
        console.log('Asking for database details')
    }

    useEffect(() => {
        userPlants();
      }, []);

      // created a variable that's conditional to avoid broken image links
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


    return(
        <> 
                <Grid container spacing={{ s: 2, md: 0.5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {apiSearchResult.map(plant => {
                        return (
                            <Grid xs={8} s={7} md={4} >
                                <Card
                                    key={plant?.id}
                                    sx={{ width: 250, height: 300, display: 'flex', flexDirection: 'column', gap: 1, margin: 3, padding: 2, paddingBottom: 3 }}
                                    className="result-card">
                                    <CardActionArea onClick={handleDetails}>
                                        <CardMedia
                                            component='img'
                                            height='240'
                                            image={plantImage(image)}
                                            alt={plantImage(image)}
                                        />
                                        <Typography>
                                            {plantImage(image)}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary">
                                            {plantImage(image)}
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

export default UserGarden;
