import React from "react";
import Backdrop, { backdropClasses } from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import './LoadingSpinner.css'

function LoadingSpinner() {

    return (
        <div className="spinner">
            <h1>SCAM</h1>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )

}

export default LoadingSpinner;