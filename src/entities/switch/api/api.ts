import { baseApi } from 'shared/api';
import type { Switch } from '../model/types.ts';

const api = baseApi.injectEndpoints({
  endpoints: (b) => ({
    findSwitch: b.query<Switch, {ip: string, port: number}>({
      query: (params) => ({
        url: '/switch',
        params
      })
    })
  })
});

export default api;