import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { GameData } from "../../../entities/entities";
import { Link } from "react-router-dom";

interface IProps {
  gameData: GameData;
  imageUrl: string;
}

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginBottom: "5px",
  },
  media: {
    width: "20%",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const GamePreview: React.FC<IProps> = ({ gameData, imageUrl }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.container}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`${gameData.TEAM_A} - ${gameData.TEAM_B}`}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {`${gameData.SCORE_A} - ${gameData.SCORE_B}`}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {gameData.GAME_DATE.toString()}
          </Typography>
        </CardContent>
        <img
          className={classes.media}
          src={imageUrl}
          title="Contemplative Reptile"
        ></img>
      </CardActionArea>
    </Card>
  );
};

export default GamePreview;
