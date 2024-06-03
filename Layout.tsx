import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';

import CustomButton from 'components/CustomButton/CustomButton';
import CustomDropDownPicker from 'components/CustomDropDownPicker/CustomDropDownPicker';
import CustomSearchBar from 'components/CustomSearchBar/CustomSearchBar';
import CustomTable from 'components/CustomTable/CustomTable';
import { toastConfig } from 'customToastConfig/toastConfig';
import {
  createTopRankPlayersTable,
  handleDropDownValue,
  setDropDownValue,
  setSearchText
} from 'store/actions/leaderBoard.actions';
import store from 'store/store';
import { useAppDispatch, useAppSelector } from 'store/store.hooks';
import { colors } from 'utils/colors';
import {
  LEADER_BOARD_DROPDOWN_ITEMS,
  LEADER_BOARD_ROWS_HEADER,
  spacing
} from 'utils/constants';
import { LeaderBoarOptionsEnum } from 'utils/enums';
import { type DropDownItem } from 'utils/types';

export default function Layout() {
  const { searchText, rowsData, highlightedRowIndex, dropDownValue } =
    useAppSelector((state) => state.leaderBoard);

  const dispatch = useAppDispatch();

  const dropDownItems: Array<DropDownItem<number>> =
    LEADER_BOARD_DROPDOWN_ITEMS;

  const onChangeSearchText = (text: string) => {
    dispatch(setSearchText(text));
  };

  const onSubmitSearch = () => {
    dispatch(createTopRankPlayersTable());
  };

  const changeDropDownValue = (callback: () => LeaderBoarOptionsEnum) => {
    dispatch(setDropDownValue(callback()));
  };

  const onChangeDropDownValue = (value: LeaderBoarOptionsEnum) => {
    dispatch(handleDropDownValue(value));
  };
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {dropDownValue === LeaderBoarOptionsEnum.SearchTopRank && (
            <View style={styles.searchContainer}>
              <CustomSearchBar
                text={searchText}
                onChangeText={onChangeSearchText}
                placeholder="Type here..."
              />
              <CustomButton
                width={120}
                title="Submit"
                onPress={onSubmitSearch}
              />
            </View>
          )}
          <CustomDropDownPicker
            value={dropDownValue}
            setValue={changeDropDownValue}
            items={dropDownItems}
            onChangeValue={onChangeDropDownValue}
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
    </Provider>
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
