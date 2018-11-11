import React from 'react';
// import {ACTION_TYPES, BASE_API_URL} from '../constants/constants';
import axios from 'axios'
// import {store} from '../store/ConfigureStore';

// import {isAuthenticated} from '../actions/loginActions'
// import swal from "sweetalert2";
// import {errorAlert} from './alerts'
export default class ajax {
  constructor(params = {}) {
    this.data = params.data || {};
    this.method = params.method || 'GET';
    this.url = params.url;
    this.event = params.event || '';
    this.show_message = params.show_message || false;
    this.config = params.config || {};
    this.loading = params.loading || true;
    this.token = params.token || '';

    this.success = (res) => {

      if (this.loading === true) {
        window.ajaxInstanceRun--;
        if (window.ajaxInstanceRun == 0) {

        }
      }
      // if (res.data.status === "UNAUTHORIZED") {
      //   store.dispatch(isAuthenticated(false))
      // }

      if (params.runOnSuccess)
        params.runOnSuccess(res);
      if (params.success) {
        if (typeof params.success === 'function') {
          params.success(res);
          store.dispatch({
            type: ACTION_TYPES.HIDE_LOADING_COMPONENT
          });
        }
      }
      else if (this.event !== '') {
        store.dispatch({type: this.event, success: true, data: res})
      }


    };

    this.error = (error) => {
      console.log("error in ajax", error)

      // if (this.loading === true) {
      //   store.dispatch({
      //     type: ACTION_TYPES.HIDE_LOADING_COMPONENT
      //   });
      // }
      // handle public  error:
      // if (error.response === undefined) {
      //   console.log("########### network error?",error.message)
      // }
      // if (error.response !== undefined) {
      //   if (parseInt(error.response.status) === 403) {
      //     errorAlert(error.response.data.message)
      //   }
      //   else if (parseInt(error.response.status) === 401) {
      //     store.dispatch(isAuthenticated(false))
      //   }
      //   // else if (parseInt(error.response.status) === 500) {
      //   //   errorAlert(error.response.data.message)
      //   // }
      // }
      // handle local error
      if (params.error)
        params.error(error);
    };

  }

  send() {
    let d = new Date();
    let n = d.getTime();
    let options = {

      url: BASE_API_URL + this.url + '?' + n,
      method: this.method,
      data: this.data,
      config: this.config,
      timeout: 50000,


      headers: {
        'Authorization': 'Token ' + store.getState().Token,
        'Accept-Language': store.getState().locale.lang
      },
    };

    // 'Authorization': 'Token ' + store.getState().Token,

    if (window.ajaxInstanceRun == undefined)
      window.ajaxInstanceRun = 0;
    window.ajaxInstanceRun++;
    store.dispatch({
      type: ACTION_TYPES.SHOW_LOADING_COMPONENT
    });
    axios(options).then((this.success)).catch(this.error);


  }

  setMethod(method) {
    this.method = method;
    return this;
  }


  setToken(token) {
    this.token = token;
    return this;
  }


  setUrl(url) {
    this.url = url;
    return this;
  }

  setEvent(event) {
    this.event = event;
    return this;
  }

  setData(data) {
    this.data = data;
    return this;
  }

  setConfigs(config) {
    this.config = config;
    return this
  }

  setConfig(key, value) {
    this.config[key] = value;
    return this;
  }

  needloading(loading) {
    this.loading = loading;
    return this;
  }
}
