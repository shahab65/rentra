import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper" id="footer">
        <div className="container">
          <div className="row mt-5 mb-3">
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
              <div>نسخه اندروید</div>
              <div>دانلود اپلیکیشن</div>
            </div>
            <div className="col-sm-3"></div>

          </div>
          <div className="bg-danger">
            <div className="">
              <p>
                کليه حقوق اين سایت متعلق به شرکت نت تجارت اهورا (شیپور) است.
              </p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Footer;
