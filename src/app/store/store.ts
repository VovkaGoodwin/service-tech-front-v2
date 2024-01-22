import { configureStore, type TypedStartListening } from '@reduxjs/toolkit';

import rootReducer from './rootReducer.ts';

import { invalidateTokenListener } from 'features/authentication/invlaidateToken';
import { baseApi } from 'shared/api';

const store = configureStore({
  reducer: rootReducer,
  middleware: (b) =>
    b().prepend(baseApi.middleware)
      .concat(invalidateTokenListener.middleware),
  devTools: import.meta.env.DEV
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export type TypedListening = TypedStartListening<RootState, AppDispatch>