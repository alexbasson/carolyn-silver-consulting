import React from 'react';
import './ContactPage.css';
import {contactInfo} from '../data/ContactInfo'
import {ContactInfoPresenter} from '../presenters/ContactInfoPresenter';

export const ContactPage = () => {
  const contactInfoPresenter = new ContactInfoPresenter(contactInfo);

  return (
    <div className="ContactPage">
      <p>Contact Carolyn today to learn more about Carolyn's services and to take the first step toward organizational change.</p>
      <ul className="">
        <li><label>phone:</label>{contactInfoPresenter.phoneLink}</li>
        <li><label>email:</label>{contactInfoPresenter.emailLink}</li>
      </ul>
    </div>
  );
};
