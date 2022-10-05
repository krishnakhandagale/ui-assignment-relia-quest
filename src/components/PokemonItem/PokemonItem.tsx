import { useNavigate } from "react-router-dom";
import { Pokemon } from "../../hooks/types";
import { Chips } from "../Chips";
import { LazyImage } from "../LazyLoadImage";
import { useStyles } from "./PokemonItem.styled";

export const PokemonItem: React.FC<Pokemon> = ({ id, name, image, number, types }:Pokemon) =>{
    const classes = useStyles();
    const navigate = useNavigate();
    const onClickPokemon = (id : string, name: string)=>{
        navigate(`${id}/${name}`);
    }
    return  <div className={classes.pkmListItemCnt} onClick={()=> onClickPokemon(id, name)}>
    <div className={classes.imgCnt}>
      <LazyImage url={image}/>
    </div>
    
    <div className={classes.pkmDetailsCnt}>
      <div className={classes.pkmDetailsSubCnt}>
      <div className={classes.pkmNumber}>#{number}</div>
      <div className={classes.pkmName}>{name}</div>
      </div>
      <div className={classes.pkmTypesCnt}>
        {types.map((value, index)=>{
          return <Chips backgroundColor="#043b5c" 
          key={index} title={value}></Chips>
        })}
        </div>
    </div>
  </div>
}