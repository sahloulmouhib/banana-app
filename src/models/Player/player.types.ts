export interface PlayerResponse {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
}
export interface Player {
  id: string;
  name: string;
  nbrOfBananas: number;
  rank: number;
}
