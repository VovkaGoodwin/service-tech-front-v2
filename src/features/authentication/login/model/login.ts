import { createAsyncThunk } from '@reduxjs/toolkit';
import sessionApi from 'entities/session/api/sessionApi.ts';

type Params = {
  login: string,
  password: string,
}

const loginThunk = createAsyncThunk<
  void,
  Params,
  { state: RootState }
>(
  'feature/authentication/login',
  async (body, { dispatch }) => {
    try {
      const data = await dispatch(sessionApi.endpoints.login.initiate(body)).unwrap();
      localStorage.setItem('auth', JSON.stringify({
        isAuthenticated: true,
        user: data
      }));
    } catch (e) {
      console.error(e);
    }
  }
);

export default loginThunk;