import { StyleSheet } from 'react-native';

import { colors } from 'utils/colors';
import { fontSize, spacing } from 'utils/constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    width: '100%',
    borderColor: colors.GREY_LIGHT
  },
  nameContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  nameText: {
    padding: spacing.S,
    flex: 1,
    textAlign: 'center',
    fontSize: fontSize.L
  },
  separator: {
    height: '100%',
    width: 1,
    backgroundColor: colors.GREY_LIGHT
  }
});
