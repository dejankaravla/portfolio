import React from "react";
import classes from "./Skills.module.css";

const Skills = (props) => (
  <div className={classes.Skills} id="Skills">
    <div>
      <h1>Skills</h1>
      <h3>“Life without knowledge is death in disguise.” - Talib Kweli</h3>
    </div>
    <div>
      <div className={classes.DevelopmentSkillsLanguage}>
        <p className={classes.Line}></p>
        <h2>Development Skills</h2>
        <div className={classes.DevelopmentSkills}>
          <p>HTML</p>
          <p>CSS</p>
          <p>SASS/SCSS</p>
          <p>JavaScript</p>
          <p>WebPack</p>
          <p>Parcel</p>
          <p>TypeScript</p>
          <p>React.js</p>
        </div>
      </div>
      <div className={classes.DevelopmentSkillsLanguage}>
        <p className={classes.Line}></p>
        <h2>Languages</h2>
        <div className={classes.LanguageSkills}>
          <p>Serbian (Native)</p>
          <p>English (Daily use)</p>
          <p>Francais (B1)</p>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
