import {
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { GameComment } from "../../../entities/entities";

interface IPropsIn {}

interface IPropsOut {}

interface IProps extends IPropsIn, IPropsOut {}

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginBottom: "5px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const NoComment: React.FC<IProps> = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.container}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            There are no comments
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NoComment;
