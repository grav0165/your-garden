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
import { responsiveFontSizes, createTheme, ThemeProvider } from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';


// Importing dispatches for redux
import { useDispatch } from 'react-redux';

// MUI theme information 
// let theme = createTheme();
// theme = responsiveFontSizes(theme);
let theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#a0c49d',
        },
        secondary: {
            main: '#c4d7b2',
        },
        background: {
            paper: '#a0c49d',
            default: '#e1ecc8',
        },
        error: {
            main: '#e06469',
        },
        warning: {
            main: '#f2b6a0',
        },
        info: {
            main: '#dedea7',
        },
    },

},);
theme = responsiveFontSizes(theme)


function Search() {
    // sourcing dispatch to use on button clicks
    const dispatch = useDispatch();

    // Using state to hold text input
    const [plantInput, setPlantInput] = useState('')


    // Search through API request
    const handleSearchApi = (event) => {
        event.preventDefault();
        if (!plantInput) {
            console.log('Try to input something')
                
        } else {
    dispatch({
        type: 'SEARCH_API',
        payload: plantInput
    })
}
    }

return (

    <div className='search-page'>
        <div className='search-form'>
            <ThemeProvider theme={theme}>
                <Card elevation={8} sx={{ width: '90%', padding: 3, display: 'flex', gap: 1, marginBottom: 3 }}>
                    <TextField
                        id="filled-basic"
                        variant='filled'
                        label="Search for a Plant"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>),
                        }}
                        onChange={(event) => setPlantInput(event.target.value)}
                        sx={{ width: 300 }}
                        color="success"
                        required
                    />
                    <Button variant="text" color="success" onClick={(event) => handleSearchApi(event)}>Search</Button>
                </Card>
            </ThemeProvider>
        </div>
        <div className='search-results'>
            <SearchResults></SearchResults>
        </div>

    </div>

)

}


export default Search;