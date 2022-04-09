import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import Navmobile from './components/Navigation/Navmobile';
import Nav from './components/Navigation/Nav';
import Mainbanner from './components/Home/Mainbanner';
import Presentation from './components/Presentation/Presentation';
import Xp from './components/Experience/Xp';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UseRedirectToHttps from './components/Routeur/useRedirectToHttps';

function App() {
  UseRedirectToHttps();
  return (
    <Router>
      <div>
        <Navmobile />
        <Nav />
        <Route path="/" exact component={Mainbanner} />
        <Route path="/presentation" component={Presentation} />
        <Route path="/experience" component={Xp} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
