import { Col, Container, Row } from "react-bootstrap";
import "./newsLetter.css";
import Form from "react-bootstrap/Form";

const NewsLetter = () => {
  return (
    <>
      <div className="newsLetter">
        <Container>
          <div className="newsLatter_wrapper">
            <Row className="item_center">
              <Col sm={12} md={6} lg={6}>
                <h6>Join Our Newsletter for 10$</h6>
                <h4>
                  Get our e-mails for on new item ,<br /> sales and more{" "}
                </h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <div className="newsLatter_form">
                  <div className="newsLatter_input">
                    <Form.Control
                      type="email"
                      placeholder="Enter Your E-mail Address"
                    />
                    <i>
                      <svg
                        fill="#000000"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        id="right-arrow"
                        data-name="Flat Line"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon flat-line"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <line
                            id="primary"
                            x1="3"
                            y1="12"
                            x2="21"
                            y2="12"
                            style={{
                              fill: "none",
                              stroke: "#000000",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2",
                            }}
                          ></line>
                          <polyline
                            id="primary-2"
                            data-name="primary"
                            points="18 15 21 12 18 9"
                            style={{
                              fill: "none",
                              stroke: "#000000",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2",
                            }}
                          ></polyline>
                        </g>
                      </svg>
                    </i>
                  </div>
                  <h5>
                    By Subscription your to out{" "}
                    <span>terms & condition & privecy policy</span>{" "}
                  </h5>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NewsLetter;
