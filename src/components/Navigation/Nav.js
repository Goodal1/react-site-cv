import React from 'react';
import ReactDOM from 'react-dom';
// import fontawesomeIcon module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGamepad, faSignal, faList, faHome, faMessage, faFloppyDisk, faGhost } from '@fortawesome/free-solid-svg-icons';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: localStorage.getItem('isDark') === 'true' ? 'true' : 'false',
      isChecked: localStorage.getItem('isChecked') === 'true' ? 'true' : 'false',
    };
    this.darkMode = this.darkMode.bind(this);
  }

  darkMode() {
    let isDark = '';
    let isChecked = '';
    if (localStorage.getItem('isDark') === 'true') {
      isDark = 'false';
      isChecked = 'false';
      localStorage.setItem('isDark', 'false');
      localStorage.setItem('isChecked', 'false');
    } else {
      isDark = 'true';
      isChecked = 'false';
      localStorage.setItem('isDark', 'true');
      localStorage.setItem('isChecked', 'true');
    }

    this.setState({
      isDark: isDark,
      isChecked: isChecked,
    });
  }

  render() {
    const root = document.documentElement;
    if (this.state.isDark === 'true') {
      root.style.setProperty('--dark1', '#26283B');
      root.style.setProperty('--dark2', '#fff');
      root.style.setProperty('--white', '#26283B');
      root.style.setProperty('--text', '#dedee3');
      root.style.setProperty('--background', '#0a0619');
      root.style.setProperty('--line', '#404364');
    } else {
      root.style.setProperty('--dark1', '#fff');
      root.style.setProperty('--dark2', '#F4F7F6');
      root.style.setProperty('--white', '#fff');
      root.style.setProperty('--text', '#26283b');
      root.style.setProperty('--background', '#f1fdff');
      root.style.setProperty('--line', '#e9eced');
    }

    return (
      <header>
        <div className="logo-container">
          <a href="/">
            <img src="../img/logo.png" alt="" />
          </a>
        </div>
        <div className="menu-container">
          <ul>
            <li>
              <a href="./">
                <FontAwesomeIcon icon={faHome} />
                Accueil
              </a>
            </li>
            <li>
              <a href="./presentation">
                <FontAwesomeIcon icon={faGhost} />
                Présentation
              </a>
            </li>
            <li>
              <a href="/experience">
                <FontAwesomeIcon icon={faGamepad} />
                Expérience
              </a>
            </li>
            {/* <li>
              <a href="/portfolio">Porfolio</a>
            </li> */}
            <li>
              <a href="/contact">
                <FontAwesomeIcon icon={faMessage} />
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="darkmode-container">
          <input type="checkbox" defaultChecked={this.state.isChecked === 'true' ? true : false} name="" id="darkmode" onClick={this.darkMode} />
          <label for="darkmode">
            <span>Darkmode</span>{' '}
          </label>
        </div>
      </header>
    );
  }
}

export default Nav;
