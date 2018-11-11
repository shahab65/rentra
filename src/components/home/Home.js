import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchCard from '../search-card/SearchCard';
import PaginationAdvertiseList from '../advertise-list/PaginationAdvertiseList'

class Home extends Component {
  render() {
    return (
      <div>
        <SearchCard/>
        <PaginationAdvertiseList/>
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;
