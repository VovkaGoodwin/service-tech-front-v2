import { createListenerMiddleware } from '@reduxjs/toolkit';
import { invalidateToken } from 'shared/api';
import { logoutThunk } from '../../logout';

const listener = createListenerMiddleware();

const startListening = listener.startListening as TypedListening;

startListening({
  actionCreator: invalidateToken,
  effect: (_, api) => {
    api.dispatch(logoutThunk());
  }
});

export default listener;