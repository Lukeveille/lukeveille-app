import React from 'react';

export const ProjectModal = (props) => (
  <div className={"modal-bg"} style={{display: props.show? "flex" : "none"}} id={props.name + "-modal"} onClick={() => { props.toggle() }}>
    <div className="modal-box" onClick={(e) => { e.stopPropagation(); }}>
      <div className="modal-top-row">
        <div className="x-close-button" onClick={() => { props.toggle() }}>X</div>
      </div>
      {props.content}
    </div>
  </div>
)
