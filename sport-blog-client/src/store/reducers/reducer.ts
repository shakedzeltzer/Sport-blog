import { gameData } from "../../constants";
import { GameComment, GameData, IAction } from "../../entities/entities";
import { chosenGameReducer } from "./chosenGameReducer";
import { commentsReducer } from "./commentsReducer";
import { gamesReducer } from "./gameReducer";

export interface IState {
    previewedGamesArr: GameData[],
    chosenGame: GameData,
    previewedComments: GameComment[]
}

export const initialState:IState = {
    previewedGamesArr: [],
    chosenGame: {
        ID: 1,
        TEAM_A: '',
        TEAM_B: '',
        SCORE_A: 0,
        SCORE_B: 0,
        GAME_DATE: new Date(),
        CATEGORY: ""
    },
    previewedComments:[]
}

export function reducer(state: IState | undefined, action: IAction): IState {
    if (state === undefined) {
        state = initialState;
    }
    return {
        previewedGamesArr: gamesReducer(state.previewedGamesArr, action),
        chosenGame: chosenGameReducer(state.chosenGame, action),
        previewedComments: commentsReducer(state.previewedComments, action)
    }
}