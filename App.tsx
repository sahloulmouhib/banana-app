import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Toast from 'react-native-toast-message';

import CustomButton from 'components/CustomButton/CustomButton';
import CustomDropDownPicker from 'components/CustomDropDownPicker/CustomDropDownPicker';
import CustomSearchBar from 'components/CustomSearchBar/CustomSearchBar';
import CustomTable from 'components/CustomTable/CustomTable';
import { ToastEnum, toastConfig } from 'customToastConfig/toastConfig';
import { translate } from 'locales/i18n';
import { colors } from 'utils/colors';
import {
  LEADER_BOARD_DROPDOWN_ITEMS,
  LEADER_BOARD_ROWS_HEADER,
  spacing
} from 'utils/constants';
import { LeaderBoarOptionsEnum } from 'utils/enums';
import {
  LEADER_BOARD_TABLE_SORTED_BY_LOWEST_RANK,
  LEADER_BOARD_TABLE_SORTED_BY_NAME,
  createLeaderBoardTable
} from 'utils/helpers';
import { type DropDownItem } from 'utils/types';

export default function App() {
  const [text, setText] = useState('');
  const [rowsData, setRowsData] = useState<string[][]>([]);
  const [highlightedRowIndex, setHighlightedRowIndex] = useState<
    undefined | number
  >(undefined);
  const dropDownItems: Array<DropDownItem<number>> =
    LEADER_BOARD_DROPDOWN_ITEMS;
  const [value, setValue] = useState<LeaderBoarOptionsEnum>(
    // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
    LEADER_BOARD_DROPDOWN_ITEMS[0].value as LeaderBoarOptionsEnum
  );

  useEffect(() => {
    switch (value) {
      case LeaderBoarOptionsEnum.SearchTopRank:
        break;
      case LeaderBoarOptionsEnum.SortByName:
        setRowsData(LEADER_BOARD_TABLE_SORTED_BY_NAME);
        setHighlightedRowIndex(undefined);
        setText('');

        break;
      case LeaderBoarOptionsEnum.SortByLowestRank:
        setRowsData(LEADER_BOARD_TABLE_SORTED_BY_LOWEST_RANK);
        setHighlightedRowIndex(undefined);
        setText('');
        break;
      default:
        break;
    }
  }, [value]);

  const onSubmitPress = () => {
    const { rowsData: createdRowsData, searchedPlayerIndex } =
      createLeaderBoardTable(text);
    setRowsData(createdRowsData);
    if (searchedPlayerIndex === undefined && text) {
      Toast.show({
        type: ToastEnum.Error,
        text1: translate('leader_board.user_not_found.title'),
        text2: translate('leader_board.user_not_found.description')
      });
    }
    setHighlightedRowIndex(searchedPlayerIndex);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {value === LeaderBoarOptionsEnum.SearchTopRank && (
          <View style={styles.searchContainer}>
            <CustomSearchBar
              text={text}
              onChangeText={setText}
              placeholder="Type here..."
            />
            <CustomButton width={120} title="Submit" onPress={onSubmitPress} />
          </View>
        )}
        <CustomDropDownPicker
          value={value}
          setValue={setValue}
          items={dropDownItems}
          placeholder="Select"
        />
        <CustomTable
          rowsHeader={LEADER_BOARD_ROWS_HEADER}
          rowsData={rowsData}
          highlightedRowIndex={highlightedRowIndex}
        />
        <Toast position="bottom" config={toastConfig} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    padding: spacing.M,
    gap: spacing.M,
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchContainer: {
    flexDirection: 'row',
    gap: spacing.M
  }
});
