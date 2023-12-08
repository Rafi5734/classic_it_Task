import Container from "react-bootstrap/esm/Container";
import "./productBanner.css";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
const ProductBanner = () => {
  return (
    <Container className="banner_main mb-5">
      <img
        alt="banner_img"
        className="img-fluid"
        src="https://plus.unsplash.com/premium_photo-1678402545077-7a9ec2b5e5b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="top-left-banner fw-bold" style={{ fontSize: "14px" }}>
        <p className="banner_heading">10% OFF ALL TIMES</p>
        <h1 className="product_banner_title">Leave the season in</h1>
        <h1 className="product_banner_title">Furnob Style</h1>
        <Button
          variant="link"
          className="text-decoration-none text-white shop_collection"
        >
          Shop Collection
          <svg
            fill="#fff"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            id="right-arrow"
            data-name="Flat Line"
            xmlns="http://www.w3.org/2000/svg"
            className="icon flat-line ms-2"
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
                  stroke: "#fff",
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
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                }}
              ></polyline>
            </g>
          </svg>
        </Button>
      </div>

      <div className="bottom-left-banner">
        <InputGroup className="input_main">
          <Form.Control
            placeholder="Enter Your Email Address"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            className="bg-transparent text-white subscribe_email"
          />
          <Button
            className="rounded-end"
            variant="outline-light"
            id="button-addon2"
          >
            Send
          </Button>
        </InputGroup>
        <p className="banner_policy">
          By subscribing to agree our
          <a href="#" className="text-white ms-1">
            Terms & Condition and Privacy & Cookies Policy.
          </a>
        </p>
      </div>
    </Container>
  );
};

export default ProductBanner;
