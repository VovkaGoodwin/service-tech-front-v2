import type { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import store from './store.ts';

const ReduxProvider: FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default ReduxProvider;