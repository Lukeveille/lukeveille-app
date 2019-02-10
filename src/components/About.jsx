import React from 'react';
import profilePic from '../images/profile-pic.jpg'

export const About = () => (
<section id="about">
  <img src={profilePic} className="profile-pic" alt="" />
  <div className="info-box">
    <h2>About Me</h2>
    <div className="about-text"></div>
    <p>Hi, I’m Luke, and I love programming, music, sharing ideas, and building things. I mainly build web applications, sometimes using Ruby on Rails, other times using React, and sometimes the two together. I enjoy learning new concepts in computer science, and am teaching myself python and C.</p>
    <p>I previously spent 10 years in the music industry, working as a studio engineer, technician, and even video editor. A lot of that involved long hours with detail oriented work, so I have a lot of experience giving 110% and delivering under pressure. In 2018, I completed the Bitmaker full time web development bootcamp, and am looking forward to seeing what I can contribute to the world of web development!</p>
  </div>
</section>
);
