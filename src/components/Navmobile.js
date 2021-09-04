import React from 'react';
import ReactDOM from 'react-dom';

class Navmobile extends React.Component {

    constructor(props){
        super(props);
        this.state={
          isDark:true,
        };
        this.deployMenu = this.deployMenu.bind(this);
        this.closeyMenu = this.closeMenu.bind(this);
      }
    
    
    

    deployMenu(){
        
        const mobileMenu = document.querySelector('.menu-mobile');
        mobileMenu.style.transform='translateX(0%)';
    }

    closeMenu(){
        const mobileMenu = document.querySelector('.menu-mobile');
        mobileMenu.style.transform='translateX(-100%)';
    }


    render() {
      return (
 <div>
    <div className="burger-container">
        <div className="burger" onClick={this.deployMenu}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    <div className="menu-mobile">
        <div className="close-container">
            <img src="../img/icons/ic-close.svg" alt="" className="close" onClick={this.closeMenu}/>
        </div>
        <div className="links-container">
            <ul>
                <li><a href="#">Présentation</a></li>
                <li><a href="#">Expérience</a></li>
                <li><a href="#">Portofolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </div>
 </div>
      );
    }
  }

  export default Navmobile;