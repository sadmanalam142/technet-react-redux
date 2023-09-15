import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/cart/cartSlice';
import productSlice from './features/product/productSlice';
import { api } from './api/apiSlice';
import userSlice from './user/userSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
    user: userSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
