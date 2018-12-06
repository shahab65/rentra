import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';
import Baj from '../../assests/img/test.jpg';
import Img1 from '../../assests/img/1.jpg';
import Img2 from '../../assests/img/2.jpg';
import Img3 from '../../assests/img/3.jpg';
import Img4 from '../../assests/img/4.jpg';
import Img5 from '../../assests/img/5.jpg';
import {FaRegCalendarAlt} from 'react-icons/fa';
import Carousel from '../carousel/Carousel';
// import Calender from '../../calender/Calender'
import './AdvertiseDetail.css';

class AdvertiseDetail extends Component {
  render() {
    // console.log("img is :", Img)
    const images = [
      {
        original: Img1,
        thumbnail: Img1
      },
      {
        original: Img2,
        thumbnail: Img2
      },
      {
        original: Img3,
        thumbnail: Img3
      },
      {
        original: Img4,
        thumbnail: Img4
      },
      {
        original: Img5,
        thumbnail: Img5
      }
    ]
    return (
      <div className="container mt-5">
        {/*<Calender/>*/}
        <div className="row my-5">
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <h1>هزینه ها</h1>
                <ul>
                  <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</li>
                  <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</li>
                </ul>
              </div>
              <div className="col-sm-6">
                <h1>توضیحات</h1>
                <ul>
                  <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</li>
                  <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 text-left ">
            <div>
              <ImageGallery
                items={images}
                isRTL={true}
                showBullets={true}
                showIndex={true}
                thumbnailPosition="right"
                originalClass="img-fluid "
              />
            </div>


          </div>
        </div>
        <div className="row my-5">
          <div className="col-sm-6 ">
            <div className="d-flex">
              <div className="input-group mb-3 mr-1">
                <input type="text" className="form-control" placeholder="از تاریخ"/>
                <div className="input-group-append">
                  <span className="input-group-text"><FaRegCalendarAlt/></span>
                </div>
              </div>
              <div className="input-group mb-3 ml-1">
                <input type="text" className="form-control" placeholder="تا تاریخ"/>
                <div className="input-group-append">
                  <span className="input-group-text"><FaRegCalendarAlt/></span>
                </div>
              </div>
            </div>
            <button className="btn btn-success btn-block my-3">درخواست</button>
            <div className="d-flex justify-content-around">
              <a href="#">دانلود قرارداد اجاره</a>
              <a href="#">رعایت نکات ضروری</a>
            </div>
          </div>
          <div className="col-sm-6 border border-dark d-flex justify-content-around align-items-center">
              <img src={Baj} className="rounded-circle" width="100px" height="100px" alt="avatar"/>
              <p>رسول کرمی</p>
              <button className="btn btn-primary ">ارسال پیام</button>
          </div>
        </div>
        <div className="row">
            <Carousel/>
        </div>
      </div>
    );
  }
}

export default AdvertiseDetail;
