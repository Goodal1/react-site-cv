import React from 'react';
import ReactDOM from 'react-dom';
import { Widget } from '@typeform/embed-react';
import { PopupButton } from '@typeform/embed-react';
import { ContactUs } from '../form';

class Contact extends React.Component {
  render() {
    return (
      <section className="contact">
        <div>
          <h2>On s'écrit ?</h2>
          <p>
            <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b>
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur.
          </p>
        </div>
        <div className="contactform-container">
          <ContactUs></ContactUs>
        </div>
      </section>
    );
  }
}

export default Contact;
