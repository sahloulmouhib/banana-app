import { type Player, type PlayerResponse } from './player.types';

export const decodePlayer = (response: PlayerResponse): Player => {
  return {
    id: response.uid,
    name: response.name,
    nbrOfBananas: response.bananas,
    rank: 0
  };
};

export const decodePlayers = (
  response: Record<string, PlayerResponse>
): Player[] => {
  const players: Player[] = [];
  const playersResponse = Object.values(response);
  playersResponse.forEach(
    (item) => item.name !== '' && players.push(decodePlayer(item))
  );
  players.sort((a, b) => {
    if (b.nbrOfBananas === a.nbrOfBananas) {
      return a.name
        .trim()
        .toLocaleLowerCase()
        .localeCompare(b.name.trim().toLocaleLowerCase());
    }
    return b.nbrOfBananas - a.nbrOfBananas;
  });

  let previousBananas: null | number = null;
  let previousRank = 0;
  players.forEach((player, index) => {
    if (player.nbrOfBananas === previousBananas) {
      player.rank = previousRank;
    } else {
      player.rank = index + 1;
      previousRank = player.rank;
      previousBananas = player.nbrOfBananas;
    }
  });

  return players;
};
