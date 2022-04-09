import React from 'react';
import ReactDOM from 'react-dom';

class Mainbanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: 'img/robby.png',
    };
    this.turnOnRobot = this.turnOnRobot.bind(this);
    this.stopRobot = this.stopRobot.bind(this);
  }

  //MOUVEMENT DU ROBOT
  moveRobot(event) {
    const robot = document.querySelector('#robot');
    const middle = robot.offsetLeft + robot.offsetWidth / 2;
    const mousePlace = event.pageX;
    let walk = -50 + (middle - mousePlace) / 80;
    robot.style.transform = `translateX(${walk}%) rotate(10deg)`;
    console.log(walk);
  }

  stopRobot() {
    const robot = document.querySelector('#robot');
    robot.style.transform = `translateX(-50%)`;
    this.setState({
      img: 'img/robby.png',
    });
  }

  turnOnRobot() {
    this.setState({
      img: 'img/robby-on.png',
    });
    console.log(this.state);
  }

  render() {
    return (
      <section className="main-banner" onMouseEnter={this.turnOnRobot} onMouseMove={this.moveRobot} onMouseLeave={this.stopRobot}>
        <div className="main-banner-bg">
          <p>
            Salut, moi c'est <b>Ivain</b> et je suis
          </p>
          <div className="main-banner-elements">
            <h1>Product</h1>
            <div className="main-banner-robot-container">
              <img id="robot" src={this.state.img} alt="" />
            </div>
            <h1>owner</h1>
          </div>
        </div>
      </section>
    );
  }
}

export default Mainbanner;
