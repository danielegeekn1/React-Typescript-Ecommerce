import { Offcanvas, Stack } from "react-bootstrap";
import { useECommerceContext } from "../context/ShoppingCartContext";
import products from "../data/product.json";
import CartModal from "./CartModal";
type ShowCartModalProps = {
  open: boolean;
};
const ShowCartModal = ({ open }: ShowCartModalProps) => {
  const { closeCart, cartProducts } = useECommerceContext();
  return (
    <Offcanvas show={open} onHide={closeCart} animation={true} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>My Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartProducts.map((item, i) => (
            <CartModal key={i} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total
            {cartProducts.reduce((total, cartItem) => {
              const item = products.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShowCartModal;
