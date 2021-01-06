import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/index';
import GlobalStyle from './styles/global';
import { AuthProvider } from './hooks/useAuth';

const App: React.FC = () => (
  <BrowserRouter>
    <AuthProvider>
      <Routes />
    </AuthProvider>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
