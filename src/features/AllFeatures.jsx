import BannerSection2 from "./bannerSection2/BannerSection2";
import BestProducts from "./bestProduct/BestProducts";
import BestSellingProduct from "./bestSellingProduct/BestSellingProduct";
import CategoryFeature from "./category_feature/CategoryFeature";
import DealDiscount from "./deal&discount/DealDiscount";
import DisplayFeature from "./display_feature/DisplayFeature";
import ProductBanner from "./productBanner/ProductBanner";

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
    </div>
  );
};

export default AllFeatures;
