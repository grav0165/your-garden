import React from "react";

// importing MUI
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

// importing store 
import { useSelector } from "react-redux";


function searchResults () {

    const apiSearchResult = useSelector( store  => store.api.apiSearchResponse)

    const handleStore = () => {
         console.log('apiSearchResult is the following array: ', apiSearchResult)
    }
   

    return (
        <div className="search-results">
             <h1>Results Here</h1>
             { apiSearchResult.map(plant => {
                return(
                    <Card key={plant?.id} sx={{ width: 350, minWidth: 200}} className="result-card">
                        <CardMedia 
                            component='img'
                            height='140'
                            image={plant?.default_image?.original_url}
                            alt={plant?.common_name}
                        />
                    </Card>
                )
             })}
        </div>
       
    )

}

export default searchResults;