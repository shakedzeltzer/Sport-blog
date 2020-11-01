import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { GameData } from "../../../entities/entities";

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

  const refactorDate = (gameDate: Date): string => {
    return gameDate.toString().replace("T", " ").replace(".000Z", "");
  };

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
            {refactorDate(gameData.GAME_DATE)}
          </Typography>
        </CardContent>
        <img
          className={classes.media}
          src={imageUrl}
          title="Contemplative Reptile"
          alt="Game"
        ></img>
      </CardActionArea>
    </Card>
  );
};

export default GamePreview;
