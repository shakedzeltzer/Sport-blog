import { GameData, IAction } from "../../entities/entities";
import { IActionPreviewdGamesUpdate, PREVIEWD_GAMES_UPDATE } from "../actions/gamesAction";

export function gamesReducer(previewedGamesArr: GameData[], action:IAction): GameData[] {
    switch (action.type) {
        case PREVIEWD_GAMES_UPDATE: {
            const previewGamesUpdateAction = action as IActionPreviewdGamesUpdate
            previewedGamesArr = previewGamesUpdateAction.previewedGamesArr;
            return previewedGamesArr;
        }
        default: {
            return previewedGamesArr
        }
    }
}