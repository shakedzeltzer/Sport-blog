import { connect } from "react-redux";
import { IState } from "../../../store/reducers/reducer";
import BasketballPage, { IPropsIn, IPropsOut } from "../presentation/BasketballPage";

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

export const BasketballPageLink = connect(mapStateToProps, mapDispatchToProps)(BasketballPage);