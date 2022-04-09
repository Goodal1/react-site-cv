import React from 'react';

class XpPopUp extends React.Component {
  closePopup() {
    const popup = document.querySelector('.xp-popup');
    popup.style.display = 'none';
  }

  render() {
    return (
      <div className="xp-popup">
        <img src="../img/robby-left.png" alt="" className="popup-robby"></img>
        <div>
          <img src="../img/icons/ic-close.svg" alt="" className="close-popup" onClick={this.closePopup} />
        </div>
        <span>2020-2021</span>
        <h2>{this.props.title}</h2>
        <img className="job-logo" src="../img/icons/homme-robot.png" />
        <p>
          <b>{this.props.deschat}</b>
        </p>
        <p>{this.props.longdesc}</p>
      </div>
    );
  }
}

export default XpPopUp;
