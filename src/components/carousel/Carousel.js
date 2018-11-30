import React from 'react'
import Swiper from 'react-id-swiper';
import 'react-id-swiper/src/styles/css/swiper.css'
import './carousel.css';

const params = {
  slidesPerView: 3,
  spaceBetween: 2,
  centeredSlides: true,
  rtl: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 5
    },
  }
};

class Carousel extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      myslides: [
        {
          ram:"12",
          disk:"ssd",
          cpu:"corei5",
        },
        {
          ram:"12",
          disk:"ssd",
          cpu:"corei5",
        },
        {
          ram:"12",
          disk:"ssd",
          cpu:"corei5",
        },
        {
          ram:"12",
          disk:"ssd",
          cpu:"corei5",
        },
        {
          ram:"12",
          disk:"ssd",
          cpu:"corei5",
        },
        {
          ram:"12",
          disk:"ssd",
          cpu:"corei5",
        },
        {
          ram:"12",
          disk:"ssd",
          cpu:"corei5",
        },
      ],
    }


  }


  rencerSlides = () =>{
    const data = this.state.myslides;
    const slides = data.map((myslide, index)=>{
      return (
        <div className="swiper-slide my-5" key={index}>
          <div className="slider-price text-center grey-text">
            <div>
              <p className="price-text">عکس؟ </p>

            </div>
            <div dir="ltr">
              <p>lorem {myslide.ram} MB </p>
              <p>lorem {myslide.disk} GB SSD  </p>
              <p>lorem  {myslide.cpu}  </p>
            </div>

            <div className="">
              <button className="btn btn-get-started">مشاهده</button>
            </div>
          </div>
        </div>
      )
    });
    return slides;
  }

  render() {

    // if (this.state.slides.length === 0){
    //   return (
    //     <div className="mx-auto">
    //      loading
    //     </div>
    //   )
    // }
    return (

      <div id="carousel" className="swiper-container  pricing-swiper">
        <Swiper {...params} className="swiper-wrapper">

          {this.rencerSlides()}

        </Swiper>
      </div>
    )

  }
}


export default Carousel
