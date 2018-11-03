import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchCard from '../search-card/SearchCard'
class Home extends Component {
  render() {
    return (
      <div>
        <SearchCard/>
      </div>
    );
  }
}
Home.propTypes = {};

export default Home;
