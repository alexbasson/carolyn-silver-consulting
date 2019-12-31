import React from 'react';
import './ContactPage.css';
import {contactInfo} from '../data/ContactInfo'
import {parsePhoneNumberFromString} from 'libphonenumber-js'
import contact from '../assets/images/contact.jpeg';

export const ContactPage = () => {
  const phone = parsePhoneNumberFromString(contactInfo.phone);
  const email = contactInfo.email;

  return (
    <div className="ContactPage row">
      <div className="col-left">
        <img src={contact} alt="services"/>
      </div>

      <div className="col-right">
        <ul>
          <li><label>phone:</label><a href={phone?.getURI()}>{phone?.formatNational()}</a></li>
          <li><label>email:</label><a href={`mailto:${email}`}>{email}</a></li>
        </ul>
      </div>
    </div>
  );
};
