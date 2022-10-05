import { createUseStyles } from "react-jss";
import { Props } from "./types";

type RuleNames = 'loader';

export const useStyles = createUseStyles<RuleNames, Props>(
    {
        loader: {
            position: 'fixed',
            top: '50%',
            left: '50%',
            zIndex: '9999',
            width: (props) => props.size === 'sm' ? '24px': 
            (props.size === 'md' ? '42px' : '64px'),
            animation: 'zoom-in-zoom-out 1s ease infinite'
        }
    },{
        name: 'Loader'
    });