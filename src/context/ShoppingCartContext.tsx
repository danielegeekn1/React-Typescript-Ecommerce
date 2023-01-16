import { createContext, ReactNode, useContext, useState } from "react";
import ShowCartModal from "../components/ShowCartModal";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface CartItemsProps {
  id: number;
  name: string;
  quantity: number;
  title: string;
  price: number;
  img: string;
  currItems: number;
}

type ShoppingCartContext = {
  addProduct: (id: number) => void;
  removeProduct: (id: number) => void;
  removeAllProducts: () => void;
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  cartQuantity: number;
  cartProducts: CartItemsProps[];
};
type childrenTypes = {
  children: ReactNode;
};
const ECommerceContext = createContext({} as ShoppingCartContext);
export const useECommerceContext = () => {
  return useContext(ECommerceContext);
};
const ShoppingCartContext = ({ children }: childrenTypes) => {
  const [cartProducts, setCartProducts] = useLocalStorage<CartItemsProps[]>(
    "shopping-cart",
    []
  );
  const [open, setOpen] = useState(false);
  const cartQuantity = cartProducts.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const getItemQuantity = (id: number) => {
    return cartProducts.find((item) => item.id === id)?.quantity || 0;
  };
  const openCart = () => setOpen(true);
  const closeCart = () => setOpen(false);
  const addProduct = (id: number) => {
    setCartProducts((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeProduct = (id: number) => {
    setCartProducts((prevItems) => {
      if (prevItems.find((item) => item.id === id)?.quantity === 1) {
        return prevItems.filter((item) => item.id !== id);
      } else {
        return prevItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeAllProducts = () => {
    setCartProducts([]);
  };
  return (
    <ECommerceContext.Provider
      value={{
        addProduct,
        removeProduct,
        removeAllProducts,
        cartProducts,
        openCart,
        closeCart,
        getItemQuantity,
        cartQuantity,
      }}
    >
      {children}
      <ShowCartModal open={open} />
    </ECommerceContext.Provider>
  );
};

export default ShoppingCartContext;
