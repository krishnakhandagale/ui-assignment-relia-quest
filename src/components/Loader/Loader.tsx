import { useStyles } from "./Loader.styled"
import { Props } from "./types"

export const Loader: React.FC<Props> = (props: Props)=>{
    const classes = useStyles(props);
    return <img className={classes.loader} src="/pokeball.png"/>
}