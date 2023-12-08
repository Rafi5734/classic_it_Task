import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./dealDiscount.css";
const DealDiscount = () => {
  return (
    <Container
      className="overflow-hidden"
      style={{ backgroundColor: "#F6FCFC" }}
    >
      <Row>
        <Col
          sm={12}
          md={6}
          lg={6}
          className="d-flex justify-content-center align-center mt-5 mb-5 column_one"
        >
          <div className="d-flex flex-column">
            <p
              style={{ fontSize: "14px", color: "#EA7600" }}
              className="fw-bold"
            >
              Massey Collection 2021
            </p>
            <h1>Autumn Deal, discounts</h1>
            <h1>
              <span style={{ color: "#EA7600" }}>up to 20%</span> are waiting
            </h1>
            <h1>for you ...</h1>
            <p className="w-100 text-muted mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
              aperiam animi dignissimos magnam porro tempore non quaerat veniam
              nulla itaque.
            </p>

            <p>It will be worth the wait very soon !</p>
            <div className="d-flex">
              <h1 className="me-2">
                31
                <span className="text-muted" style={{ fontSize: "14px" }}>
                  d
                </span>
              </h1>{" "}
              <p className="mt-2">:</p>
              <h1 className="ms-2">
                31
                <span className="text-muted me-2" style={{ fontSize: "14px" }}>
                  h
                </span>
              </h1>
              <p className="mt-2">:</p>
              <h1 className="ms-2">
                31
                <span className="text-muted me-2" style={{ fontSize: "14px" }}>
                  m
                </span>
              </h1>
              <p className="mt-2">:</p>
              <h1 className="ms-2" style={{ color: "#EA7600" }}>
                31
                <span
                  className="me-2"
                  style={{ fontSize: "14px", color: "#EA7600" }}
                >
                  s
                </span>
              </h1>
            </div>
          </div>
        </Col>
        <Col
          sm={12}
          md={6}
          lg={6}
          className="d-flex justify-content-center align-center mt-5 mb-5 furniture_col"
        >
          <img
            alt="furniture"
            style={{ paddingRight: "70px" }}
            className="img-fluid rounded rounded-end"
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="top-left d-flex flex-column">
            <span className="text-muted mt-2" style={{ fontSize: "12px" }}>
              Designed By
            </span>
            <span
              className="pt-0 mt-0 text-muted mb-2"
              style={{ fontSize: "12px" }}
            >
              <span className="fw-bold">Melan Arg</span> - France
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DealDiscount;
