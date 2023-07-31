import React from "react";
import { useSelector } from "react-redux";


function PlantDetails() {

    const plantDetails = useSelector(store => store.PlantDetails)

    return(
        <h1>Plant Details Here</h1>
    )


}

export default PlantDetails;