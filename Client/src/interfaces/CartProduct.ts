import Product from "./product";

type CartProduct = Product & {
  quantity: number;
};

export default CartProduct;