import { AlertColor } from "@mui/material";

export interface Props {
    message?: string;
    severity: AlertColor;
    opened: boolean;
}