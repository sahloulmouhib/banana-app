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
  players
    .sort((a, b) => b.nbrOfBananas - a.nbrOfBananas)
    .map((player, index) => {
      player.rank = index + 1;
      return player;
    });
  return players;
};
