import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { basketballImagesArr } from "../../../constants";
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
  },
  link: {
    textDecoration: "none",
  },
});

const FootballPage: React.FC<IProps> = ({
  previewedGamesArr,
  onRender,
  setChosenGame,
}) => {
  const classes = useStyles();

  useEffect(() => {
    onRender("football");
    console.log("Football fetched");
  }, []);

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        {previewedGamesArr.map((gameData, index) => (
          <Link
            to="/comments"
            className={classes.link}
            onClick={() => setChosenGame(gameData)}
          >
            <GamePreview
              key={index}
              gameData={gameData}
              imageUrl={basketballImagesArr[index]}
            ></GamePreview>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FootballPage;
