import { Alert, Snackbar } from "@mui/material"
import { useState } from "react";
import { Props } from "./types";

export const Toast: React.FC<Props> = ({ message, severity, opened }: Props) => {

    const [open, setOpen] = useState(opened);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        event?.stopPropagation();
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    return <Snackbar open={open} autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
        }}>
        <Alert onClose={handleClose} severity={severity}>
            {message}
        </Alert>
    </Snackbar>
}