import { StyleSheet } from 'react-native';

import { colors } from 'utils/colors';
import { fontSize } from 'utils/constants';

export default StyleSheet.create({
  arrowIcon: {
    tintColor: colors.PRIMARY
  },
  dropDownPicker: {
    borderWidth: 1,
    borderColor: colors.GREY_LIGHT,
    zIndex: 1000
  },
  label: {
    color: colors.BLACK,
    fontSize: fontSize.S
  },
  tickIcon: {
    tintColor: colors.PRIMARY
  }
});
