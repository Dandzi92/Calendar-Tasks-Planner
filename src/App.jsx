import React from 'react';
import { Provider } from 'react-redux';
import Layout from './components/Layout/index';
import Main from './components/Main/index';
import store from './store';
import './styles/main.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Main />
      </Layout>
    </Provider>
  );
};

export default App;
