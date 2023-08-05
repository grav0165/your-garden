import React from "react";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import './LoadingSpinner.css'
import Button from '@mui/material/Button';
import { useState } from "react";

function LoadingSpinner() {

    const [open, setOpen] = useState(true);

  
    return (
      <div>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    );
}

export default LoadingSpinner;