import React from 'react';
import GlobalStyle from './styles/GlobalStyle';

import Header from '@components/Header';
import Contents from '@pages/Contents';

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Contents/>
    </>
  );
};

export default App;