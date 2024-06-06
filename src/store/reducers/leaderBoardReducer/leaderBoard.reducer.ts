import Toast from 'react-native-toast-message';

import { ToastEnum } from 'customToastConfig/toastConfig';
import { translate } from 'locales/i18n';
import { LeaderBoardActionTypeEnum } from 'store/actionTypes/leaderBoard.actionTypes';
import {
  type HandleDropDownValueAction,
  type LeaderBoardActionsType
} from 'store/actions/leaderBoard.actions';
import { LEADER_BOARD_DROPDOWN_ITEMS } from 'utils/constants';
import { LeaderBoarOptionsEnum } from 'utils/enums';
import {
  LEADER_BOARD_TABLE_SORTED_BY_LOWEST_RANK,
  LEADER_BOARD_TABLE_SORTED_BY_NAME,
  createLeaderBoardTable
} from 'utils/helpers';

export interface LeaderBoardState {
  searchText: string;
  rowsData: string[][];
  highlightedRowIndex: number | undefined;
  dropDownValue: LeaderBoarOptionsEnum;
}

export const initialLeaderBoardState: LeaderBoardState = {
  searchText: '',
  rowsData: [],
  highlightedRowIndex: undefined,
  dropDownValue: LEADER_BOARD_DROPDOWN_ITEMS[0]
    .value as LeaderBoarOptionsEnum.SearchTopRank
};
const leaderBoardReducer = (
  state: LeaderBoardState = initialLeaderBoardState,
  action: LeaderBoardActionsType
): LeaderBoardState => {
  switch (action.type) {
    case LeaderBoardActionTypeEnum.SetSearchText:
      return {
        ...state,
        searchText: action.payload
      };
    case LeaderBoardActionTypeEnum.SetDropDownValue:
      return {
        ...state,
        dropDownValue: action.payload
      };
    case LeaderBoardActionTypeEnum.CreateTopRankPlayersTable: {
      const { rowsData: createdRowsData, searchedPlayerIndex } =
        createLeaderBoardTable(state.searchText);
      if (searchedPlayerIndex === undefined && state.searchText) {
        Toast.show({
          type: ToastEnum.Error,
          text1: translate('leader_board.user_not_found.title'),
          text2: translate('leader_board.user_not_found.description')
        });
      }
      return {
        ...state,
        rowsData: createdRowsData,
        highlightedRowIndex: searchedPlayerIndex
      };
    }
    case LeaderBoardActionTypeEnum.HandleDropDownValue: {
      return handleDropDownValueByType(state, action);
    }
    default:
      return state;
  }
};
export default leaderBoardReducer;

export const handleDropDownValueByType = (
  state: LeaderBoardState,
  action: HandleDropDownValueAction
): LeaderBoardState => {
  switch (action.payload) {
    case LeaderBoarOptionsEnum.SearchTopRank:
      return state;
    case LeaderBoarOptionsEnum.SortByName:
      return {
        ...state,
        rowsData: LEADER_BOARD_TABLE_SORTED_BY_NAME,
        highlightedRowIndex: undefined,
        searchText: ''
      };
    case LeaderBoarOptionsEnum.SortByLowestRank:
      return {
        ...state,
        rowsData: LEADER_BOARD_TABLE_SORTED_BY_LOWEST_RANK,
        highlightedRowIndex: undefined,
        searchText: ''
      };
    default:
      return state;
  }
};
