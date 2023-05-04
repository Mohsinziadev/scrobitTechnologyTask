import React, { Fragment } from "react";
import cartoonimg from "../../assets/cartoonimg.png";
import classes from "./Hero.module.scss";

const BlurContent = () => {
    return (
      <Fragment>
        <div className={classes.hero__content__titleContainer}>
          <h1>Stage 1</h1>
          <h1>84.85% SOLD</h1>
        </div>
        <div className={classes.hero__content__totalRaised}>
          <div className={classes.hero__content__totalRaised__blue}>
            <h1>$4,993,505 / $5,885,000 total RAISED</h1>
          </div>
        </div>
        <div className={classes.hero__content__tokenSold}>
          <div className={classes.hero__content__tokenSold__bg}>
            <h1>
              486,423,431 <span>Tokens Sold</span>
            </h1>
          </div>
          <h1>
            68,576,569 <span>Remaining</span>
          </h1>
        </div>
        <div className={classes.hero__content__priceContent}>
          <div className={classes.hero__content__priceContent__titles}>
            <h1>STAGE 1 price: $0.014 USDT = 1 $MBLK</h1>
            <h1>
              Next STAGE price: $0.015 USDT = 1 $MBLK
            </h1>
          </div>
          <div className={classes.hero__content__priceContent__buyTokenbtn}>
            <button>Buy tokens</button>
          </div>
        </div>
      </Fragment>
    );
};

const Hero = () => {
    return (
      <div className={classes.container}>
        <div className={classes.hero}>
          <div className={classes.hero__herocontent}>
            <div className={classes.hero__herocontent__leftContent} >
              <h3 className={classes.hero__herocontent__leftContent__title}>
                Get in Early on the  $MBLK Pre-Sale
              </h3>
              <p className={classes.hero__herocontent__leftContent__para}>
                <span>$MBLK </span>is an ERC20 utility token on the Ethereum
                network that serves as the main in-game currency in{" "}
                <span>Legends of Bezogia.</span> Developed by Zogi Labs, $MBLK
                offers players and investors a unique opportunity to be a part
                of the <span>future of gaming and blockchain technology.</span>
              </p>
              <div className={classes.hero__content}>{<BlurContent />}</div>
            </div>
            <div className={classes.hero__herocontent__rightContent}>
              <img src={cartoonimg} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;
