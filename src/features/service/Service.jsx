import { Col, Container, Row } from "react-bootstrap";
import "./service.css";
import serviceIcon_1 from "../../assets/service-1.png";
import serviceIcon_2 from "../../assets/service-2.png";
import serviceIcon_3 from "../../assets/service-3.png";

const Service = () => {
  return (
    <>
      <Container className="mt-5 mb-5">
        <div className="service_wrapper">
          <Row>
            <Col sm={12} md={6} lg={4}>
              <div className="service_wrapper_card">
                <div className="service_icon">
                  <img src={serviceIcon_2} alt="" />
                </div>
                <div className="service_text">
                  <h4>Free Shiping Orders $60+ </h4>
                  <p>A delivery service you can depand on</p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <div className="service_wrapper_card">
                <div className="service_icon">
                  <img src={serviceIcon_1} alt="" />
                </div>
                <div className="service_text">
                  <h4>Customer Supports </h4>
                  <p>A delivery service you can depand on</p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <div className="service_wrapper_card">
                <div className="service_icon">
                  <img src={serviceIcon_3} alt="" />
                </div>
                <div className="service_text">
                  <h4>100% Sure Payment </h4>
                  <p>A delivery service you can depand on</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Service;
