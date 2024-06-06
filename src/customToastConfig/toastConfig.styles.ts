import { StyleSheet } from 'react-native';

import { colors } from 'utils/colors';
import { fontSize, spacing } from 'utils/constants';

export const styles = StyleSheet.create({
  text1: {
    fontWeight: 'bold',
    fontSize: fontSize.L,
    textAlign: 'left'
  },
  textsContainer: {
    gap: spacing.S,
    flex: 1
  },
  text2: {
    fontSize: fontSize.M,
    textAlign: 'left'
  },
  toast: {
    padding: spacing.M,
    borderRadius: spacing.S,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.S,
    marginHorizontal: spacing.M
  },
  successText1: {
    color: colors.SUCCESS
  },
  success: {
    backgroundColor: colors.SUCCESS_LIGHT,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  errorText1: {
    color: colors.ERROR
  },
  error: {
    backgroundColor: colors.ERROR_LIGHT,
    flexDirection: 'row',
    alignItems: 'flex-start'
  }
});
