import { createListenerMiddleware } from '@reduxjs/toolkit';
import sessionApi from 'entities/session/api/sessionApi.ts';

const saveAuthDataListener = createListenerMiddleware();

const startSaveAuthDataListener = saveAuthDataListener.startListening as TypedListening;

startSaveAuthDataListener({
  matcher: sessionApi.endpoints.login.matchFulfilled,
  effect: (action) => {
    localStorage.setItem('auth', JSON.stringify({
      isAuthenticated: true,
      user: action.payload
    }));
  }
});

export default saveAuthDataListener;