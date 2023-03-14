import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import auth from '../feature/auth/services/authSlice';
import { loginApi } from '../feature/auth';
import { userApi } from '../feature/users';
import { orderApi } from '../feature/order';
import { addressApi } from '../feature/address';
import { sharedApi } from '../feature/shared';
import { paymentApi } from '../feature/payment';

export const store = configureStore({
  reducer: {
    auth,
    [loginApi.reducerPath]: loginApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
    [sharedApi.reducerPath]: sharedApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      loginApi.middleware,
      orderApi.middleware,
      userApi.middleware,
      addressApi.middleware,
      sharedApi.middleware,
      paymentApi.middleware,
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
