import React from 'react';
import Branding from './components/Branding';
import Footer  from './components/Footer';

import Header from './components/Header'

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Branding />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
