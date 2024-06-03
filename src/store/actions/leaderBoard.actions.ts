import { LeaderBoarOptionsEnum } from 'utils/enums';

import { LeaderBoardActionTypeEnum } from '../actionTypes/leaderBoard.actionTypes';

export interface SetSearchTextAction {
  type: typeof LeaderBoardActionTypeEnum.SetSearchText;
  payload: string;
}

export interface SetDropDownValueAction {
  type: typeof LeaderBoardActionTypeEnum.SetDropDownValue;
  payload: LeaderBoarOptionsEnum;
}

export interface CreateTopRankPlayersTableAction {
  type: typeof LeaderBoardActionTypeEnum.CreateTopRankPlayersTable;
}

export interface HandleDropDownValueAction {
  type: typeof LeaderBoardActionTypeEnum.HandleDropDownValue;
  payload: LeaderBoarOptionsEnum;
}

export const setSearchText = (text: string): SetSearchTextAction => {
  return {
    type: LeaderBoardActionTypeEnum.SetSearchText,
    payload: text
  };
};

export const setDropDownValue = (
  value: LeaderBoarOptionsEnum
): SetDropDownValueAction => {
  return {
    type: LeaderBoardActionTypeEnum.SetDropDownValue,
    payload: value
  };
};

export const createTopRankPlayersTable =
  (): CreateTopRankPlayersTableAction => {
    return {
      type: LeaderBoardActionTypeEnum.CreateTopRankPlayersTable
    };
  };

export const handleDropDownValue = (
  value: LeaderBoarOptionsEnum
): HandleDropDownValueAction => {
  return {
    type: LeaderBoardActionTypeEnum.HandleDropDownValue,
    payload: value
  };
};

export type LeaderBoardActionsType =
  | SetSearchTextAction
  | CreateTopRankPlayersTableAction
  | HandleDropDownValueAction
  | SetDropDownValueAction;
