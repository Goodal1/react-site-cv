import React from 'react';

class XpPopUp extends React.Component {
  closePopup() {
    const popup = document.querySelector('.xp-popup');
    popup.style.display = 'none';
  }

  render() {
    return (
      <div className="xp-popup">
        <div>
          <img src="../img/icons/ic-close.svg" alt="" className="close-popup" onClick={this.closePopup} />
        </div>
        <span>2020-2021</span>
        <h2>{this.props.title}</h2>
        <img src="https://www.n-py.com/sites/n-py/files/commons/2019-2020/Hiver/Home/logo_luz.png" />
        <p>{this.props.desc}</p>
      </div>
    );
  }
}

export default XpPopUp;
