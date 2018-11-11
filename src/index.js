import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import your fontawesome library
import './fontAwsome';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

