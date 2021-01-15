import React from 'react';

import Login from './pages/Login';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Login />
    </>
  );
};

export default App;
