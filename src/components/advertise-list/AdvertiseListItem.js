import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardFooter } from 'reactstrap';
import './AdvertiseListItem.css';
import Img from '../../assests/img/test.jpg'
class AdvertiseListItem extends Component {
  render() {
    return (
          <Card>
            <CardImg top width="100%" src={Img} alt="Card image cap" />

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

    );
  }
}

AdvertiseListItem.propTypes = {};

export default AdvertiseListItem;
