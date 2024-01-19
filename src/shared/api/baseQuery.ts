import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = import.meta.env.DEV ? 'http://localhost:8000/api' : '/api';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL
});

export default baseQuery;

