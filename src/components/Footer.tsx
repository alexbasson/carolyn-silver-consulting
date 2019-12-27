import React from 'react';
import './Footer.css';
import {parsePhoneNumberFromString} from 'libphonenumber-js';
import {contactInfo} from '../data/ContactInfo';

export const Footer = () => {
  const phone = parsePhoneNumberFromString(contactInfo.phone);
  const email = contactInfo.email;

  return (
    <footer className="Footer">
      <p><a href={phone?.getURI()}>{phone?.formatNational()}</a></p>
      <p><a href={`mailto:${email}`}>{email}</a></p>
    </footer>
  );
};
