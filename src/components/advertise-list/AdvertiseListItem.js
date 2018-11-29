import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';
import './AdvertiseListItem.css';
import Img from '../../assests/img/test.jpg'

class AdvertiseListItem extends Component {
  render() {
    return (
      <Link to={`advertise-detail/${this.props.count}`}>
        <Card className="ad-card">
          <CardImg top width="100%" src={Img} alt="Card image cap"/>

          <CardFooter>

            <div className="card-footer-father">
              <div className="card-footer-first-child">
                <h4>هوندا</h4>
                <p>دو تیغه شمشیرنشان</p>

              </div>
              <div className="card-footer-second-child">
                <div>
                  22
                </div>
                <div className="footer-left-bottom">
                  روزانه
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
      </Link>
    );
  }
}

AdvertiseListItem.propTypes = {};

export default AdvertiseListItem;
