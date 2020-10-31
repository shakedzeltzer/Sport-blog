import { connect } from "react-redux";
import { GameData } from "../../../entities/entities";
import { setChosenGame } from "../../../store/actions/chosenGameAction";
import { fetchPreviewdGames } from "../../../store/actions/gamesAction";
import { IState } from "../../../store/reducers/reducer";
import FootballPage, { IPropsIn, IPropsOut } from "../presentation/FootballPage";

interface ownProps {
}

const mapStateToProps = (state: IState, ownProps:ownProps): IPropsIn => {
    return {
        previewedGamesArr: state.previewedGamesArr
    }
}

const mapDispatchToProps = (dispatch: any): IPropsOut => {
    return {
        onRender: (category) => {
            dispatch(fetchPreviewdGames(category))
        },
        setChosenGame: (gameData: GameData) => {
            dispatch(setChosenGame(gameData))
        }
    }
}

export const FootballPageLink = connect(mapStateToProps, mapDispatchToProps)(FootballPage);