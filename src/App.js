import React, {Component} from 'react';
import {Route, Router, Switch} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home'
import AdvertiseCreate from './components/advertise/AdvertiseCreate'
import Footer from './components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './assests/css/global.css'
import {faAddressCard} from "@fortawesome/free-solid-svg-icons";
export const history = createHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>

        <div className="rtl">
          <Navbar/>
          <FontAwesomeIcon icon="coffee" />
          <FontAwesomeIcon icon="coffee" />
          <FontAwesomeIcon icon="google" />
          <FontAwesomeIcon icon="address-card" />
          {/*<FontAwesomeIcon icon={faCoffee} />*/}
          {/*<FontAwesomeIcon icon={faCoffee} />*/}
          {/*<FontAwesomeIcon icon={faCoffee} />*/}
          <div id="body">

            <Switch>
              <Route path='/' component={Home} exact/>
              <Route path='/advertise' component={AdvertiseCreate}/>
            </Switch>

          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
