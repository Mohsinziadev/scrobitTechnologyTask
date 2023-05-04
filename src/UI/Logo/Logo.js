import React from "react";
import websiteLogo from "../../assets/websiteLogo.png";
import classes from "./Logo.module.scss";

const Logo = () => {
    return (
      <a href="/" className={classes.logo}>
        <img src={websiteLogo} className={classes.logo__logoimage} alt="" />
        <span>MBLK</span>
      </a>
    );
};

export default Logo;
