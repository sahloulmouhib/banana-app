import React from 'react';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';

import { toastConfig } from 'customToastConfig/toastConfig';
import LeaderBoardScreen from 'screens/LeaderBoardScreen/LeaderBoardScreen';
import store from 'store/store';

export default function App() {
  return (
    <Provider store={store}>
      <LeaderBoardScreen />
      <Toast position="top" config={toastConfig} />
    </Provider>
  );
}
