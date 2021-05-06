import React from "react";

import classes from "./Contact.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

const Contact = (props) => (
  <div className={classes.Contact} id="Contact">
    <div className={classes.Heading}>
      <h1>Contact</h1>
      <h3>“If I had asked people what they wanted, they would have said faster horses. ” - Henry Ford</h3>
    </div>
    <p className={classes.Line}></p>
    <div className={classes.Links}>
      <a href="mailto:karavla013@gmail.com" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faAt} /> karavla013@gmail.com
      </a>
      <a href="https://www.facebook.com/dejan.karavla/" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faFacebook} />
        Facebook
      </a>
      <a href="https://www.instagram.com/karavla_dejan/" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faInstagram} /> Instagram
      </a>
      <a href="https://www.linkedin.com/in/dejan-karavla-4554301b9/" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} /> Linkedin
      </a>
      <a href="https://github.com/dejankaravla" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faGithub} /> GitHub
      </a>
    </div>
  </div>
);

export default Contact;
