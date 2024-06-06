import { LeaderBoardActionTypeEnum } from 'store/actionTypes/leaderBoard.actionTypes';
import {
  type SetSearchTextAction,
  type HandleDropDownValueAction,
  type CreateTopRankPlayersTableAction,
  type SetDropDownValueAction
} from 'store/actions/leaderBoard.actions';
import { TOP_RANK } from 'utils/constants';
import { LeaderBoarOptionsEnum } from 'utils/enums';
import { LEADER_BOARD_TABLE_SORTED_BY_NAME } from 'utils/helpers';

import leaderBoardReducer, {
  type LeaderBoardState,
  handleDropDownValueByType
} from './leaderBoard.reducer';

jest.mock('react-native-toast-message', () => ({
  show: jest.fn(),
  hide: jest.fn()
}));

describe('leaderBoardReducer', () => {
  it('should handle set search text action', () => {
    const initialState: LeaderBoardState = {
      searchText: '',
      rowsData: [],
      highlightedRowIndex: undefined,
      dropDownValue: LeaderBoarOptionsEnum.SortByName
    };

    const action: SetSearchTextAction = {
      type: LeaderBoardActionTypeEnum.SetSearchText,
      payload: 'text'
    };

    const newState = leaderBoardReducer(initialState, action);

    const expectedState: LeaderBoardState = {
      searchText: 'text',
      rowsData: [],
      highlightedRowIndex: undefined,
      dropDownValue: LeaderBoarOptionsEnum.SortByName
    };

    expect(newState).toEqual(expectedState);
  });

  it('should handle set dropdown value action', () => {
    const initialState: LeaderBoardState = {
      searchText: '',
      rowsData: [],
      highlightedRowIndex: undefined,
      dropDownValue: LeaderBoarOptionsEnum.SortByName
    };

    const action: SetDropDownValueAction = {
      type: LeaderBoardActionTypeEnum.SetDropDownValue,
      payload: LeaderBoarOptionsEnum.SearchTopRank
    };

    const newState = leaderBoardReducer(initialState, action);

    const expectedState: LeaderBoardState = {
      searchText: '',
      rowsData: [],
      highlightedRowIndex: undefined,
      dropDownValue: LeaderBoarOptionsEnum.SearchTopRank
    };

    expect(newState).toEqual(expectedState);
  });

  it('should handle create top rank players table action', () => {
    const initialState: LeaderBoardState = {
      searchText: 'Emma',
      rowsData: [],
      highlightedRowIndex: undefined,
      dropDownValue: LeaderBoarOptionsEnum.SortByName
    };

    const action: CreateTopRankPlayersTableAction = {
      type: LeaderBoardActionTypeEnum.CreateTopRankPlayersTable
    };

    const newState = leaderBoardReducer(initialState, action);
    console.log(newState.rowsData);
    expect(newState.rowsData.length).toEqual(TOP_RANK);
    expect(newState.highlightedRowIndex).toBeDefined();
  });

  it('should handle dropdown value action', () => {
    const initialState: LeaderBoardState = {
      searchText: '',
      rowsData: [],
      highlightedRowIndex: undefined,
      dropDownValue: LeaderBoarOptionsEnum.SortByName
    };

    const action: HandleDropDownValueAction = {
      type: LeaderBoardActionTypeEnum.HandleDropDownValue,
      payload: LeaderBoarOptionsEnum.SortByName
    };

    const newState = handleDropDownValueByType(initialState, action);

    const expectedState: LeaderBoardState = {
      searchText: '',
      rowsData: LEADER_BOARD_TABLE_SORTED_BY_NAME,
      highlightedRowIndex: undefined,
      dropDownValue: LeaderBoarOptionsEnum.SortByName
    };

    expect(newState).toEqual(expectedState);
  });
});
