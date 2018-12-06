import React from 'react';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import AdvertiseListItem from "./AdvertiseListItem";
import './PaginationAdvertiseList.css';
import Img1 from '../../assests/img/1.jpg';
import Img2 from '../../assests/img/2.jpg';
import Img3 from '../../assests/img/3.jpg';
import Img4 from '../../assests/img/4.jpg';
import Img5 from '../../assests/img/5.jpg';
import Img6 from '../../assests/img/6.jpg';
import Img7 from '../../assests/img/7.jfif';
import Img8 from '../../assests/img/8.jfif';
import Img9 from '../../assests/img/9.jpg';
import Img10 from '../../assests/img/10.jpg';
import Img11 from '../../assests/img/11.jpg';
import Img12 from '../../assests/img/12.jpg';
import Img13 from '../../assests/img/13.jpg';
import Img14 from '../../assests/img/14.jfif';
import Img15 from '../../assests/img/15.jpg';
import Img16 from '../../assests/img/16.jpg';
import Img17 from '../../assests/img/17.jpg';
import Img18 from '../../assests/img/18.jfif';
import Img19 from '../../assests/img/19.png';
import Img20 from '../../assests/img/20.jfif';


class PaginationAdvertiseList extends React.Component {

  constructor() {

    super();

    // pagesCount is count of pages
    this.pagesCount = 5;

    this.state = {
      currentPage: 0,
      advertiseList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };

  }

  /**
   * this method will call if user click on a page number
     or next or previous icon
   * @param e
   * @param index
   */
  handleClick(e, index) {

    e.preventDefault();

    this.setState({
      currentPage: index
    });
    /*
    we will call ajax here
     */
  }

  render() {

    const {currentPage} = this.state;

    return (

      <div className="container pagination-advertise-list-wrapper">
        <div className="row ">
          {/*{this.state.advertiseList.map((ad, i) =>*/}
          <div className="col-sm-3 mb-5">
            <AdvertiseListItem
              img={Img1}
              count={1}/>
          </div>
          <div className="col-sm-3 mb-5">
            <AdvertiseListItem
              img={Img2}
              count={2}/>
          </div>
          <div className="col-sm-3 mb-5">
            <AdvertiseListItem
              img={Img3}
              count={3}/>
          </div>
          <div className="col-sm-3 mb-5">
            <AdvertiseListItem
              img={Img3}
              count={3}/>
          </div>
          <div className="col-sm-3 mb-5">
            <AdvertiseListItem
              img={Img4}
              count={4}/>
          </div>
          <div className="col-sm-3 mb-5">
            <AdvertiseListItem
              img={Img5}
              count={5}/>
          </div>
          <div className="col-sm-3 mb-5">
            <AdvertiseListItem
              img={Img6}
              count={6}/>
          </div>
          <div className="col-sm-3 mb-5">
            <AdvertiseListItem
              img={Img7}
              count={6}/>
          </div>
          <div className="col-sm-3 mb-5">
            <AdvertiseListItem
              img={Img8}
              count={6}/>
          </div>
          <div className="col-sm-3 mb-5">
            <AdvertiseListItem
              img={Img9}
              count={6}/>
          </div>
          <div className="col-sm-3 mb-5">
            <AdvertiseListItem
              img={Img10}
              count={6}/>
          </div>
          <div className="col-sm-3 mb-5">
            <AdvertiseListItem
              img={Img11}
              count={6}/>
          </div>
          <div className="col-sm-3 mb-5">
            <AdvertiseListItem
              img={Img12}
              count={6}/>
          </div>
          <div className="col-sm-3 mb-5">
            <AdvertiseListItem
              img={Img13}
              count={6}/>
          </div>
          <div className="col-sm-3 mb-5">
            <AdvertiseListItem
              img={Img14}
              count={6}/>
          </div>
          <div className="col-sm-3 mb-5">
            <AdvertiseListItem
              img={Img15}
              count={6}/>
          </div>
          <div className="col-sm-3 mb-5">
            <AdvertiseListItem
              img={Img16}
              count={6}/>
          </div>
          <div className="col-sm-3 mb-5">
            <AdvertiseListItem
              img={Img17}
              count={6}/>
          </div>
          <div className="col-sm-3 mb-5">
            <AdvertiseListItem
              img={Img18}
              count={6}/>
          </div>
          <div className="col-sm-3 mb-5">
            <AdvertiseListItem
              img={Img19}
              count={6}/>
          </div>
          <div className="col-sm-3 mb-5">
            <AdvertiseListItem
              img={Img20}
              count={6}/>
          </div>
          {/*)}*/}
        </div>
        <div className="pagination-wrapper ltr">

          <Pagination aria-label="Page navigation example"
                      className="d-flex justify-content-center mt-5">

            <PaginationItem disabled={currentPage <= 0}>

              <PaginationLink
                onClick={e => this.handleClick(e, currentPage - 1)}
                previous
                href="#"
              />
            </PaginationItem>

            {[...Array(this.pagesCount)].map((page, i) =>
              <PaginationItem active={i === currentPage} key={i}>
                <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            )}
            <PaginationItem disabled={currentPage >= this.pagesCount - 1}>
              <PaginationLink
                onClick={e => this.handleClick(e, currentPage + 1)}
                next
                href="#"
              />
            </PaginationItem>
          </Pagination>
        </div>
      </div>

    );

  }

}

// ReactDOM.render(<PaginationAdvertiseList />, document.getElementById("PaginationAdvertiseList"));
export default PaginationAdvertiseList;
