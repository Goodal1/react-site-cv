import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './mediaqueries.css';
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
