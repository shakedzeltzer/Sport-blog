import { makeStyles } from "@material-ui/core";
import React from "react";
import { footballImagesArr } from "../../../constants";
import { GameData } from "../../../entities/entities";
import GamePreview from "./gamePreview";

export interface IPropsIn {
  previewedGamesArr: GameData[];
}

export interface IPropsOut {}

interface IProps extends IPropsIn, IPropsOut {}

const useStyles = makeStyles({
  background: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    // backgroundColor: "red",
    marginTop: 10,
  },
  container: {
    width: "60%",
  },
});

const BasketballPage: React.FC<IProps> = ({ previewedGamesArr }) => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        {previewedGamesArr.map((gameData, index) => (
          <GamePreview
            key={index}
            gameData={gameData}
            imageUrl={footballImagesArr[index]}
          ></GamePreview>
        ))}
      </div>
    </div>
  );
};

export default BasketballPage;
