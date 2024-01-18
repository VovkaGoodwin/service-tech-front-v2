import { combineSlices } from '@reduxjs/toolkit';

import { sessionSlice } from 'entities/session';
import baseApi from 'shared/api/baseApi.ts';

const rootReducer = combineSlices({
  [sessionSlice.name]: sessionSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer
});

export default rootReducer;