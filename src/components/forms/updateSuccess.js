import React from 'react';
import {Button, Typography } from "@material-ui/core";

const UpdateSuccess = ({backToLogin}) => {
    return (
        <div className="updatedsuc">
            <div>
                <Typography component="h2" variant="h6">Updated Successfully</Typography>
                <Button 
                variant="contained"
                color="primary" onClick={backToLogin}>Back to Login</Button>
            </div>
        </div>
    )
}

export default UpdateSuccess
