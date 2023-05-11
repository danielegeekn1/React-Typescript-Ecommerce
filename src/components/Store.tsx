import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import products from "../data/product.json";
import StoreProducts from "./StoreProducts";
import "./store.css";
const Store = () => {
  return (
    <>
      <Splide
        options={{
          perPage: 3,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "3rem",
        }}
      >
        {products.map((item) => (
          <SplideSlide>
            <div className="product">
              <StoreProducts {...item} />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};
export default Store;
