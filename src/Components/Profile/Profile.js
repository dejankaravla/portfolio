import React from "react";

import ProfileImage from "./Profile-Image/Profile-Image";
import ProfileInfo from "./Profile-Info/Profile-Info";
import classes from "./Profile.module.css";

const Profile = (props) => (
  <div className={classes.Profile}>
    <ProfileImage />

    <ProfileInfo />
  </div>
);

export default Profile;
