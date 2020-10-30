import { connect } from "react-redux";
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
    }
}

export const FootballPageLink = connect(mapStateToProps, mapDispatchToProps)(FootballPage);