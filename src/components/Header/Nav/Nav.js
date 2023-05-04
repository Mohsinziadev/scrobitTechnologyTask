import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../UI/Button/Button";
import classes from "./Nav.module.scss";

const Nav = ({ isMenu }) => {
    return (
      <nav className={isMenu ? classes.menu__nav : classes.nav}>
        <ul>
          <li>
            <Link to="/">Intro Video</Link>
          </li>
          <li>
            <Link to="/">Referral Program</Link>
          </li>
          <li>
            <Link to="/">Buy now</Link>
          </li>
          <li>
            <Link to="/">MBLK Vision</Link>
          </li>
          <li>
            <Link to="/">Tokenomics</Link>
          </li>
          <li>
            <Link to="/">how to buy</Link>
          </li>
          <li>
            <Link to="/">Press & Media</Link>
          </li>
        </ul>
        <div className={classes.nav__buttons}>
          <Button
            to="/booknow"
            outline
            className={classes.nav__buttons__connect}
          >
            Connect wallet
          </Button>
          <Button to="/booknow" className={classes.resale}>
            JOIN PRESALE
          </Button>
        </div>
      </nav>
    );
};

export default Nav;
