import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import {
  Button,
  Collapse,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
  NavbarBrand
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
  };
  render() {
    return (
      <div>

        <Navbar  color="dark" dark expand="sm" className="nav-wrapper border-bottom">
          <Link to="/">rentra logo</Link>
          {/*<NavbarBrand href="/">reactstrap</NavbarBrand>*/}
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
              <Dropdown  nav isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                <DropdownToggle nav caret>
                  <FaUser/>
                </DropdownToggle>
                <DropdownMenu right className="bg-dark navbar-dropdown">
                  <DropdownItem tag={Link} to="/dashboard">
                    حساب کاربری
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/login">
                    ورود
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/dashboard2">
                    داشبورد2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={Link} to="/dashboard">
                    خروج
                  </DropdownItem>
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
