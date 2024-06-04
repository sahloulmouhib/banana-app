import React from 'react';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';

import { toastConfig } from 'customToastConfig/toastConfig';
import store from 'store/store';

import Layout from './Layout';

export default function App() {
  return (
    <Provider store={store}>
      <Layout />
      <Toast position="top" config={toastConfig} />
    </Provider>
  );
}
