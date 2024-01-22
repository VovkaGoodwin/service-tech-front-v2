import { createAction } from '@reduxjs/toolkit';

const invalidateToken = createAction('shared/api/invalidate-token');

export default invalidateToken;