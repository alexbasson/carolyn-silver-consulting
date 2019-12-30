import React from 'react';
import {Link} from 'react-router-dom';
import './HomePage.css';

export const HomePage = () => (
  <div className="HomePage">
    <div className="banner">
      <h1>So much consulting</h1>
    </div>
    <div className="content">
      <p><Link to="/about">About</Link></p>
      <p><Link to="/services">Services</Link></p>
      <p><Link to="/contact">Contact</Link></p>
    </div>
  </div>
);
