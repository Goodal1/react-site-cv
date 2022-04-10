import React from 'react';
import ReactDOM from 'react-dom';

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
          <img src="../img/logo.png" alt="" />
        </div>
        <div className="menu-container">
          <ul>
            <li>
              <a href="./">Accueil</a>
            </li>
            <li>
              <a href="./presentation">Présentation</a>
            </li>
            <li>
              <a href="/experience">Expérience</a>
            </li>
            {/* <li>
              <a href="/portfolio">Porfolio</a>
            </li> */}
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="darkmode-container">
          <input type="checkbox" defaultChecked={this.state.isChecked === 'true' ? true : false} name="" id="darkmode" onClick={this.darkMode} />
          <label for="darkmode">Darkmode</label>
        </div>
      </header>
    );
  }
}

export default Nav;
