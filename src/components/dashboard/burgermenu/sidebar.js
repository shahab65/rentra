import React, {Component} from 'react';
import { scaleDown as Menu } from 'react-burger-menu';
// import './sidebar.css';
import bajo from '../../../assests/img/test.jpg'
import {withRouter} from 'react-router-dom'

var styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '36px',
    height: '30px',
    right: '15px',
    top: '15px'
  },
  bmBurgerBars: {
    background: '#666666'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#EFEFEF',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    overflow: 'hidden'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0 0.8em',
    display: 'grid',
    gridTemplateRows: 'repeat(5, 50px)'
  },
  bmItem: {
    display: 'inline-block'
  },
  a: {
    textDecoration: 'none',
    color: 'inherit'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }

};

class Bajo extends Component {
  state = {
    isMyMenuOpen: true
  };

  isMenuOpen = state => {
    console.log('state', state);
    if (state.isOpen === this.state.isMyMenuOpen) return;
    this.setState({ isMyMenuOpen: state.isOpen });
  };

  render() {
    return (
      <div>
        <Menu
          isOpen={this.state.isMyMenuOpen}
          onStateChange={this.isMenuOpen}
          styles={this.props.location.pathname === '/dashboard' ? styles: {}}
          right
        >
          <a className="menu-item" href="/">
            Home
          </a>
          <a className="menu-item" href="/">
            <img src={bajo} alt="" className="img-fluid rounded-circle mb-2"/>

          </a>

          <a className="menu-item" href="/laravel">
            Laravel
          </a>

          <a className="menu-item" href="/angular">
            Angular
          </a>

          <a className="menu-item" href="/react">
            React
          </a>

          <a className="menu-item" href="/vue">
            Vue
          </a>

          <a className="menu-item" href="/node">
            Node
          </a>
        </Menu>
      </div>
    );
  }
}

export default withRouter(Bajo);
