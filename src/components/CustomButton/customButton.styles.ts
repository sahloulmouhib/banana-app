import { StyleSheet } from 'react-native';

import { colors } from 'utils/colors';
import { spacing } from 'utils/constants';

// TODO: refactor styles
export default StyleSheet.create({
  container: {
    padding: spacing.M,
    gap: spacing.S,
    justifyContent: 'center',
    backgroundColor: colors.PRIMARY,
    borderRadius: spacing.S,
    flexDirection: 'row'
  },
  titleText: {
    flex: 1,
    fontSize: 20,
    color: colors.WHITE
  },
  icon: {
    tintColor: colors.WHITE
  }
});
