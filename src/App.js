import React, {Component} from 'react';
import {Route, Router, Switch} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home'
import AdvertiseCreate from './components/advertise/AdvertiseCreate'
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
// import Dashboard from './components/dashboard/Dashboard'
import Dashboard from './components/dashboard2/Dashboard';
import './assests/css/global.css';
// import Slide from './components/dashboard/burgermenu/sidebar'
export const history = createHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
<div>
        <div className="rtl">
        {/*<Slide/>*/}

          <Navbar/>

          <div id="body">

            <Switch>
              <Route path='/' component={Home} exact/>
              <Route path='/login' component={Login}/>
                <Route path='/signup' component={Signup} />
                <Route path='/advertise' component={AdvertiseCreate}/>
                <Route path='/dashboard' component={Dashboard} />
              {/*<Route path='/dashboard2' component={Dashboard2}/>*/}
            </Switch>

          </div>
          <Footer/>
        </div>
</div>
      </Router>
    );
  }
}

export default App;
