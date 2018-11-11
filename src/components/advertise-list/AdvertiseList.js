import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AdvertiseListItem from './AdvertiseListItem';
import './AdvertiseList.css'

class AdvertiseList extends Component {
  render() {
    return (
      <div className="container advertise-list-wrapper">
        <div className="row">

          <AdvertiseListItem/>
          <AdvertiseListItem/>
          <AdvertiseListItem/>
          <AdvertiseListItem/>

        </div>
      </div>
    );
  }
}

AdvertiseList.propTypes = {};

export default AdvertiseList;
