import React, {Component} from 'react';
import './Footer.css';
import { FaInstagram, FaGoogle, FaTelegramPlane } from 'react-icons/fa';
import googlePlayImg from '../../assests/img/google-play.png';
import cafeBazaar from '../../assests/img/cafebazaar.png';

class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper bg-dark" id="footer">
        <div className="container">
          <div className="row mt-5 mb-4">
            <div className="col-sm-3">
              رنترا:پلتفرم اجاره وسایل و تجهیزات
            </div>
            <div className="col-sm-2">
              <div>درباره ما</div>
              <div>توافق نامه</div>
              <div>تماس با ما</div>
            </div>
            <div className="col-sm-2">
              <div>شرایط و قوانین</div>
              <div>حریم خصوصی</div>
              <div>سوالات متداول</div>
            </div>
            <div className="col-sm-2">
              <div>دانلود اپلیکیشن</div>
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
            <div className="row mt-5 py-2">
              <div className="col-sm-6">
                <p>
                  کليه حقوق اين سایت متعلق به شرکت رنترا است.
                </p>
              </div>
              <div className="col-sm-6 text-left">

                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#">
                      <FaTelegramPlane />
                    </a>
                  </li>
                  <li className="list-inline-item pr-2">
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <FaGoogle />
                    </a>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Footer;
