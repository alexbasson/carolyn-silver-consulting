import React from 'react';
import {Link} from 'react-router-dom';
import './HomePage.css';

export const HomePage = () => (
  <div className="HomePage">
    <h1 className="banner">All the consulting you can fit in a can of tuna</h1>
    <div className="content">
      <p><Link to="/about">About</Link></p>
      <p><Link to="/services">Services</Link></p>
      <p><Link to="/contact">Contact</Link></p>
    </div>
  </div>
);
