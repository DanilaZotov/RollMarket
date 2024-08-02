import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CartProduct from "../../interfaces/CartProduct";

interface CartState {
  items: CartProduct[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartProduct>) => {
      state.items.push(action.payload);
    },
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const ItemInCart = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (ItemInCart) {
        if (ItemInCart.quantity !== undefined) {
          ItemInCart.quantity++;
        }
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action: PayloadAction<CartProduct>) => {
      const ItemInCart = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (ItemInCart && ItemInCart.quantity !== undefined) {
        ItemInCart.quantity++;
      }
    },

    decreaseQuantity: (state, action: PayloadAction<CartProduct>) => {
      const ItemInCart = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (
        ItemInCart &&
        ItemInCart.quantity !== undefined &&
        ItemInCart.quantity > 1
      ) {
        ItemInCart.quantity--;
      } else if (
        ItemInCart && ItemInCart.quantity === 1
      ) {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      }
    },
    removeItem: (state, action: PayloadAction<CartProduct>) => {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      },
  },
});

export const { addItem, addToCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
