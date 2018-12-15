import React, {Component} from 'react';
import './Footer.css';
import { FaInstagram, FaGoogle, FaTelegramPlane } from 'react-icons/fa';
import googlePlayImg from '../../assests/img/google-play.png';
import cafeBazaar from '../../assests/img/cafebazaar.png';

class Footer extends Component {
  render() {
    return (
      <footer className="footer-wrapper bg-dark" id="footer">
        <div className="container">
          <div className="row mt-5 mb-4">
            <div className="col-sm-3">
              <p className="lead">
                رنترا: پلتفرم آنلاین اجاره تجهیزات و وسایل
              </p>‬
              <p className="small">
                پلتفرمی که در پی تسهیل فرآیند ارتباط میان اجاره کنندگان و اجاره دهندگان در یک سیستم یک پارچه است.
              </p>
            </div>
            <div className="col-sm-2 text-center text-sm-right">
              <p>درباره ما</p>
              <p>توافق نامه</p>
              <p>تماس با ما</p>
            </div>
            <div className="col-sm-2 text-center text-sm-right">
              <p>شرایط و قوانین</p>
              <p>حریم خصوصی</p>
              <p>سوالات متداول</p>
            </div>
            <div className="col-sm-2 text-center text-sm-right">
              <p className="d-none d-sm-block">دانلود اپلیکیشن</p>
              <div className="m-1">
                <a href="#" target='_blank'
                   title='دانلود اپلیکیشن رنترا از سایت google play'>
                  <img src={googlePlayImg} alt=""/>
                </a>
              </div>
              <div className="m-1">
                <a href="#" target='_blank'
                   title='دانلود اپلیکیشن رنترا از سایت bazar'>
                  <img src={cafeBazaar} alt=""/>
                </a>
              </div>
            </div>
            <div className="col-sm-3"></div>

          </div>

        </div>
        <div style={{backgroundColor:"#d0d1d3"}}>
          <div className="container">
            <div className="row  pt-3">
              <div className="col-sm-6">
                <p style={{color:"#000"}}>
                  کليه حقوق اين سایت متعلق به شرکت رنترا است.
                </p>
              </div>
              <div className="col-sm-6 text-center text-sm-left">

                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#">
                      <h3>
                        <FaTelegramPlane />
                      </h3>
                    </a>
                  </li>
                  <li className="list-inline-item pr-2">
                    <a href="#">
                      <h3>
                        <FaInstagram />
                      </h3>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <h3>
                        <FaGoogle />
                      </h3>
                    </a>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>

      </footer>
    );
  }
}

export default Footer;
