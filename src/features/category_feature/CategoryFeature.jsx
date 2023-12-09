import Container from "react-bootstrap/esm/Container";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Navigation, Pagination } from "swiper/modules";
import productImage from "../../assets/product_img-removebg-preview.png";
import "./categoryFeature.css";
import Tilt from "react-parallax-tilt";
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
                  <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                    gyroscope={true}
                  >
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
                  </Tilt>
                </SwiperSlide>
                <SwiperSlide className="swiper_sliders">
                  <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                    gyroscope={true}
                  >
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
                  </Tilt>
                </SwiperSlide>
                <SwiperSlide className="swiper_sliders">
                  <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                    gyroscope={true}
                  >
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
                  </Tilt>
                </SwiperSlide>
                <SwiperSlide className="swiper_sliders">
                  <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                    gyroscope={true}
                  >
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
                  </Tilt>
                </SwiperSlide>
                <SwiperSlide className="swiper_sliders">
                  <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                    gyroscope={true}
                  >
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
                  </Tilt>
                </SwiperSlide>
                <SwiperSlide className="swiper_sliders">
                  <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                    gyroscope={true}
                  >
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
                  </Tilt>
                </SwiperSlide>
                <SwiperSlide className="swiper_sliders">
                  <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                    gyroscope={true}
                  >
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
                  </Tilt>
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
