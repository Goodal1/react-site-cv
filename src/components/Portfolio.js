import React from 'react';
import ReactDOM from 'react-dom';

class Portfolio extends React.Component {
  render() {
    return (
      <section className="portfolio">
        <div>
          <div>
            <h2>Ce que je fais au quotidien</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div>
          <div className="portfolio-mosaic">
            <div>
              <img src="../img/Vignette.png" />
              <h3>Locker</h3>
              <h4>Webdesign application mobile pour club de football</h4>
              <a href="#">Voir le projet</a>
            </div>
            <div>
              <img src="https://www.n-py.com/sites/n-py/files/commons/landing_pages/ouverture/la-pierre-saint-martin.jpg" />
              <h3>Refonte n-py.com</h3>
              <h4>Gestion de projet de refonte de site à fort trafic</h4>
              <a href="#">Voir le projet</a>
            </div>
            <div>
              <img src="https://www.n-py.com/sites/n-py/files/commons/landing_pages/ouverture/la-pierre-saint-martin.jpg" />
              <h3>Skylodge</h3>
              <h4>Création de site web pour une auberge de jeunesse en pied de piste</h4>
              <a href="#">Voir le projet</a>
            </div>
            <div>
              <img src="https://www.n-py.com/sites/n-py/files/commons/landing_pages/ouverture/la-pierre-saint-martin.jpg" />
              <h3></h3>
              <h4>Descripion projet sur deux lignes</h4>
              <a href="#">Voir le projet</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
