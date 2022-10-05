import { createUseStyles } from "react-jss";
import { Props } from "./types";

type RuleNames = 'chipsCnt';

export const useStyles = createUseStyles<RuleNames, Props>(
    {
        chipsCnt: {
            padding: '4px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color:(props) => props.textColor ? props.textColor: 'white',
            background: (props) => props.backgroundColor ? props.backgroundColor: 'rgb(19, 25, 36)',
            borderRadius: '20px',
            fontSize: '14px'
        }
    },{
        name: 'Chips'
    });