import React from 'react';

class XpPopUp extends React.Component {
  render() {
    // console.log(this.props.range)
    // console.log(this.props.date)

    return (
      <div className="xp-popup">
        <span>2020-2021</span>
        <h2>{this.props.title}</h2>
        <img src="https://www.n-py.com/sites/n-py/files/commons/2019-2020/Hiver/Home/logo_luz.png" />
      </div>
    );
  }
}

export default XpPopUp;
