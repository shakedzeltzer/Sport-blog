import { gameData } from "../../constants";
import { GameData, IAction } from "../../entities/entities";
import { gamesReducer } from "./gameReducer";

export interface IState {
    previewedGamesArr: GameData[]
}

export const initialState:IState = {
    previewedGamesArr: []
}

export function reducer(state: IState | undefined, action: IAction): IState {
    if (state === undefined) {
        state = initialState;
    }
    return {
        previewedGamesArr: gamesReducer(state.previewedGamesArr, action)
    }
}