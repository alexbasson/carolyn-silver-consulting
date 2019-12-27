import React from 'react';
import about from '../assets/images/about.jpeg';
import './AboutPage.css';

export const AboutPage = () => (
  <div className="AboutPage">
    <div className="left">
      <img src={about} alt="about"/>
    </div>
    <div className="right">
      <p>I'm just the best</p>
    </div>
  </div>
);
