import React from 'react';

export const SocialLink = (props) => (
  <a href={props.link} target="_blank" rel="noopener noreferrer">
    <svg className="social-logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24">
      <title>{props.title}</title>
      {props.svgpaths}
    </svg>
  </a>
)
