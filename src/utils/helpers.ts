import { PLAYERS_DATA } from 'db/data';

import { TOP_RANK } from './constants';

export const TOP_LEADER_BOARD_TABLE = PLAYERS_DATA.map((player, index) => [
  player.name,
  (index + 1).toString(),
  player.nbrOfBananas.toString()
]).slice(0, TOP_RANK);

export const createLeaderBoardTable = (
  searchedName?: string
): {
  rowsData: string[][];
  searchedPlayerIndex?: number;
} => {
  if (!searchedName) {
    return {
      rowsData: TOP_LEADER_BOARD_TABLE
    };
  }

  {
    let leaderBoardTable: string[][] = [];
    let searchedPlayerIndex: number | undefined;
    for (let index = 0; index < PLAYERS_DATA.length; index++) {
      const player = PLAYERS_DATA[index];
      if (
        player.name.toLocaleLowerCase() === searchedName.toLocaleLowerCase()
      ) {
        if (index < TOP_RANK) {
          leaderBoardTable = TOP_LEADER_BOARD_TABLE;
          searchedPlayerIndex = index;
        } else {
          leaderBoardTable = [
            ...TOP_LEADER_BOARD_TABLE.slice(0, TOP_RANK - 1),
            [
              player.name,
              (index + 1).toString(),
              player.nbrOfBananas.toString()
            ]
          ];
          searchedPlayerIndex = TOP_RANK - 1;
        }
        break;
      }
    }
    return {
      rowsData: leaderBoardTable,
      searchedPlayerIndex
    };
  }
};
