import { configureStore } from '@reduxjs/toolkit';

import userApi from './apis/user';

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([userApi.middleware]),
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
