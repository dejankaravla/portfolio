import React, { Fragment } from "react";
import classes from "./Profile-Info.module.css";
import Image from "../../../Images/DJL_8773.jpg";

import Nav from "../../Nav/Nav";

const ProfileInfo = (props) => (
  <Fragment>
    <div className={classes.ProfileInfo} id="Profile">
      <Nav />
      <div>
        <h1>Profile</h1>
        <h3>I'm creative Front End developer</h3>
        <p className={classes.Line}></p>
      </div>
      <div className={classes.ProfileInfoSecond}>
        <div className={classes.AboutMe}>
          <h2>About me</h2>
          <p className={classes.ProfileInfoDescripiton}>
            I am a Front End web developer with good knowledge of front-end techniques. I love structure and order and I
            also stand for quality. I love spending time on fixing little details and optimizing web apps. Also, I like
            working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.
            My goal is perfecting my Front End skills by working on harder projects. Also, I would like to learn
            Node.js, MongoDB, Express.js and others. In due time, I would like to move from Front End to Full Stack
            development.
          </p>
        </div>
        <div className={classes.ProfileImage}>
          <img src={Image} alt="my-img" />
          <div className={classes.ProfileDetails}>
            <h2>Details</h2>
            <div className={classes.ProfilePersonal}>
              <div className={classes.Name}>
                <p className={classes.Bold}>Name:</p>
                <p>Dejan Karavla</p>
              </div>
              <div className={classes.Age}>
                <p className={classes.Bold}>Age:</p>
                <p>31-years</p>
              </div>
              <div className={classes.Location}>
                <p className={classes.Bold}>Location:</p>
                <p>Pancevo, Serbia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default ProfileInfo;
