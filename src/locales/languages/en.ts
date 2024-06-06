export const en = {
  global: {
    no_data: 'Player not found, Try again!',
    try_again: 'Try again'
  },
  error: {
    something_went_wrong: 'Try again, something went wrong'
  },
  leader_board: {
    rows_header: {
      one: 'Name',
      two: 'Rank',
      three: 'Number of bananas'
    },
    user_not_found: {
      title: 'Player not found',
      description:
        'This user name does not exist! Please specify an existing user name!'
    },
    search_player: 'Search player...',
    search: 'Search'
  }
};

export default en;
export type TranslationsType = typeof en;
