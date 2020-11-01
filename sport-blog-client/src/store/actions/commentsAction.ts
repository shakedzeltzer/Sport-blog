import { ThunkAction } from "redux-thunk";
import { IAction, GameComment } from "../../entities/entities";
import { IState } from "../reducers/reducer";

export const SET_PREVIEWD_COMMENTS = "SET_PREVIEWD_COMMENTS";

export interface IActionSetPreviewdComments extends IAction {
  previewedComments: GameComment[]
}

export function setPreviewedComments(previewedComments: GameComment[]): IActionSetPreviewdComments {
  return {
    type: SET_PREVIEWD_COMMENTS,
    previewedComments: previewedComments,
  };
}

export function fetchPreviewdComments(gameId: number): ThunkAction<void, IState, undefined, IAction> {
  return (dispatch, getState) => {
      fetch(`http://localhost:2000/comments/${gameId}`)
      .then ((res) => res.json())
        .then((res) => {     
          console.log(res);
        dispatch(setPreviewedComments(res))
      });
  };
}

export function addCommentToDb(gameId: number, commentData: string): ThunkAction<void, IState, undefined, IAction> {
    return (dispatch, getState) => {

    fetch('http://localhost:2000/comment', {
        method: 'post',
        body: JSON.stringify({
            "comment": commentData,
            "gameId": gameId
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then((res) => {
        dispatch(fetchPreviewdComments(gameId));
    })
  };
}