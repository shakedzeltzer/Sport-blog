import { GameComment, GameData, IAction } from "../../entities/entities";
import { SET_CHOSEN_GAME, IActionSetChosenGame } from "../actions/chosenGameAction";
import { IActionSetPreviewdComments, SET_PREVIEWD_COMMENTS } from "../actions/commentsAction";


export function commentsReducer(previewedComments: GameComment[], action:IAction): GameComment[] {
    switch (action.type) {
        case SET_PREVIEWD_COMMENTS: {
            const setPreviewedComments = action as IActionSetPreviewdComments
            previewedComments = setPreviewedComments.previewedComments;
            return previewedComments;
        }
        default: {
            return previewedComments
        }
    }
}