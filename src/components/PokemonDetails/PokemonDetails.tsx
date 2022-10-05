import { PokemonDetailsOption } from "../../hooks/types";
import { Chips } from "../Chips";
import { useStyles } from "./PokemonDetails.styled";

export const PokemonDetails: React.FC<PokemonDetailsOption> = ({ image, types, classification, resistant, weaknesses, weight, height }: PokemonDetailsOption) => {
  const classes = useStyles();

  return <div>
    <div className={classes.pkmImageCnt}>
      <img className={classes.pkmImage} src={image} loading='lazy' />
    </div>
    <div className={classes.pkmDetailsCnt}>
      <div className={classes.classificationCnt}>
        {classification}
      </div>
      <div className={classes.chipsContainer}>
        <label className={classes.label}>Type</label>
        <div>
          {types.map((value, index) => {
            return <Chips backgroundColor="#043b5c"
              key={index} title={value}></Chips>
          })}
        </div>
      </div>

      <div className={classes.chipsContainer}>
        <label className={classes.label}>Resistant</label>
        <div>
          {resistant.map((value, index) => {
            return <Chips backgroundColor="#16a085"
              key={index} title={value}></Chips>
          })}
        </div>
      </div>

      <div className={classes.chipsContainer}>
        <label className={classes.label}>Weeknesses
        </label>
        <div>
          {weaknesses.map((value, index) => {
            return <Chips backgroundColor="#96281b"
              key={index} title={value}></Chips>
          })}
        </div>
      </div>

      <div className={classes.chipsContainer}>
        <label className={classes.label}>Weight</label>
        <div className={classes.colorValue}>
          {
            `${weight.minimum} - ${weight.maximum}`
          }
        </div>
      </div>

      <div className={classes.chipsContainer}>
        <label className={classes.label}>Height</label>
        <div className={classes.colorValue}>
          {
            `${height.minimum} - ${height.maximum}`
          }
        </div>

      </div>
    </div>
  </div>
}