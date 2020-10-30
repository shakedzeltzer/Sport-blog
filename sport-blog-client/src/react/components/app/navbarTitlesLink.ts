import { connect } from "react-redux";
import { navbarTitles } from "../../../constants";
import { generateMazeMatrix } from "../../../store/actions/gamesAction";
import { IState } from "../../../store/reducers/reducer";
import NavbarTitles, { IPropsIn, IPropsOut } from "../presentation/navbarTitles";

interface ownProps {
}

const mapStateToProps = (state: IState, ownProps:ownProps): IPropsIn => {
    return {
        navbarTitles: navbarTitles
    }
}

const mapDispatchToProps = (dispatch: any): IPropsOut => {
    return {
        routeClick: (category) => {
            dispatch(generateMazeMatrix(category))
        }
    }
}

export const NavbarTitlesLink = connect(mapStateToProps, mapDispatchToProps)(NavbarTitles);