import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';

function Search () {
    const dispatch = useDispatch();


    const queryText = 10;

    const handleSearch = () => {
        console.log('Clicked search button')
        dispatch({
            type: 'SEARCH_API',
            payload: queryText
        })
    }

    return (
        <Button variant="contained" onClick={handleSearch}>Search</Button>
    )

}


export default Search;