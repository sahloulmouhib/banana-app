import { StyleSheet } from 'react-native';

import { colors } from 'utils/colors';
import { fontSize, spacing } from 'utils/constants';

export default StyleSheet.create({
  arrowIcon: {
    tintColor: colors.PRIMARY
  },
  dropDownPicker: {
    borderWidth: 1,
    borderColor: colors.GREY_LIGHT,
    borderRadius: spacing.M,
    zIndex: 1000
  },
  label: {
    color: colors.BLACK,
    fontSize: fontSize.M
  },
  tickIcon: {
    tintColor: colors.PRIMARY
  }
});
