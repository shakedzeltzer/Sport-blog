import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { GameComment, GameData } from "../../../entities/entities";
import GamePreview from "./gamePreview";
import Comment from "./comment";
import NoComment from "./noComments";
import AddComment from "./addComment";

export interface IPropsIn {
  gameData: GameData;
  imageUrl: string;
  previewedComments: GameComment[];
}

export interface IPropsOut {
  onRender: (gameId: number) => void;
  onCommentAdd: (gameId: number, commentData: string) => void;
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
  commentsDiv: {
    height: "50vh",
    maxHeight: "50vh",
    overflowY: "auto",
  },
});

const CommentsPage: React.FC<IProps> = ({
  gameData,
  imageUrl,
  previewedComments,
  onRender,
  onCommentAdd,
}) => {
  const classes = useStyles();

  useEffect(() => {
    onRender(gameData.ID);
  }, []);

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <GamePreview gameData={gameData} imageUrl={imageUrl}></GamePreview>
        <div className={classes.commentsDiv}>
          {previewedComments.length > 0 ? (
            previewedComments.map((comment, index) => (
              <Comment key={index} comment={comment}></Comment>
            ))
          ) : (
            <NoComment></NoComment>
          )}
        </div>
        <AddComment
          gameId={gameData.ID}
          onCommentAdd={onCommentAdd}
        ></AddComment>
      </div>
    </div>
  );
};

export default CommentsPage;
