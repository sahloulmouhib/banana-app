import { PLAYERS_DATA } from 'db/data';
import { type Player } from 'models/Player/player.types';

import { TOP_RANK } from './constants';

export const mapPlayerDataToTable = (player: Player): string[] => {
  return [player.name, player.rank.toString(), player.nbrOfBananas.toString()];
};

export const TOP_LEADER_BOARD_TABLE = [...PLAYERS_DATA]
  .slice(0, TOP_RANK)
  .map(mapPlayerDataToTable);

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
        player.name.toLocaleLowerCase().trim() ===
        searchedName.toLocaleLowerCase().trim()
      ) {
        if (player.rank <= TOP_RANK) {
          leaderBoardTable = TOP_LEADER_BOARD_TABLE;
          searchedPlayerIndex = player.rank - 1;
        } else {
          leaderBoardTable = [
            ...TOP_LEADER_BOARD_TABLE.slice(0, TOP_RANK - 1),
            mapPlayerDataToTable(player)
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

export const LEADER_BOARD_TABLE_SORTED_BY_NAME = [...PLAYERS_DATA]
  .sort((a, b) =>
    a.name
      .trim()
      .toLocaleLowerCase()
      .localeCompare(b.name.trim().toLocaleLowerCase())
  )
  .map(mapPlayerDataToTable);

export const LEADER_BOARD_TABLE_SORTED_BY_LOWEST_RANK = [...PLAYERS_DATA]
  .sort((a, b) => {
    if (b.rank === a.rank) {
      return a.name
        .trim()
        .toLocaleLowerCase()
        .localeCompare(b.name.trim().toLocaleLowerCase());
    }
    return b.rank - a.rank;
  })
  .map(mapPlayerDataToTable);
