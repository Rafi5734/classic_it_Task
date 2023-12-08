import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import "./dailyFeature.css";
import Button from "react-bootstrap/esm/Button";
import carouselImage1 from "../../assets/carousel_1.png";
import carouselImage2 from "../../assets/carousel_2.png";
import carouselImage3 from "../../assets/carousel_3.png";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
const DisplayFeature = () => {
  return (
    <Container className="mt-2">
      <Carousel className="carousel_main">
        <Carousel.Item className="carousel_item">
          <img
            className="d-block w-100 carousel_img"
            src={carouselImage1}
            alt="First slide"
          />
          <Carousel.Caption className="carousel_text">
            <p className="fs-6">10% OFF ALL ITEMS</p>
            <h1 className="bold_sentence" style={{ fontWeight: "900" }}>
              Best furniture at the
            </h1>
            <h1 className="bold_sentence" style={{ fontWeight: "900" }}>
              best price
            </h1>
            <p className="mt-4 carousel_paragraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
              aliquid quo, voluptates dolorem a rerum ab obcaecati voluptatem
            </p>
            <Button variant="light" className="ps-4 pe-4">
              <span className="me-1">Shop Collections</span>
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
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel_item">
          <img
            className="d-block w-100 carousel_img"
            src={carouselImage2}
            alt="First slide"
          />
          <Carousel.Caption className="carousel_text">
            <p className="fs-6">10% OFF ALL ITEMS</p>
            <h1 className="bold_sentence" style={{ fontWeight: "900" }}>
              Best furniture at the
            </h1>
            <h1 className="bold_sentence" style={{ fontWeight: "900" }}>
              best price
            </h1>
            <p className="mt-4 carousel_paragraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
              aliquid quo, voluptates dolorem a rerum ab obcaecati voluptatem
            </p>
            <Button variant="light" className="ps-4 pe-4">
              <span className="me-1">Shop Collections</span>
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
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel_item">
          <img
            className="d-block w-100 carousel_img"
            src={carouselImage3}
            alt="First slide"
          />
          <Carousel.Caption className="carousel_text">
            <p className="fs-6">10% OFF ALL ITEMS</p>
            <h1 className="bold_sentence" style={{ fontWeight: "900" }}>
              Best furniture at the
            </h1>
            <h1 className="bold_sentence" style={{ fontWeight: "900" }}>
              best price
            </h1>
            <p className="mt-4 carousel_paragraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
              aliquid quo, voluptates dolorem a rerum ab obcaecati voluptatem
            </p>
            <Button variant="light" className="ps-4 pe-4 mb-5">
              <span className="me-1">Shop Collections</span>
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
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default DisplayFeature;
