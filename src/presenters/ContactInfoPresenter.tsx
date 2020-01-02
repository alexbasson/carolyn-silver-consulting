import React from 'react';
import {parsePhoneNumberFromString, PhoneNumber} from 'libphonenumber-js';
import {ContactInfo} from '../data/ContactInfo';
import {ReactElement} from 'react';

export class ContactInfoPresenter {
  private email: string;
  private phone: PhoneNumber;

  constructor(private contactInfo: ContactInfo) {
    this.email = contactInfo.email;
    this.phone = parsePhoneNumberFromString(contactInfo.phone)!;
  }

  get phoneLink(): ReactElement {
    return <a href={this.phoneUri}>{this.phoneString}</a>
  }

  get emailLink(): ReactElement {
    return <a href={this.emailUri}>{this.emailString}</a>
  }

  private get phoneUri() {
    return this.phone.getURI();
  }

  private get phoneString() {
    return this.phone.formatNational();
  }

  private get emailUri() {
    return `mailto:${this.email}`;
  }

  private get emailString() {
    return this.email;
  }
}
