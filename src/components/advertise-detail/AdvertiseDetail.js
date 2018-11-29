import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';
import Img1 from '../../assests/img/1.jpg';
import Img2 from '../../assests/img/2.jpg';
import Img3 from '../../assests/img/3.jpg';
import Img4 from '../../assests/img/4.jpg';
import Img5 from '../../assests/img/5.jpg';
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
        <div className="row">
          <div className="col-sm-6">
            first
          </div>
          <div className="col-sm-6 text-left ">
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
    );
  }
}

export default AdvertiseDetail;
