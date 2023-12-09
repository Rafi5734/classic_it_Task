import BannerSection2 from "./bannerSection2/BannerSection2";
import BestProducts from "./bestProduct/BestProducts";
import BestSellingProduct from "./bestSellingProduct/BestSellingProduct";
import CategoryFeature from "./category_feature/CategoryFeature";
import Customer from "./customer/Customer";
import DealDiscount from "./deal&discount/DealDiscount";
import DisplayFeature from "./display_feature/DisplayFeature";
import Footer from "./footer/footer";
import News from "./news/News";
import NewsLetter from "./newsLetter/NewsLetter";
import ProductBanner from "./productBanner/ProductBanner";
import Service from "./service/Service";

const AllFeatures = () => {
  return (
    <div>
      <DisplayFeature />
      <CategoryFeature />
      <DealDiscount />
      <BestProducts />
      <ProductBanner />
      <BestSellingProduct />
      <BannerSection2 />
      <Customer />
      <News />
      <Service />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default AllFeatures;
