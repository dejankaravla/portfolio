import React from "react";

import { HashLink as Link } from "react-router-hash-link";

import classes from "./Nav.module.css";

const Nav = (props) => {
  return (
    <div className={classes.Nav}>
      <ul>
        <li>
          <Link className={classes.Link} smooth to="#Profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className={classes.Link} smooth to="#Experiences">
            Exepiences
          </Link>
        </li>
        <li>
          <Link className={classes.Link} smooth to="#Skills">
            Skills
          </Link>
        </li>
        <li>
          <Link className={classes.Link} smooth to="#Projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className={classes.Link} smooth to="#Contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
