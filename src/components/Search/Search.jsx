import React, { useState } from 'react';
import './Search.css'

// importing search results component
import SearchResults from '../SearchResults/SearchResults';

// Importing MUI components
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// Importing dispatches for redux
import { useDispatch } from 'react-redux';

function Search () {
    // sourcing dispatch to use on button clicks
    const dispatch = useDispatch();

    // Using state to hold text input
    const [plantInput, setPlantInput] = useState('')



    // Temporary details on click button
    const handleDetails = () => {
        console.log('Clicked details button')
        dispatch({
            type: 'SEARCH_API'
        })
    }

    // Search through API request
    const handleSearchApi = (event) => {
        console.log('making a request for search through API clicked')
        event.preventDefault();
        dispatch({ 
            type: 'SEARCH_API',
            payload: plantInput
        })
    }

    return (
        <div className='search-page'>
            <div className='search-form'>
                <TextField 
                id="filled-basic" 
                label="Search for a Plant" 
                onChange={(event) => setPlantInput(event.target.value)}
                /> <Button onClick={handleSearchApi}>Submit</Button>
            </div>
            <div className='search-results'>
                <SearchResults></SearchResults>
            </div>
        
       
        </div>
    )

}


export default Search;