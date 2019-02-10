import React from 'react';

export const SkillLogo = (props) => (
  <div className="skill-block">
    <svg className="skill-logo" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>{props.skill + " icon"}</title>
      {props.path}
    </svg>
    <p>{props.skill}</p>
  </div>
)
