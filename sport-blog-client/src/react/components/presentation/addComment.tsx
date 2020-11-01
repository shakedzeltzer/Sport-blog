import { Button, Card, CardContent, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

interface IPropsIn {
  gameId: number;
}

interface IPropsOut {
  onCommentAdd: (gameId: number, commentData: string) => void;
}

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
  textbox: {
    width: "100%",
    height: "100%",
    fontSize: 20,
  },
  cardContent: {
    width: "70%",
    height: "80px",
  },
  button: {
    border: "solid",
    width: "20%",
  },
});

const AddComment: React.FC<IProps> = ({ onCommentAdd, gameId }) => {
  const classes = useStyles();

  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  return (
    <Card className={classes.root}>
      <div className={classes.container}>
        <CardContent className={classes.cardContent}>
          <input
            type="text"
            className={classes.textbox}
            onChange={handleChange}
            value={inputValue}
          ></input>
        </CardContent>
        <Button
          color="inherit"
          className={classes.button}
          onClick={() => onCommentAdd(gameId, inputValue)}
        >
          Submit
        </Button>
      </div>
    </Card>
  );
};

export default AddComment;
