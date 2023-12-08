import Container from "react-bootstrap/esm/Container";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import productImage from "../../assets/product_img-removebg-preview.png";
import "./categoryFeature.css";
const CategoryFeature = () => {
  return (
    <Container className="mt-5 mb-5">
      <Container>
        <Container>
          <Container>
            <h4 className="text-center">Featured Categories</h4>
            <p className="text-center" style={{ color: "#9296A3" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              eos repellendus ad at deleniti quibusdam?
            </p>
            <div>
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                history={{
                  key: "slide",
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide className="swiper_sliders">
                  <Card style={{ width: "100%", backgroundColor: "#eeeeee" }}>
                    <Card.Img variant="top" src={productImage} />
                    <Card.Body>
                      <p className="text-center fs-6 fw-bold">Living Room</p>
                      <Card.Text
                        className="text-center"
                        style={{ fontSize: "14px" }}
                      >
                        11 Items
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
                <SwiperSlide className="swiper_sliders">
                  <Card style={{ width: "100%", backgroundColor: "#eeeeee" }}>
                    <Card.Img variant="top" src={productImage} />
                    <Card.Body>
                      <p className="text-center fs-6 fw-bold">Bed Room</p>
                      <Card.Text
                        className="text-center"
                        style={{ fontSize: "14px" }}
                      >
                        11 Items
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
                <SwiperSlide className="swiper_sliders">
                  <Card style={{ width: "100%", backgroundColor: "#eeeeee" }}>
                    <Card.Img variant="top" src={productImage} />
                    <Card.Body>
                      <p className="text-center fs-6 fw-bold">
                        Business Solution
                      </p>
                      <Card.Text
                        className="text-center"
                        style={{ fontSize: "14px" }}
                      >
                        11 Items
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
                <SwiperSlide className="swiper_sliders">
                  <Card style={{ width: "100%", backgroundColor: "#eeeeee" }}>
                    <Card.Img variant="top" src={productImage} />
                    <Card.Body>
                      <p className="text-center fs-6 fw-bold">Home Office</p>
                      <Card.Text
                        className="text-center"
                        style={{ fontSize: "14px" }}
                      >
                        11 Items
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
                <SwiperSlide className="swiper_sliders">
                  <Card style={{ width: "100%", backgroundColor: "#eeeeee" }}>
                    <Card.Img variant="top" src={productImage} />
                    <Card.Body>
                      <p className="text-center fs-6 fw-bold">Lighting</p>
                      <Card.Text
                        className="text-center"
                        style={{ fontSize: "14px" }}
                      >
                        11 Items
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
                <SwiperSlide className="swiper_sliders">
                  <Card style={{ width: "100%", backgroundColor: "#eeeeee" }}>
                    <Card.Img variant="top" src={productImage} />
                    <Card.Body>
                      <p className="text-center fs-6 fw-bold">
                        Home Decoration
                      </p>
                      <Card.Text
                        className="text-center"
                        style={{ fontSize: "14px" }}
                      >
                        11 Items
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
                <SwiperSlide className="swiper_sliders">
                  <Card style={{ width: "100%", backgroundColor: "#eeeeee" }}>
                    <Card.Img variant="top" src={productImage} />
                    <Card.Body>
                      <p className="text-center fs-6 fw-bold">Living Room</p>
                      <Card.Text
                        className="text-center"
                        style={{ fontSize: "14px" }}
                      >
                        11 Items
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
                <SwiperSlide className="swiper_sliders">
                  <Card style={{ width: "100%", backgroundColor: "#eeeeee" }}>
                    <Card.Img variant="top" src={productImage} />
                    <Card.Body>
                      <p className="text-center fs-6 fw-bold">Living Room</p>
                      <Card.Text
                        className="text-center"
                        style={{ fontSize: "14px" }}
                      >
                        11 Items
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
                <SwiperSlide className="swiper_sliders">
                  <Card style={{ width: "100%", backgroundColor: "#eeeeee" }}>
                    <Card.Img variant="top" src={productImage} />
                    <Card.Body>
                      <p className="text-center fs-6 fw-bold">Living Room</p>
                      <Card.Text
                        className="text-center"
                        style={{ fontSize: "14px" }}
                      >
                        11 Items
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              </Swiper>
            </div>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default CategoryFeature;
