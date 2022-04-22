import React, {useEffect} from 'react';
import {Toaster} from 'react-hot-toast'
import GlobalStyle from './styles/global';
import Routes from './routes';

function App() {   
  return (
    <>
      <Toaster/>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
