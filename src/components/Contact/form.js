import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const [sentState, changeState] = useState({
    isFormSent: false,
    popupClass: 'contactform-confirm',
    formClass: 'active',
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jef06p7', 'template_dhiglqj', form.current, 'gkcn0w7t7j1fjzyxR').then(
      (result) => {
        showSentPopup(e);
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const showSentPopup = (e) => {
    e.preventDefault();
    if (sentState.isFormSent === false) {
      changeState({
        isFormSent: true,
        popupClass: 'contactform-confirm active',
        formClass: '',
      });
    } else {
      changeState({
        isFormSent: false,
        popupClass: 'contactform-confirm',
        formClass: 'active',
      });
    }

    console.log(sentState);
  };

  return (
    <React.Fragment>
      <form className={sentState.formClass} ref={form} onSubmit={sendEmail}>
        <label>Nom</label>
        <input type="text" name="form_nom" />
        <label>Prénom</label>
        <input type="text" name="form_prenom" />
        <label>Email</label>
        <input type="email" name="form_email" />
        <label>Message</label>
        <textarea name="form_message" />
        <input className="submit-btn" type="submit" value="Envoyer" />
      </form>
      <div className={sentState.popupClass}>
        <img src="../img/icons/ic-close.svg" alt="" onClick={showSentPopup}></img>
        <img src="img/icons/sent.png"></img>
        <h2>Demande envoyée !</h2>
        <p>
          <b>J'ai bien reçu votre demande !</b>
        </p>
        <p>Je reviens vers vous dès que possible !</p>
        <a href="#" onClick={showSentPopup}>
          Nouveau message
        </a>
      </div>
    </React.Fragment>
  );
};
