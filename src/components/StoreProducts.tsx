//import { Button } from "react-bootstrap";
import { useECommerceContext } from "../context/ShoppingCartContext";
import "./storeProduct.css";
type StoreProductProps = {
  id: number;
  img: string;
  title: string;
  price: number;
};

const StoreProducts = ({ id, img, title, price }: StoreProductProps) => {
  const { addProduct, removeProduct, cartQuantity, getItemQuantity } =
    useECommerceContext();
  const quantity = getItemQuantity(id);
  return (
    <>
      <div>{cartQuantity}</div>
      <div className="main-card">
        <div key={id} className="card">
          <img src={img} alt="product-images" />

          <h6>{price}</h6>
          <h5>{title}</h5>
          <div>
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: ".65rem" }}>
                x{quantity}
              </span>
            )}
          </div>
        </div>
        <div className="button-container">
          {/* <Button onClick={() => addProduct(id)} className="btn">
            Add product in the cart
          </Button> */}
          <button className="btn-c" onClick={() => addProduct(id)}>
            add
          </button>
          <button className="btn-c" onClick={() => removeProduct(id)}>
            remove
          </button>
          {/* <Button onClick={() => removeProduct(id)} className="btn">
            Remove product from the cart
          </Button> */}
        </div>
      </div>
    </>
  );
};

export default StoreProducts;
