import React, {Component} from 'react';
import {Route, Router, Switch} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home'
import Advertise from './components/advertise/Advertise'

export const history = createHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>

      <div className="rtl">
          <Navbar />
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/advertise' component={Advertise}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
