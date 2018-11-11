import React, {Component} from 'react';
import {Route, Router, Switch} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home'
import AdvertiseCreate from './components/advertise/AdvertiseCreate'
import Footer from './components/footer/Footer';
import Dashboard from './components/dashboard/Dashboard'
import './assests/css/global.css'
export const history = createHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>

        <div className="rtl">
          <Navbar/>

          <div id="body">

            <Switch>
              <Route path='/' component={Home} exact/>
              <Route path='/advertise' component={AdvertiseCreate}/>
              <Route path='/dashboard' component={Dashboard}/>
            </Switch>

          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
