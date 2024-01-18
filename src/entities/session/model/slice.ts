import { createSlice } from '@reduxjs/toolkit';
import type { User } from './types.ts';
import sessionApi from 'entities/session/api/sessionApi.ts';

type NotAuth = {
  isAuthenticated: false
  user: null
}

type Auth = {
  user: User,
  isAuthenticated: true
}

type SessionSliceState = Auth | NotAuth

const initialState = (JSON.parse(localStorage.getItem('auth') ?? 'null') ?? {
  isAuthenticated: false,
  user: null
}) as SessionSliceState;

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    logout: () => ({
      isAuthenticated: false,
      user: null,
    } as NotAuth)
  },
  extraReducers: (b) =>
    b.addMatcher(
      sessionApi.endpoints.login.matchFulfilled,
      (state: SessionSliceState, action) => {
        state.isAuthenticated = true;

        if (state.isAuthenticated) {
          state.user = {
            ...action.payload
          };
        }
      }),
  selectors: {
    isAuthenticated: (state) => state.isAuthenticated,
    getUser: (state) => state.user
  }
});

export default sessionSlice;
export const sessionActions = {
  ...sessionSlice.actions
};

export const sessionSelectors = {
  ...sessionSlice.selectors
};