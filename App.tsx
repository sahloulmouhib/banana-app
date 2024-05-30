import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

import CustomButton from 'components/CustomButton/CustomButton';
import CustomSearchBar from 'components/CustomSearchBar/CustomSearchBar';
import CustomTable from 'components/CustomTable/CustomTable';
import { ToastEnum, toastConfig } from 'customToastConfig/toastConfig';
import { translate } from 'locales/i18n';
import { LEADER_BOARD_ROWS_HEADER } from 'utils/constants';
import { createLeaderBoardTable } from 'utils/helpers';

export default function App() {
  const [text, setText] = useState('');
  const [rowsData, setRowsData] = useState<string[][]>([[]]);
  const [highlightedRowIndex, setHighlightedRowIndex] = useState<
    undefined | number
  >(undefined);
  return (
    <SafeAreaView style={styles.container}>
      <CustomSearchBar
        text={text}
        onChangeText={setText}
        placeholder="Type here..."
      />
      <CustomButton
        title="Submit"
        onPress={() => {
          const { rowsData, searchedPlayerIndex } =
            createLeaderBoardTable(text);
          setRowsData(rowsData);
          if (searchedPlayerIndex === undefined && text) {
            Toast.show({
              type: ToastEnum.Error,
              text1: translate('leader_board.user_not_found.title'),
              text2: translate('leader_board.user_not_found.description')
            });
          }
          setHighlightedRowIndex(searchedPlayerIndex);
        }}
      />
      <CustomTable
        rowsHeader={LEADER_BOARD_ROWS_HEADER}
        rowsData={rowsData}
        highlightedRowIndex={highlightedRowIndex}
      />
      <Toast position="bottom" config={toastConfig} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
