import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';

import { toastConfig } from 'customToastConfig/toastConfig';
import LeaderBoardScreen from 'screens/LeaderBoardScreen/LeaderBoardScreen';
import store from 'store/store';

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <LeaderBoardScreen />
        <Toast position="top" config={toastConfig} />
      </Provider>
    </SafeAreaProvider>
  );
}
