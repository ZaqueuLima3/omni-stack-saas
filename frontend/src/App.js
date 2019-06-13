import React from 'react';
import { Provider } from 'react-redux';

import './config/reactotron';
import GlobalStyles from './styles/globals';

import store from './store';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <>
        <Routes />
        <GlobalStyles />
      </>
    </Provider>
  );
}

export default App;
