import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
Button
} from 'reactstrap';
import {FaUser} from 'react-icons/fa';
import './Navbar.css'

class Header extends React.Component {

  state ={
    isOpen: false,
    dropdownOpen: false
  };
  toggle = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  };
  toggleDropdown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
      <div>

        <Navbar  color="light" light expand="sm" className="nav-wrapper">
          <Link to="/">rentra logo</Link>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink to="/about-us/">درباره ما</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/guide/">راهنمای استفاده</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/question/">سوالات متدوال</NavLink>
              </NavItem>
            </Nav>

            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/advertise/"><Button>ثبت آگهی</Button></NavLink>
              </NavItem>
              <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                <DropdownToggle nav caret>
                  <FaUser/>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem >حساب کاربری</DropdownItem>
                  <DropdownItem tag={Link} to="/dashboard">
                    داشبورد
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem> خروج </DropdownItem>
                </DropdownMenu>
              </Dropdown>

            </Nav>

          </Collapse>

        </Navbar>
      </div>
    );
  }
}
export default Header;
