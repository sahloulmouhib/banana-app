import { StyleSheet } from 'react-native';

import { colors } from 'utils/colors';
import { fontSize, spacing } from 'utils/constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    gap: spacing.S,
    paddingVertical: spacing.L,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  image: {
    width: 60,
    height: 60
  },
  title: {
    fontSize: fontSize.XL,
    fontWeight: '600',
    color: colors.PRIMARY
  }
});
