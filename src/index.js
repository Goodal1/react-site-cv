import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/header.css';
import './css/home.css';
import './css/presentation.css';
import './css/experience.css';
import './css/portfolio.css';
import './css/contact.css';
import './css/mediaqueries.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const slides = Array.from(document.querySelectorAll('.xp-slider-item'));
slides.forEach((ele) =>
  ele.addEventListener('click', function () {
    console.log(this);
  })
);
