import { StyleSheet } from 'react-native';

import { colors } from 'utils/colors';
import { fontSize, spacing } from 'utils/constants';

export default StyleSheet.create({
  flatList: {
    width: '100%',
    flex: 1
  },
  noDataContainer: {
    flex: 1,
    width: '100%',
    borderWidth: 1,
    borderColor: colors.GREY_LIGHT,
    borderBottomLeftRadius: spacing.M,
    borderBottomRightRadius: spacing.M,
    borderTopWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.L
  },
  noDataText: {
    fontSize: fontSize.M,
    color: colors.GREY
  },
  noDataImage: {
    tintColor: colors.GREY,
    width: 70,
    height: 70
  }
});
