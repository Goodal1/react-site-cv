import React from 'react';
import ReactDOM from 'react-dom';

class Presentation extends React.Component {
  render() {
    const bubblesArray = [];
    for (let i = 0; i < 50; i++) {
      const topMin = -100;
      const topMax = 0;

      const leftMin = 0;
      const leftMax = 100;

      const imgMin = 1;
      const imgMax = 12;

      const speedMin = 3;
      const speedMax = 11;

      const topRandom = Math.floor(Math.random() * (topMax - topMin + 1)) + topMin;
      const leftRandom = Math.floor(Math.random() * (leftMax - leftMin + 1)) + leftMin;
      const imgRandom = Math.floor(Math.random() * (imgMax - imgMin + 1)) + imgMin;
      const speedRandom = Math.random() * (speedMax - speedMin + 1) + speedMin;

      bubblesArray.push({ top: topRandom + '%', left: leftRandom + '%', src: `../img/icons/${imgRandom}.png`, animation: `makeItRain ${speedRandom}s ease-out infinite` });
    }

    const bubbles = bubblesArray.map((ele) => {
      return (
        <li style={ele}>
          {' '}
          <img src={ele.src} />
        </li>
      );
    });

    return (
      <section className="prez-banner">
        <div className="prez-banner-bg">
          <div className="prez-text">
            <div>
              <p>
                Ce que je <b>fais ?</b>
              </p>
              <h2>Je gère des projets web !</h2>
              <p>
                <b>Travaillant dans le web & le digital depuis 2013, j'ai eu la chance de toucher à beaucoup d'aspects de la création et de la promotion de produits digitaux.</b>
              </p>

              <p>Développement front-end, webdesign, webmarketing, gestion de projet, pilotage de prestataires...</p>
              <p>Alors, oui, ce sont des domaines différents, et non, je n'ai fait le tour d'aucun d'eux. Je suis polyvalent (et je vous laisse définir si c'est une qualité ou un défaut).</p>
            </div>
          </div>
          <div className="prez-icones">
            <ul>{bubbles}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Presentation;
