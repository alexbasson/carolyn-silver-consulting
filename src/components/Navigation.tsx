import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

export const Navigation = () => (
  <nav className="Navigation">
    <div className="link"><Link to="/">Home</Link></div>
    <div className="link"><Link to="/about">About</Link></div>
    <div className="link"><Link to="/services">Services</Link></div>
    <div className="link"><Link to="/contact">Contact</Link></div>
  </nav>
);
