import React from 'react';
import { ProjectDisplay } from './ProjectDisplay';
import mrplowDesktop from '../images/mrplow-desktop.png'
import mrplowMobile from '../images/mrplow-mobile.png'
import mathquizDesktop from '../images/mathquiz-desktop.png';
import mathquizMobile from '../images/mathquiz-mobile.png';

export const Projects = (props) => (
  <section id="projects">
    <h2>Projects</h2>
    <ProjectDisplay
      name="mrplow"
      title="Mr. Plow"
      stack="Ruby on Rails - React - PostgresSQL - SCSS"
      description="A way to connect shovelers with driveways"
      github="https://github.com/StephenVarela/Mister-Plow"
      live="https://mr-plow.herokuapp.com"
      deskBG={{image: mrplowDesktop, size: '95%', position: 'center -25%'}}
      mobileBG={{image: mrplowMobile, size: '95%', position: 'center 30%'}}
      projectModal={props.projectModal}
      showProjectModal={props.showProjectModal}
    />
    <ProjectDisplay
      name="mathquiz"
      title="Math Quiz"
      stack="React - Vanilla JS"
      description="My first web app, and it's many iterations."
      github="https://github.com/Lukeveille/math-quiz"
      live="/math-quiz"
      deskBG={{image: mathquizDesktop, size: '115%', position: 'center -14%'}}
      mobileBG={{image: mathquizMobile, size: '90%', position: 'center 65%'}}
      projectModal={props.projectModal}
      showProjectModal={props.showProjectModal}
    />
  </section>
);