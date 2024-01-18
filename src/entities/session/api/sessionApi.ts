import { baseApi } from 'shared/api';
import type { LoginRequestBody } from './types.ts';
import type { User } from '../model/types.ts';

const sessionApi = baseApi.injectEndpoints({
  endpoints: (b) => ({
    login: b.mutation<User, LoginRequestBody>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body
      })
    }),
    logout: b.mutation<void, void>({
      query: () => ({
        url: '/logout',
        method: 'POST'
      })
    })
  })
});

export default sessionApi;