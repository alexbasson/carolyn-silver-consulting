import React from 'react';
import './ContactPage.css';
import {contactInfo} from '../data/ContactInfo'
import {ContactInfoPresenter} from '../presenters/ContactInfoPresenter';

export const ContactPage = () => {
  const contactInfoPresenter = new ContactInfoPresenter(contactInfo);

  return (
    <div className="ContactPage">
      <p>I look forward to hearing from you.</p>
      <ul className="">
        <li><label>Phone:</label>{contactInfoPresenter.phoneLink}</li>
        <li><label>Email:</label>{contactInfoPresenter.emailLink}</li>
      </ul>
    </div>
  );
};
