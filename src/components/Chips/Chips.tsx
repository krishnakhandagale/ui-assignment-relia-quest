import { useStyles } from "./Chips.styled"
import { Props } from "./types"

export const Chips:React.FC<Props> = ({title, textColor, backgroundColor}: Props)=>{
    const classes = useStyles({title,textColor, backgroundColor});
    return (<div className={classes.chipsCnt}>
            {title} 
         </div>);

}