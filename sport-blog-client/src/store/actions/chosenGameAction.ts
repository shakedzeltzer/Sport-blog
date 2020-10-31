import { IAction, GameData } from "../../entities/entities";

export const SET_CHOSEN_GAME = "SET_CHOSEN_GAME";

export interface IActionSetChosenGame extends IAction {
  chosenGame: GameData
}

export function setChosenGame(chosenGame: GameData): IActionSetChosenGame {
  return {
    type: SET_CHOSEN_GAME,
    chosenGame: chosenGame,
  };
}