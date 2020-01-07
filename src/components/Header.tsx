import React from 'react';
import {Navigation} from './Navigation';
import '../styles/Header.scss';

export const Header = () => (
  <header className="header">
    <h1 className="title">Carolyn Silver Consulting</h1>
    <Navigation/>
  </header>
);
