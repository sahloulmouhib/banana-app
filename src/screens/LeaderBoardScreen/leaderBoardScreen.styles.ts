import { StyleSheet } from 'react-native';

import { colors } from 'utils/colors';
import { spacing } from 'utils/constants';

export default StyleSheet.create({
  safeArea: {
    flex: 1
  },
  dividerContainer: {
    gap: spacing.L,
    width: '100%',
    zIndex: 1
  },
  container: {
    padding: spacing.M,
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchContainer: {
    flexDirection: 'row',
    gap: spacing.L
  },
  tableContentContainer: {
    marginVertical: spacing.L
  }
});
