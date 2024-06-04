import React, { useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  type TextInput,
  View,
  type FlatList
} from 'react-native';

import CustomButton from 'components/CustomButton/CustomButton';
import CustomDropDownPicker from 'components/CustomDropDownPicker/CustomDropDownPicker';
import CustomSearchBar from 'components/CustomSearchBar/CustomSearchBar';
import CustomTable from 'components/CustomTable/CustomTable';
import { translate } from 'locales/i18n';
import {
  createTopRankPlayersTable,
  handleDropDownValue,
  setDropDownValue,
  setSearchText
} from 'store/actions/leaderBoard.actions';
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
  const inputRef = useRef<TextInput | null>(null);
  const blurInput = () => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const tableRef = useRef<FlatList | null>(null);
  const scrollToTop = () => {
    if (tableRef.current) {
      tableRef.current.scrollToIndex({ index: 0, animated: true });
    }
  };

  const { searchText, rowsData, highlightedRowIndex, dropDownValue } =
    useAppSelector((state) => state.leaderBoard);

  const dispatch = useAppDispatch();

  const iSearchButtonDisabled = searchText.trim().length === 0;

  const dropDownItems: Array<DropDownItem<number>> =
    LEADER_BOARD_DROPDOWN_ITEMS;

  const onChangeSearchText = (text: string) => {
    dispatch(setSearchText(text));
  };

  const onSubmitSearch = () => {
    blurInput();
    dispatch(createTopRankPlayersTable());
  };

  const changeDropDownValue = (callback: () => LeaderBoarOptionsEnum) => {
    dispatch(setDropDownValue(callback()));
  };

  const onChangeDropDownValue = (value: LeaderBoarOptionsEnum) => {
    dispatch(handleDropDownValue(value));
    scrollToTop();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {dropDownValue === LeaderBoarOptionsEnum.SearchTopRank && (
          <View style={styles.searchContainer}>
            <CustomSearchBar
              text={searchText}
              onChangeText={onChangeSearchText}
              placeholder={translate('leader_board.search_player')}
              inputRef={inputRef}
            />
            <CustomButton
              isDisabled={iSearchButtonDisabled}
              width={120}
              title={translate('leader_board.search')}
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
          onPress={blurInput}
        />
        <CustomTable
          rowsHeader={LEADER_BOARD_ROWS_HEADER}
          rowsData={rowsData}
          highlightedRowIndex={highlightedRowIndex}
          tableRef={tableRef}
        />
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
