import React from "react";
import classes from "./Projects.module.css";
import Burger from "../../Images/Burger.png";
import Recepti from "../../Images/Recepti.png";
import SaleMobi from "../../Images/Sale-Mobi.png";
import HouseOfBooks from "../../Images/HouseOfBooks.png";
import SocialMedia from "../../Images/The Social Media App.png";
import MasterySchool from "../../Images/Captureasdasd.PNG";
import FrontendBootcamp from "../../Images/FrontendBootcamp.PNG";
import GoogleClone from "../../Images/GoogleClone.PNG";
import NetflixClone from "../../Images/NetflixClone.PNG";
import Instagram from "../../Images/Instagram.PNG";
import DanitoImg from "../../Images/DanitoImg.PNG";
import DanitoAppImg from "../../Images/DanitoAppImg.PNG";
import Premier1Img from "../../Images/Premier1.PNG";
import Premier2Img from "../../Images/Premier2.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
            <a href="https://netflix-clone-77462.web.app/" rel="noreferrer" target="_blank">
              <img src={NetflixClone} alt="Netflix Clone" />
            </a>
            <div className={classes.ProjectInfo}>
              <p className={classes.PText}>Netflix Clone</p>
              <a href="https://github.com/dejankaravla/Netflix-Clone" rel="noreferrer" target="_blank">
                <FontAwesomeIcon className={classes.GitHub} size="4x" icon={faGithub} />
              </a>
              <p className={classes.ProjectDescription}>
                Netflix Clone. My attempt to clone Netflix. Alert(' As it is ilegal to display movies i imported movie
                trailers. Some new movies and series dont have trailers yet.' )
              </p>
            </div>
          </li>
          <li className={classes.PLink}>
            <a href="https://instagram-clone-eec78.web.app/" rel="noreferrer" target="_blank">
              <img src={Instagram} alt="Instagram Posts Clone" />
            </a>
            <div className={classes.ProjectInfo}>
              <p className={classes.PText}>Instagram Posts Clone</p>
              <a href="https://github.com/dejankaravla/Instagram-Post-Clone" rel="noreferrer" target="_blank">
                <FontAwesomeIcon className={classes.GitHub} size="4x" icon={faGithub} />
              </a>
              <p className={classes.ProjectDescription}>
                Instagram Posts Clone. My attempt to clone Instagram Posts. I wanted to create live connection with my
                Instagram account but the doc changed. Instagram does no longer suport instagram embed. The Instagram
                embed was replaced with Embed Read. To use Embed Read my app have to be approved by Instagram (Facebook)
                staff.
              </p>
            </div>
          </li>
          <li className={classes.PLink}>
            <a href="https://googl-clone-56cbe.web.app/" rel="noreferrer" target="_blank">
              <img src={GoogleClone} alt="Google Clone" />
            </a>
            <div className={classes.ProjectInfo}>
              <p className={classes.PText}>Google Clone</p>
              <a href="https://github.com/dejankaravla/Google-Clone" rel="noreferrer" target="_blank">
                <FontAwesomeIcon className={classes.GitHub} size="4x" icon={faGithub} />
              </a>
              <p className={classes.ProjectDescription}>Google Clone. My attempt to clone Google</p>
            </div>
          </li>
          <li className={classes.PLink}>
            <div className={classes.DanitoContainer}>
              <a href="https://danitoprototypewebsite.web.app/" rel="noreferrer" target="_blank">
                <img src={DanitoImg} alt="Danito web" />
              </a>
              <a href="https://danito-prototype.web.app/" rel="noreferrer" target="_blank">
                <img src={DanitoAppImg} alt="Danito web" />
              </a>
            </div>
            <div className={classes.ProjectInfo}>
              <p className={classes.PText}>Danito Website and App - In Development</p>
              {/* <a href="https://github.com/dejankaravla/Google-Clone" rel="noreferrer" target="_blank">
                <FontAwesomeIcon className={classes.GitHub} size="4x" icon={faGithub} />
              </a> */}
              <p className={classes.ProjectDescription}>
                My task is to develop a new website for Danito company and also develop an application for getting rough
                offer.
              </p>
            </div>
          </li>
          <li className={classes.PLink}>
            <div className={classes.DanitoContainer}>
              <a href="https://premier3-6a0ba.web.app/" rel="noreferrer" target="_blank">
                <img src={Premier2Img} alt="Premier web" />
              </a>
              <a href="https://premier2.web.app/" rel="noreferrer" target="_blank">
                <img src={Premier1Img} alt="Premier web" />
              </a>
            </div>
            <div className={classes.ProjectInfo}>
              <p className={classes.PText}>Premier Bet Projects</p>
              {/* <a href="https://github.com/dejankaravla/Google-Clone" rel="noreferrer" target="_blank">
                <FontAwesomeIcon className={classes.GitHub} size="4x" icon={faGithub} />
              </a> */}
              <p className={classes.ProjectDescription}>
                A small game and autosuggest function that I developed for Premier Bet.
              </p>
            </div>
          </li>
          <li className={classes.PLink}>
            <a href="https://sale-mobi.web.app/" rel="noreferrer" target="_blank">
              <img src={SaleMobi} alt="Sale-Mobi" />
            </a>
            <div className={classes.ProjectInfo}>
              <p className={classes.PText}>Mobile equipment store app - UnFinished</p>
              <a href="https://github.com/dejankaravla/Mobile-Store" rel="noreferrer" target="_blank">
                <FontAwesomeIcon className={classes.GitHub} size="4x" icon={faGithub} />
              </a>
              <div className={classes.LoginSection}>
                <div className={classes.Login}>
                  <p className={classes.LoginHost}>Admin Login: </p>
                  <p>Username: admin </p>
                  <p>Password: admin</p>
                </div>
                <div className={classes.Login}>
                  <p className={classes.LoginHost}>Client Login: </p>
                  <p>Username: client</p>
                  <p>Password: client</p>
                </div>
              </div>
              <p className={classes.ProjectDescription}>
                This is the app for ordering products. I developed it myself for local client. In this app you can login
                as an admin but you can also login as a client. The client and admin have different features. The Client
                can browse products, add them to the shopping cart, remove them from the shopping cart, adjust quantity
                and more. The Client can also order product. When the Client order something, he can go to orders
                section and there see his previous or new orders sorted by date. The Admin can add products, delete
                products, but he can not order product since he does not need to. He can also go to order section and
                there he has all orders sorted by date, but he can also select his Clients and browse orders of each
                client. This helps the Admin to see witch Client is ordering the most and more.{" "}
              </p>
            </div>
          </li>
          <li className={classes.PLink}>
            <a href="https://house-of-books-2995e.web.app/" rel="noreferrer" target="_blank">
              <img src={HouseOfBooks} alt="House of Books" />
            </a>
            <div className={classes.ProjectInfo}>
              <p className={classes.PText}>Books and Writers info app</p>
              <a href="https://github.com/dejankaravla/Book-Bus-app" rel="noreferrer" target="_blank">
                <FontAwesomeIcon className={classes.GitHub} size="4x" icon={faGithub} />
              </a>
              <p className={classes.ProjectDescription}>
                This is the app for finding the information about books and writers. Knowledge is a powerful thing, but
                how can you find the book that you are interested? This app helps with that. I found pretty messy, but
                large database about all sorts of kind information about books and writers. You can browse through
                suggested books and writers, read about suggested writers and books, read writers biography, find the
                books they published and read books description, date when the book is first published and even reed
                first sentence and see cover image. You can also search books and writers and see info about them.
              </p>
            </div>
          </li>
          <li className={classes.PLink}>
            <a href="https://social-network-4a0f2.web.app/" rel="noreferrer" target="_blank">
              <img src={SocialMedia} alt="House of Books" />
            </a>
            <div className={classes.ProjectInfo}>
              <p className={classes.PText}>Social Network App</p>
              <a href="https://github.com/dejankaravla/Social-Network" rel="noreferrer" target="_blank">
                <FontAwesomeIcon className={classes.GitHub} size="4x" icon={faGithub} />
              </a>
              <p className={classes.ProjectDescription}>
                The interface that I developed is for the apps Admin. In this app, Admin can see all the users that are
                using the app and see the info about them. The Admin can also see selected users friends, mutual friends
                and suggested friends. There is the json file with the info about all the users. I plan to make it huge
                by creating more stuff.
              </p>
            </div>
          </li>

          <li className={classes.PLink}>
            <a href="https://bootstrap-project-91741.web.app/" rel="noreferrer" target="_blank">
              <img src={FrontendBootcamp} alt="Frontend Bootcamp" />
            </a>
            <div className={classes.ProjectInfo}>
              <p className={classes.PText}>Frontend Bootcamp</p>
              <a href="https://github.com/dejankaravla/Bootstrap-Project" rel="noreferrer" target="_blank">
                <FontAwesomeIcon className={classes.GitHub} size="4x" icon={faGithub} />
              </a>
              <p className={classes.ProjectDescription}>
                Small project that I developed using bootstrap. The goal of the project was: Mastering bootstrap and
                building responsive website without using mediea queries.
              </p>
            </div>
          </li>
          <li className={classes.PLink}>
            <a href="https://noformat-50288.web.app/" rel="noreferrer" target="_blank">
              <img src={MasterySchool} alt="Mastery School of Hawken" />
            </a>
            <div className={classes.ProjectInfo}>
              <p className={classes.PText}>Mastery School of Hawken</p>
              <a href="https://github.com/dejankaravla/NoFormat-Project" rel="noreferrer" target="_blank">
                <FontAwesomeIcon className={classes.GitHub} size="4x" icon={faGithub} />
              </a>
              <p className={classes.ProjectDescription}>Small HTML and CSS project with the focus on design.</p>
            </div>
          </li>
          <li className={classes.PLink}>
            <a href="https://react-my-burger-f7f49.web.app/" rel="noreferrer" target="_blank">
              <img src={Burger} alt="Burger page" />
            </a>
            <div className={classes.ProjectInfo}>
              <p className={classes.PText}>Burger-Builder</p>
              <a href="https://github.com/dejankaravla/Burger-Builder" rel="noreferrer" target="_blank">
                <FontAwesomeIcon className={classes.GitHub} size="4x" icon={faGithub} />
              </a>
              <p className={classes.ProjectDescription}>
                The Burger Builder is the app that I developed through React Course. Using the app you can make the
                burger by adding ingredients. The burger without ingredients have a base price and every ingredient has
                his own price. When you are finished with making the burger, you can order by passing your information.
                Then you can see your order in the order section. Also, you can register or login. When you are logged
                in, you can see your orders in the order section. For the back end, the Burger Builder app is using
                Google Firebase.
              </p>
            </div>
          </li>
          <li className={classes.PLink}>
            <a href="https://forkify-dejan.netlify.app/" rel="noreferrer" target="_blank">
              <img src={Recepti} alt="Recipe page" />
            </a>
            <div className={classes.ProjectInfo}>
              <p className={classes.PText}>Forkify-Recipes</p>
              <a href="https://github.com/dejankaravla/fokify" rel="noreferrer" target="_blank">
                <FontAwesomeIcon className={classes.GitHub} size="4x" icon={faGithub} />
              </a>
              <p className={classes.ProjectDescription}>
                Forkify Recipes is my first bigger course project. The purpose of this app is to browse cooking recipes.
                The app has search bar where you can search recipes and see searched results. When you select a recipe,
                you can see ingredients that you need. Also, you can bookmark the recipe, but also add your own recipe.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
