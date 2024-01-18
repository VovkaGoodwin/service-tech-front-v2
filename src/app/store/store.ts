import { configureStore, type TypedStartListening } from '@reduxjs/toolkit';

import rootReducer from './rootReducer.ts';

import { loginListener } from 'features/authentication/login';
import { baseApi } from 'shared/api';

const store = configureStore({
  reducer: rootReducer,
  middleware: (b) =>
    b().prepend(baseApi.middleware)
      .concat(loginListener.middleware),
  devTools: import.meta.env.DEV
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export type TypedListening = TypedStartListening<RootState, AppDispatch>