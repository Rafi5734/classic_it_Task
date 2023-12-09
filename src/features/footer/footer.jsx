import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container>
          <div className="footer_top">
            <Row>
              <Col sm={12} md={12} lg={4}>
                <h5>
                  {" "}
                  <span>Hourse </span> 9.00 am to 12.00 pm , Monday to Friday
                </h5>
              </Col>
              <Col sm={12} md={12} lg={8}>
                <h5>
                  {" "}
                  <span>Shopping App </span> Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Delectus, praesentium.
                </h5>
              </Col>
            </Row>
          </div>

          <div className="footer_main">
            <Row>
              <Col sm={12} md={6} lg={3}>
                <div className="footer_main_wrap">
                  <h4> Do You Need Help ?</h4>
                  <p>
                    {" "}
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                  <p>Lorem, ies repudiandae veritatis doloreati.</p>
                  <h5>info@gmail.com</h5>
                  <h5>+9000128782362</h5>
                </div>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <div className="footer_main_wrap">
                  <h4> Resource</h4>
                  <ul>
                    <li>
                      <a href="#">Customer Service</a>
                    </li>
                    <li>
                      <a href="#">Gift Card</a>
                    </li>
                    <li>
                      <a href="#">Product</a>
                    </li>
                    <li>
                      <a href="#">Cookie Setting</a>
                    </li>
                    <li>
                      <a href="#">CA Suply Chain</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <div className="footer_main_wrap">
                  <h4> Be Inspired</h4>
                  <ul>
                    <li>
                      <a href="#">furnob Magazine</a>
                    </li>
                    <li>
                      <a href="#">LookBook Far Collection</a>
                    </li>
                    <li>
                      <a href="#">Inspired Me</a>
                    </li>
                    <li>
                      <a href="#">Brands News</a>
                    </li>
                    <li>
                      <a href="#">fuurnoob for ellay docky</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <div className="footer_main_wrap">
                  <h4>Our Company</h4>
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Carrer for Fornobs</a>
                    </li>
                    <li>
                      <a href="#">Social Responsibility</a>
                    </li>
                    <li>
                      <a href="#">Share location & Events</a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>

          <div className="footer_bottom">
            <Row>
              <Col sm={12} md={12} lg={6}>
                <h6>
                  {" "}
                  Copyright © 2012 - 2023 TermsFeed®. All rights reserved.
                </h6>
              </Col>
              <Col sm={12} md={12} lg={6} className="text-end">
                <ul>
                  <li>
                    <a href="#"> Privecy & Policy </a>
                  </li>
                  <li>
                    <a href="#"> Terms & Condition </a>
                  </li>
                  <li>
                    <a href="#"> Refund & Return Policy</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
