import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import classes from "./Arrow.module.css";

const Arrow = (props) => {
  return (
    <Link className={classes.Link} smooth to="#Profile">
      <FontAwesomeIcon className={classes.Animation} size="5x" icon={faChevronDown} />
    </Link>
  );
};

export default Arrow;
