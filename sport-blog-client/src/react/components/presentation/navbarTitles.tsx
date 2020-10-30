import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { INavbarTitle } from "./navbar";
import { Link } from "react-router-dom";

export interface IPropsIn {
  navbarTitles: INavbarTitle[];
}

export interface IPropsOut {
  routeClick: (category: string) => void;
}

interface IProps extends IPropsIn, IPropsOut {}

const useStyles = makeStyles(() => ({
  link: {
    color: "Black",
    textDecoration: "none",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
}));

const NavbarTitles: React.FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      {props.navbarTitles.map((title, index) => (
        <Link
          key={index}
          className={classes.link}
          to={`/${title.route}`}
          onClick={() => props.routeClick(title.route)}
        >
          <Button color="inherit" key={title.title} className={classes.title}>
            {title.title}
          </Button>
        </Link>
      ))}
    </>
  );
};

export default NavbarTitles;
