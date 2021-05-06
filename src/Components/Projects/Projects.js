import React from "react";
import classes from "./Projects.module.css";
import Burger from "../../Images/Burger.png";
import Recepti from "../../Images/Recepti.png";
import SaleMobi from "../../Images/Sale-Mobi.png";
import HouseOfBooks from "../../Images/HouseOfBooks.png";

const Projects = (props) => {
  return (
    <div className={classes.Projects} id="Projects">
      <div className={classes.ProjectHeading}>
        <h1>Projects</h1>
        <h3>“You can do anything you set your mind to.” - Benjamin Franklin</h3>
      </div>
      <p className={classes.Line}></p>
      <div className={classes.ProjectsItems}>
        <ul>
          <li className={classes.PLink}>
            <p className={classes.PText}>Forkify-Recipes</p>
            <a href="https://forkify-dejan.netlify.app/" rel="noreferrer" target="_blank">
              <img src={Recepti} alt="Recipe page" />
            </a>
          </li>
          <li className={classes.PLink}>
            <p className={classes.PText}>Burger-Builder</p>
            <a href="https://react-my-burger-f7f49.web.app/" rel="noreferrer" target="_blank">
              <img src={Burger} alt="Burger page" />
            </a>
          </li>
          <li className={classes.PLink}>
            <p className={classes.PText}>Mobile equipment store app</p>
            <a href="https://sale-mobi.web.app/" rel="noreferrer" target="_blank">
              <img src={SaleMobi} alt="Sale-Mobi" />
            </a>
          </li>
          <li className={classes.PLink}>
            <p className={classes.PText}>Books and Writers info app</p>
            <a href="https://house-of-books-2995e.web.app/" rel="noreferrer" target="_blank">
              <img src={HouseOfBooks} alt="House of Books" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
