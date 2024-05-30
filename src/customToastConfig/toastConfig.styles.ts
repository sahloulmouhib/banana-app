import { StyleSheet } from 'react-native';

import { colors } from 'utils/colors';
import { spacing } from 'utils/constants';

// TODO: refactor styles

export const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'left'
  },
  textsContainer: {
    gap: 8,
    flex: 1
  },
  text2: {
    fontSize: 14,
    textAlign: 'left'
  },
  toast: {
    padding: 16,
    borderRadius: 8,
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
