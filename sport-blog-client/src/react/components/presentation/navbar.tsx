import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { NavbarTitlesLink } from "../app/navbarTitlesLink";

interface IProps {
  navbarTitles: INavbarTitle[];
}

export interface INavbarTitle {
  title: string;
  route: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolBar: {
    display: "flex",
    justifyContent: "center",
    "& *": {
      marginRight: "10px",
      marginLeft: "10px",
    },
  },
  appBar: {
    background: "rgba(163, 161, 157, 0.3)",
  },
}));

const Navbar: React.FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <i className="fas fa-home"></i>
          </IconButton>
          <NavbarTitlesLink></NavbarTitlesLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
