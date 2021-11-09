import React, { useEffect } from "react";

import ProfileImage from "./Profile-Image/Profile-Image";
import ProfileInfo from "./Profile-Info/Profile-Info";
import classes from "./Profile.module.css";

const Profile = (props) => {
  useEffect(() => {
    // window.onload(scrollTo)
  }, []);

  return (
    <div className={classes.Profile}>
      <ProfileImage />

      <ProfileInfo />
    </div>
  );
};
export default Profile;
