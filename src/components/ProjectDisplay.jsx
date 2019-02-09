import React from 'react';
import { ProjectModal } from './ProjectModal';
import mobileFrame from '../images/mobile-frame-291x144.png';
import desktopFrame from '../images/monitor-frame-498x291.png';

export const ProjectDisplay = (props) => {
  const deskBg = {
    background: 'url(' + props.deskBG.image + ')',
    backgroundSize: props.deskBG.size,
    backgroundPosition: props.deskBG.position,
  }
  const mobileBg = {
    background: 'url(' + props.mobileBG.image + ')',
    backgroundSize: props.mobileBG.size,
    backgroundPosition: props.mobileBG.position,
  }
  const modalContent = <div>
    <h3>{props.title}</h3>
    <h4>{props.stack}</h4>
    <p>{props.description}</p>
    {props.unique}
  </div>

  return (
    <article>
      <h3>{props.title}</h3>
      <div className="project">
        <img className="desktop-frame" alt={props.name + "-desktop"} style={deskBg} id={props.name + "-desktop"} src={desktopFrame} />
        <div className="project-buttons">
          <a href={props.live} target="_blank" rel="noopener noreferrer">Live</a>
          {/* <a href={"#" + props.name + "-btn"} id={props.name + "-btn"} onClick={() => { props.showProjectModal(props.name) }}>Details</a> */}
          <a href={props.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <img className="mobile-frame" alt={props.name + "-mobile"} style={mobileBg} id={props.name + "-mobile"} src={mobileFrame} />
      </div>
      <ProjectModal 
        name={props.name}
        show={props.projectModal === props.name}
        toggle={props.showProjectModal}
        content={modalContent}
      />
    </article>
  )
}
