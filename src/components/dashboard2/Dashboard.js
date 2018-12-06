import React, {Component} from 'react';
import {FaAlignRight} from 'react-icons/fa';

import './Dashboard.css';
import bajo from "../../assests/img/test.jpg";

class App extends Component {
  state = {
    isActive: false
  };
  handleButtonClick = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive
    }));
  };

  render() {
    return (
      <div id="dashboard">
        <div className="wrapper">
          <nav id="sidebar" className={`bg-dark text-center ${this.state.isActive ? 'active' : ''} `}>
            <div className=" mt-1 border-bottom">
              <img
                src={bajo}
                width="150px"
                alt="user profile image"
                className="img-fluid rounded-circle mb-2"
              />
              <h4>شهاب امامی</h4>
            </div>

            <ul className="nav flex-column">
              <li className="border-bottom nav-item">
                <a href="#">سفارشات من</a>
              </li>


              <li className="border-bottom nav-item">
                <a href="#">پیام ها</a>
              </li>
              <li className="border-bottom nav-item">
                <a href="#">نشان داده شده ها</a>
              </li>
              <li className="border-bottom nav-item">
                <a href="#">مدیریت آگهی ها</a>
              </li>
              <li className="border-bottom nav-item">
                <a href="#">همه آگهی ها</a>
              </li>
              <li className="border-bottom nav-item">
                <a href="#">آگهی فعال</a>
              </li>
              <li className="border-bottom nav-item">
                <a href="#">آگهی غیرفعال</a>
              </li>
              <li className="border-bottom nav-item">
                <a href="#">درخواست ها</a>
              </li>
              <li className="border-bottom nav-item">
              <a href="#">پیش نویس ها</a>
              </li>
              <li className="border-bottom nav-item">
                <a href="#">ویرایش حساب کاربری</a>
              </li>
            </ul>
          </nav>
          <div id="content">
              <div className="container-fluid">

                <button
                  onClick={this.handleButtonClick}
                  type="button"
                  id="sidebarCollapse"
                  className="btn btn-dark">
                  <FaAlignRight/>
                </button>

              </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
