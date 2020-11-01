import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { GameComment } from "../../../entities/entities";
interface IPropsIn {
  comment: GameComment;
}

interface IPropsOut {}

interface IProps extends IPropsIn, IPropsOut {}

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

const Comment: React.FC<IProps> = ({ comment }) => {
  const classes = useStyles();

  const refactorDate = (gameDate: Date): string => {
    return gameDate.toString().replace("T", " ").replace(".000Z", "");
  };

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.container}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {comment.GAME_COMMENT}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {refactorDate(comment.COMMENT_TIME)}
          </Typography>
        </CardContent>
        <Avatar src="/broken-image.jpg" />
      </CardActionArea>
    </Card>
  );
};

export default Comment;
