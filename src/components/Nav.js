import React from 'react';
import ReactDOM from 'react-dom';


class Nav extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      isDark:true,
    };
    this.darkMode = this.darkMode.bind(this);
  }

    darkMode(){
  
      const root = document.documentElement;
      
      
     
        if (this.state.isDark){
          root.style.setProperty('--dark1', '#fff');
          root.style.setProperty('--dark2', '#F4F7F6')
          root.style.setProperty('--white', '#26283B');  
          
          
        } else{
          root.style.setProperty('--dark1', '#26283B');
          root.style.setProperty('--dark2', '#0E0000')
          root.style.setProperty('--white', '#fff');
        }

        this.setState({
          isDark:!this.state.isDark
        })
      
      }


  
    render() {
      return (
        <header>
        <div className="logo-container"><img src="../img/logo.png" alt=""/></div>
        <div className="menu-container">
            <ul>
              <li><a href="./">Accueil</a></li>
              <li><a href="./presentation">Présentation</a></li>
              <li><a href="/experience">Expérience</a></li>
              <li><a href="/portofolio">Porfolio</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
        <div className="darkmode-container">
            <input type="checkbox" name="" id="darkmode" onClick={this.darkMode}/>
            <label for="darkmode">Darkmode</label>
        </div>

    </header>
      );
    }
  }

  export default Nav;