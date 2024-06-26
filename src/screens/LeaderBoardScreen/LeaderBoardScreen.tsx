import React, { useRef } from 'react';
import { View, SafeAreaView, type TextInput } from 'react-native';

import CustomButton from 'components/CustomButton/CustomButton';
import CustomDropDownPicker from 'components/CustomDropDownPicker/CustomDropDownPicker';
import CustomSearchBar from 'components/CustomSearchBar/CustomSearchBar';
import CustomTable from 'components/CustomTable/CustomTable';
import LeaderBoardHeader from 'components/LeaderBoardHeader/LeaderBoardHeader';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import useHandleCustomTableRowFlatList from 'hooks/useHandleCustomTableRowFlatList';
import { translate } from 'locales/i18n';
import {
  setSearchText,
  createTopRankPlayersTable,
  setDropDownValue,
  handleDropDownValue
} from 'store/actions/leaderBoard.actions';
import { useAppSelector, useAppDispatch } from 'store/store.hooks';
import {
  LEADER_BOARD_DROPDOWN_ITEMS,
  LEADER_BOARD_ROWS_HEADER,
  SEARCH_BUTTON_WIDTH
} from 'utils/constants';
import { LeaderBoarOptionsEnum } from 'utils/enums';
import { type DropDownItem } from 'utils/types';

import styles from './leaderBoardScreen.styles';

const LeaderBoardScreen: React.FC = () => {
  const { handleScroll, isScrollToTopVisible, scrollToTop, tableRef } =
    useHandleCustomTableRowFlatList();

  const inputRef = useRef<TextInput | null>(null);

  const blurInput = () => {
    if (inputRef.current) {
      inputRef.current.blur();
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
      <LeaderBoardHeader />
      <View style={styles.container}>
        <View style={styles.dividerContainer}>
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
                width={SEARCH_BUTTON_WIDTH}
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
            onPress={blurInput}
          />
        </View>

        <CustomTable
          rowsHeader={LEADER_BOARD_ROWS_HEADER}
          rowsData={rowsData}
          highlightedRowIndex={highlightedRowIndex}
          tableRef={tableRef}
          onScroll={handleScroll}
          contentContainerStyle={styles.tableContentContainer}
        />
        {rowsData.length > 0 && isScrollToTopVisible && (
          <ScrollToTop onPress={scrollToTop} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default LeaderBoardScreen;
