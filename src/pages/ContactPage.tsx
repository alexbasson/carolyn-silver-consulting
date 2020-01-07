import React from 'react';
import '../styles/ContactPage.scss';
import {contactInfo} from '../data/ContactInfo'
import {ContactInfoPresenter} from '../presenters/ContactInfoPresenter';

export const ContactPage = () => {
  const contactInfoPresenter = new ContactInfoPresenter(contactInfo);

  return (
    <div className="ContactPage">
      <p>Email or call Carolyn today to learn more about her services and working together.</p>
      <ul className="">
        <li><label>Phone:</label>{contactInfoPresenter.phoneLink}</li>
        <li><label>Email:</label>{contactInfoPresenter.emailLink}</li>
      </ul>
    </div>
  );
};
