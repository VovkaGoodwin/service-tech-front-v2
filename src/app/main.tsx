import React from 'react';
import ReactDOM from 'react-dom/client';

import ReduxProvider from './store';
import AppRouter from './AppRouter/AppRouter.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider>
      <AppRouter />
    </ReduxProvider>
  </React.StrictMode>,
);
