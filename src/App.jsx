import React, {useEffect} from 'react';
import {Toaster} from 'react-hot-toast'
import GlobalStyle from './styles/global';
import Routes from './routes';
import {writeLog} from './utils/utils'

function App() {   
  writeLog('starting App')
  return (
    <>
      <Toaster/>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
