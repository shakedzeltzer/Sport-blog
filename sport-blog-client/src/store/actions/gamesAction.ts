import { ThunkAction } from "redux-thunk";
import { GameData, IAction } from "../../entities/entities";
import { IState } from "../reducers/reducer";

export const PREVIEWD_GAMES_UPDATE = "PREVIEWED_GAMES_UPDATE";

export interface IActionPreviewdGamesUpdate extends IAction {
  previewedGamesArr: GameData[]
}

export function previewedGamesUpdate(previewedGamesArr: GameData[]): IActionPreviewdGamesUpdate {
  return {
    type: PREVIEWD_GAMES_UPDATE,
    previewedGamesArr: previewedGamesArr,
  };
}

export function fetchPreviewdGames(category: string): ThunkAction<void, IState, undefined, IAction> {
  return (dispatch, getState) => {
      fetch(`http://localhost:2000/games/${category}`)
      .then ((res) => res.json())
        .then((gameData:GameData[]) => {     
          console.log(gameData);
          dispatch(previewedGamesUpdate(gameData))
      });
  };
}