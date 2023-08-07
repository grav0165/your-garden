import React, { useState } from 'react';
import './Search.css'

// importing search results component
import SearchResults from '../SearchResults/SearchResults';

// Importing MUI components
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import { createTheme, ThemeProvider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

// Importing dispatches for redux
import { useDispatch } from 'react-redux';



function Search() {
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
        event.preventDefault();
        dispatch({
            type: 'SEARCH_API',
            payload: plantInput
        })

    }

    return (

            <div className='search-page'>
                <div className='search-form'>
                    <Card elevation={8} sx={{ width: '90%', padding: 3, display: 'flex', gap: 1 }}>
                        <TextField
                            id="filled-basic"
                            variant='filled'
                            label="Search for a Plant"
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <SearchIcon />
                                  </InputAdornment> ), }}
                            onChange={(event) => setPlantInput(event.target.value)}
                            sx={{ width: 300 }}
                            color="success"
                            required
                        /> 
                        <Button variant="text" color="success" onClick={(event) => handleSearchApi(event)}>Search</Button>
                    </Card>
                </div>
                <div className='search-results'>
                    <SearchResults></SearchResults>
                </div>
            </div>

    )

}


export default Search;