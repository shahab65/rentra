import React from 'react';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import AdvertiseListItem from "./AdvertiseListItem";
import './PaginationAdvertiseList.css';

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
        <div className="row">
          {this.state.advertiseList.map((ad, i) =>
            <div className="col-sm-3" key={i}>
              <AdvertiseListItem/>

            </div>
          )}
        </div>
        <div className="pagination-wrapper">

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
