import { StyleSheet } from 'react-native';

import { colors } from 'utils/colors';
import { spacing } from 'utils/constants';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: spacing.L
  },
  dividerContainer: {
    gap: spacing.L,
    width: '100%',
    zIndex: 1
  },
  container: {
    flex: 1,
    paddingHorizontal: spacing.L,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchContainer: {
    flexDirection: 'row',
    gap: spacing.L
  },
  tableContentContainer: {
    marginTop: spacing.L,
    paddingBottom: spacing.XL
  }
});
