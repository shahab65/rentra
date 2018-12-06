import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import {UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import './search-card.css';

class SearchCard extends Component {
  render() {
    return (
      <div className="container search-card-wrapper">
        <div className="row justify-content-center">
          <div className="col-sm-8">
            <div className="row">
              <div className="col-sm-10">
                <input
                  className="form-control "
                  placeholder="جست و جو در همه آگهی ها"
                />
              </div>
              <div className="col-sm-2">
                <UncontrolledDropdown>
                  <DropdownToggle caret>
                    زیردسته ها
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>تجهیزات ساختمانی</DropdownItem>
                    <DropdownItem>تجهیزات سینمایی</DropdownItem>
                    <DropdownItem>تجهیزات کارگاهی</DropdownItem>
                    <DropdownItem>تجهیزات کوهنوردی و سفر</DropdownItem>
                    <DropdownItem>تجهیزات نمایشگاهی</DropdownItem>
                    <DropdownItem>ماشین آلات و ادوات کشاورزی</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </div>


          </div>
        </div>

      </div>
    );
  }
}

SearchCard.propTypes = {};

export default SearchCard;
