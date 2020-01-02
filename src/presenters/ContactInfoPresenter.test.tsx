import React from 'react';
import {ContactInfo} from '../data/ContactInfo';
import {ContactInfoPresenter} from './ContactInfoPresenter';

describe('ContactInfoPresenter', () => {
  const contactInfo: ContactInfo = {
    phone: '+15555555555',
    email: 'valid.email@example.com'
  };

  let contactInfoPresenter: ContactInfoPresenter;

  beforeEach(() => {
    contactInfoPresenter = new ContactInfoPresenter(contactInfo);
  });

  it('returns a valid phone link', () => {
    let validPhoneLink = <a href="tel:+15555555555">(555) 555-5555</a>;
    expect(contactInfoPresenter.phoneLink).toEqual(validPhoneLink);
  });

  it('returns a valid email link', () => {
    let validEmailLink = <a href="mailto:valid.email@example.com">valid.email@example.com</a>;
    expect(contactInfoPresenter.emailLink).toEqual(validEmailLink);
  });
});
