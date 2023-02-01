import React from 'react';
import {Button} from "@mui/material";


const MyButton = ({children, ...props}) => {
    return (
        <Button {...props} variant = "outlined">
            {children}
        </Button>
    );
};

export default MyButton;