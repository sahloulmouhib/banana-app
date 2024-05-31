import { Platform } from 'react-native';

import { translate } from 'locales/i18n';

import { LeaderBoarOptionsEnum } from './enums';
import { type DropDownItem } from './types';

export const IS_IOS = Platform.OS === 'ios';

export const TOP_RANK = 10;

export const LEADER_BOARD_ROWS_HEADER = [
  translate('leader_board.rows_header.one'),
  translate('leader_board.rows_header.two'),
  translate('leader_board.rows_header.three')
];
export const spacing = {
  L: 32,
  M: 16,
  S: 8,
  XS: 4
};

export const fontSize = {
  L: 20,
  M: 16,
  S: 14,
  XS: 8
};

export const LEADER_BOARD_DROPDOWN_ITEMS: Array<
  DropDownItem<LeaderBoarOptionsEnum>
> = [
  { label: 'Search Top 10', value: LeaderBoarOptionsEnum.SearchTopRank },
  { label: 'Sort by name', value: LeaderBoarOptionsEnum.SortByName },
  {
    label: 'Sort by lowest rank',
    value: LeaderBoarOptionsEnum.SortByLowestRank
  }
];
