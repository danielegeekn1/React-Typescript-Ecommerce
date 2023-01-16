import { Button, Stack } from "react-bootstrap";
import { useECommerceContext } from "../context/ShoppingCartContext";
import products from "../data/product.json";
type CartModalProps = {
  id: number;
  quantity: number;
};
const CartModal = ({ id, quantity }: CartModalProps) => {
  const { removeProduct } = useECommerceContext();

  const item = products.find((i) => i.id === id);

  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.img}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.title}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {item.price}
        </div>
      </div>
      <div> {item.price * quantity}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeProduct(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartModal;
