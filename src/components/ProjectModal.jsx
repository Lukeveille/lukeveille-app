import React from 'react';

export const ProjectModal = (props) => {
  const show = props.show? "flex" : "none"
  return (
    <div className={"modal-bg display-" + show} id={props.name + "-modal"} onClick={() => { props.toggle() }}>
      <div className="modal-box" onClick={(e) => { e.stopPropagation(); }}>
        <div className="modal-top-row">
          <div className="x-close-button" onClick={() => { props.toggle() }}>X</div>
        </div>
        {props.content}
      </div>
    </div>
  )
}