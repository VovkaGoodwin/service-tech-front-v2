import { createAsyncThunk } from '@reduxjs/toolkit';
import { sessionActions, sessionApi } from 'entities/session';

const logoutThunk = createAsyncThunk(
  'features/authentication/logout',
  async (_, { dispatch }) => {
    try {
      dispatch(sessionApi.endpoints.logout.initiate());
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(sessionActions.logout());
      localStorage.removeItem('auth');
    }
  }
);

export default logoutThunk;