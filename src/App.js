import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import Navmobile from './components/Navmobile';
import Nav from './components/Nav';
import Mainbanner from './components/Mainbanner';
import Presentation from './components/Presentation';
import Xp from './components/Xp/Xp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      <div>
        <Navmobile />
        <Nav />
        <Route path="/" exact component={Mainbanner} />
        <Route path="/presentation" component={Presentation} />
        <Route path="/experience" component={Xp} />
        <Route path="/portfolio" component={Portfolio} />
      </div>
    </Router>
  );
}

export default App;
