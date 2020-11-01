import { connect } from "react-redux";
import { IState } from "../../../store/reducers/reducer";
import CommentsPage, { IPropsIn, IPropsOut } from "../presentation/commentsPage";
import basketball2 from '../../../assets/basketball2.jpg'
import { addCommentToDb, fetchPreviewdComments } from "../../../store/actions/commentsAction";

interface ownProps {
}

const mapStateToProps = (state: IState, ownProps:ownProps): IPropsIn => {
    return {
        gameData: state.chosenGame,
        imageUrl: basketball2,
        previewedComments: state.previewedComments
    }
}

const mapDispatchToProps = (dispatch: any): IPropsOut => {
    return {
        onRender: (gameId: number) => {
            dispatch(fetchPreviewdComments(gameId))
        },
        onCommentAdd: (gameId: number, commentData: string) => {
            dispatch(addCommentToDb(gameId, commentData))
        }
    }
}

export const CommentPageLink = connect(mapStateToProps, mapDispatchToProps)(CommentsPage);