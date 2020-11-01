import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { footballImagesArr } from "../../../constants";
import { GameData } from "../../../entities/entities";
import GamePreview from "./gamePreview";
import { Link } from "react-router-dom";

export interface IPropsIn {
  previewedGamesArr: GameData[];
}

export interface IPropsOut {
  onRender: (category: string) => void;
  setChosenGame: (gameData: GameData) => void;
}

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
    maxHeight: "80vh",
    overflowY: "auto",
  },
  link: {
    textDecoration: "none",
  },
});

const BasketballPage: React.FC<IProps> = ({
  previewedGamesArr,
  onRender,
  setChosenGame,
}) => {
  const classes = useStyles();

  useEffect(() => {
    onRender("basketball");
    console.log("Basketball fetched");
  }, []);

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        {previewedGamesArr.map((gameData, index) => (
          <Link
            key={index}
            to="/comments"
            className={classes.link}
            onClick={() => setChosenGame(gameData)}
          >
            <GamePreview
              gameData={gameData}
              imageUrl={footballImagesArr[index % footballImagesArr.length]}
            ></GamePreview>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BasketballPage;
