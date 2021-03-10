import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes/index';
import GlobalStyle from './styles/global';
import { AuthProvider } from './hooks/useAuth';
import store from './store';

const App: React.FC = () => (
  <BrowserRouter>
    <Provider store={store}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Provider>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
