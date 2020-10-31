import { GameData, IAction } from "../../entities/entities";
import { SET_CHOSEN_GAME, IActionSetChosenGame } from "../actions/chosenGameAction";


export function chosenGameReducer(chosenGame: GameData, action:IAction): GameData {
    switch (action.type) {
        case SET_CHOSEN_GAME: {
            const setChosenGameAction = action as IActionSetChosenGame
            chosenGame = setChosenGameAction.chosenGame;
            return chosenGame;
        }
        default: {
            return chosenGame
        }
    }
}