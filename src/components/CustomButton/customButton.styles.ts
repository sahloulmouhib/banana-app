import { StyleSheet } from 'react-native';

import { colors } from 'utils/colors';
import { fontSize, spacing } from 'utils/constants';

export default StyleSheet.create({
  container: {
    padding: spacing.M,
    gap: spacing.S,
    justifyContent: 'center',
    borderRadius: spacing.S,
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleText: {
    flex: 1,
    fontSize: fontSize.M,
    textAlign: 'center',
    color: colors.WHITE,
    fontWeight: 'bold'
  },
  icon: {
    tintColor: colors.WHITE
  }
});
