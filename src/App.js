import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Home from './components/home';
import Detail from './components/detail';
import User from './components/user';
import MainNav from './components/mainNav';
import data from './api/data';
import './index.scss';

const App = () => (
  <Router>
    <div>
      <MainNav data={data} />
      <Switch>
        <Redirect exact from='/' to='/home' />
        <Route exact path='/detail/:detailId' component={Detail} />
        <Route exact path='/user' component={User} />
        <Route exact path='/home' component={Home} />
      </Switch>
    </div>
  </Router>
)

export default App;