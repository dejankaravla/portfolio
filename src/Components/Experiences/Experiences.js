import React from "react";
import classes from "./Experiences.module.css";

const Experiences = (props) => (
  <div className={classes.Experiences} id="Experiences">
    <div>
      <h1>Experiences</h1>
      <h2>“The Best Way To Get Started Is To Quit Talking And Begin Doing.” - Walt Disney</h2>
    </div>
    <div className={classes.EducationCareers}>
      <p className={classes.Line}></p>
      <h3>Careers</h3>
      <div className={classes.Careers}>
        <div className={classes.Work}>
          <h4>DANITO</h4>
          <p>April 2021 - Current</p>
        </div>
        <div>
          <p className={classes.Bold}>Front End Web Developer</p>
          <p className={classes.TextJust}>
            I was brought on from the start of the project. I was able to help plan the first two websites. I am
            currently creating an application that will help customers get a rough offer.
          </p>
        </div>
      </div>
      <div className={classes.Careers}>
        <div className={classes.Work}>
          <h4>Freelancing</h4>
          <p>July 2020 - Current</p>
        </div>
        <div>
          <p className={classes.Bold}>Front End Web Developer</p>
          <p className={classes.TextJust}>I worked on various types of web sites as well as web applications.</p>
        </div>
      </div>

      <div className={classes.Careers}>
        <div className={classes.Work}>
          <h4>Star MD</h4>
          <p>June 2014 - September 2020</p>
        </div>
        <div>
          <p className={classes.Bold}>CEO</p>
          <p className={classes.TextJust}>
            Star MD is a company engaged in production of various types of footwear. As a CEO my responsibility was
            production, sales, distribution and others. Working at this company, I learned to multitask, solve problems
            daily and sharpened my soft skills. Also, I learned the value of teamwork and working hard.
          </p>
        </div>
      </div>
      <div className={classes.Careers}>
        <div className={classes.Work}>
          <h4>Kvalitet BK</h4>
          <p>September 2006 - April 2014</p>
        </div>
        <div>
          <p className={classes.Bold}>Production Manager</p>
          <p className={classes.TextJust}>
            Kvalitet BK is a company engaged in production of clogs and slippers, based in Pancevo Serbia. I worked
            there as a production manager as well as a quality control manager. I had the opportunity to follow the
            entire production process of various types of footwear that were later placed on the European market.
            Working there from an early age was a great experience that helps me understand responsibility and as well
            learn various types of managing skills.
          </p>
        </div>
      </div>
      <p className={classes.Line}></p>
      <h3>Educations</h3>
      <div className={classes.Careers}>
        <div>
          <h4>Udemy</h4>
          <p>October 2019 - current</p>
        </div>
        <div>
          <p className={classes.Bold}>Courses</p>
          <p className={classes.TextJust}>
            I was always looking for learning new stuff. Udemy is for me a great way to learn new things on my own and
            when the time suits me. A few years back, I learned all about Project Management like Scrum and Agile. Some
            time later I got interested in Web Development. For me Web Development was pretty cool new thing. I was
            sitting at the computer and making amazing new stuff. I learned HTML, CSS, JavaScript, TypeScript, React and
            other stuff.
          </p>
        </div>
      </div>
      <div className={classes.Careers}>
        <div>
          <h4>Megatrend University</h4>
          <p>2008 - 2012</p>
        </div>
        <div>
          <p className={classes.Bold}>Bachelor of Management and Economics (Specialization: International business)</p>
          <p className={classes.TextJust}>
            The education was mainly about Management but there were also Economics and Programing. There I learned a
            lot about Management like, Financial Management, Organization, Technological Management, Project Management
            and others. Also, I learned Introduction to Information Systems, HTML and CSS. I also worked during my
            studies and there had the opportunity to apply my knowledge to real projects.
          </p>
        </div>
      </div>
      <div className={classes.Careers}>
        <div>
          <h4>High school</h4>
          <p>2004 - 2008</p>
        </div>
        <div>
          <p className={classes.Bold}>High school of economics</p>
          <p className={classes.TextJust}>
            I graduated high school, where I enjoyed doing math, accounting and informatics. We had a great informatics
            teacher, who taught us all about Microsoft Office (Word, Excel, PowerPoint and more).
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Experiences;
