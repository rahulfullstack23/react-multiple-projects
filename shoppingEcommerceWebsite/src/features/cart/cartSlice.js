import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingItem = state.items.find(
        (item) =>
          item.id === product.id &&
          item.size === product.size
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }

      state.totalQuantity += 1;
      state.totalAmount += Number(product.price);
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (!item) return;

      item.quantity += 1;
      state.totalQuantity += 1;
      state.totalAmount += Number(item.price);
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (!item) return;

      item.quantity -= 1;

      state.totalQuantity -= 1;
      state.totalAmount -= Number(item.price);

      if (item.quantity <= 0) {
        state.items = state.items.filter(
          (product) => product.id !== action.payload
        );
      }
    },

    removeFromCart: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (!item) return;

      state.totalQuantity -= item.quantity;

      state.totalAmount -=
        Number(item.price) * item.quantity;

      state.items = state.items.filter(
        (product) => product.id !== action.payload
      );
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;