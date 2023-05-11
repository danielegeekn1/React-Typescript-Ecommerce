import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./storeProduct.css";
import products from "../data/product.json";
import { Button } from "react-bootstrap";
import { useECommerceContext } from "../context/ShoppingCartContext";

type StoreProductProps = {
  id: number;
};

const StoreProducts = ({ id }: StoreProductProps) => {
  const { addProduct, removeProduct, cartQuantity, getItemQuantity } =
    useECommerceContext();
  const quantity = getItemQuantity(id);
  return (
    <div>
      {cartQuantity}
      <Splide
        options={{
          perPage: 4,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "3rem",
        }}
      >
        {products.map((item, i) => (
          <SplideSlide>
            <div className="main_card">
              <div key={i} className="card">
                <img src={item.img} alt="product-images" />

                <h6>{item.price}</h6>
                <h5>{item.title}</h5>
                <div>
                  {quantity > 1 && (
                    <span className="text-muted" style={{ fontSize: ".65rem" }}>
                      x{quantity}
                    </span>
                  )}
                </div>
              </div>
              <div className="button-container">
                <Button onClick={() => addProduct(item.id)}>
                  Add product in the cart
                </Button>

                <Button onClick={() => removeProduct(item.id)}>
                  Remove product from the cart
                </Button>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default StoreProducts;
