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
            <b>Vous trouverez ci-dessous mon formulaire de contact</b>
          </p>
          <p>
            Je suis également joignable par <a href="tel:+33622809394">téléphone</a> ou par <a href="mailto:ivain.bordeneuve@gmail.com">email</a>, à votre convenance !
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
