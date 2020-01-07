import React from 'react';
import './Footer.css';
import {contactInfo} from '../data/ContactInfo';
import {ContactInfoPresenter} from '../presenters/ContactInfoPresenter';

export const Footer = () => {
  const contactInfoPresenter = new ContactInfoPresenter(contactInfo);

  return (
    <footer className="Footer">
      <p>{contactInfoPresenter.phoneLink}</p>
      <p>•</p>
      <p>{contactInfoPresenter.emailLink}</p>
    </footer>
  );
};
