import { decodePlayers } from 'models/Player/player.transformers.';
import { type PlayerResponse } from 'models/Player/player.types';

import PLAYERS_DATA_RESPONSE from './leaderboard.json';

export const PLAYERS_DATA = decodePlayers(
  PLAYERS_DATA_RESPONSE as Record<string, PlayerResponse>
);
