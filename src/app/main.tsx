import React from 'react';
import ReactDOM from 'react-dom/client';

import ReduxProvider from './store';
import AppRouter from './AppRouter/AppRouter.tsx';
import StyleProvider from '@/app/StyleProvider/StyleProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider>
      <StyleProvider>
        <AppRouter />
      </StyleProvider>
    </ReduxProvider>
  </React.StrictMode>,
);
