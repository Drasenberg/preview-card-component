import React from "react";
import classes from "../styles/Card.module.scss";
import cardImage from "../images/image-equilibrium.jpg";
import ethIcon from "../images/icon-ethereum.svg";
import clockIcon from "../images/icon-clock.svg";
import avatarImage from "../images/image-avatar.png";

function Card() {
  return (
    <div className={classes.mainCard}>
      <div className={classes.container}>
        <div className={classes.img}>
          <img src={cardImage} alt="Equilibrium" className={classes.image} />
        </div>
        <h1>Equilibrium #3429</h1>
        <p className={classes.description}>
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className={classes.expansInfo}>
          <div className={classes.amount}>
            <img src={ethIcon} alt="etherum icon" />
            <p>0.041 ETH</p>
          </div>
          <div className={classes.timeLeft}>
            <img src={clockIcon} alt="clock" />
            <p>3 days left</p>
          </div>
        </div>
        <div className={classes.line}></div>
        <div className={classes.author}>
          <img src={avatarImage} alt="avatar" />
          <p>
            Creation of <span>Jules Wyvern</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
