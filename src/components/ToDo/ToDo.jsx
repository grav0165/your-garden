import { Difference } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

function ToDo() {
    // Adding dispatch to help with PUT requests
    const dispatch = useDispatch();

    // Adding store to run calculation
    let userPlantList = useSelector(store => store.userPlantDatabase.userPlantDatabaseResponse);

    // Code that looks at current date, matches against database date

    const toDoDay = (plant) => {
        let date_1 = new Date();
        let date_2 = new Date(userPlantList?.[0]?.water_date)
        let dateDifference = (date_1.getTime() - date_2.getTime()) / 1000 / 60 / 60 / 24
        return dateDifference
    }
    let date_1 = new Date();
    let date_2 = new Date(userPlantList?.[0]?.water_date)
    let different = date_1.getTime() - date_2.getTime();
    console.log('The different between the dates is: ', different)
    let dateDifference = different / 1000 / 60 / 60 / 24;
    console.log('The days different between dates is: ', dateDifference)






    return (
        <div>
            <h3>To Do Today</h3>
            <div>Dates</div>
        </div>
    )
}

export default ToDo;