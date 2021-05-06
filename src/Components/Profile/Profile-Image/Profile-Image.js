import React from "react";
import classes from "./Profile-Image.module.css";
import Image from "../../../Images/Wallpaper/1.jpg";
import Writer from "./TypeWriter/TypeWritter";
import Arrow from "./Arrow/Arrow";

const ProfileImage = (props) => {
  return (
    <div className={classes.Profile}>
      <img src={Image} alt="background" />
      <div className={classes.Info}>
        <h1>Dejan Karavla</h1>
        <Writer />
        <Arrow />
      </div>
    </div>
  );
};

export default ProfileImage;
