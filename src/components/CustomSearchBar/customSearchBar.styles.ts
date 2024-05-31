import { StyleSheet } from 'react-native';

import { colors } from 'utils/colors';
import { IS_IOS, fontSize, spacing } from 'utils/constants';

export default StyleSheet.create({
  container: {
    paddingHorizontal: spacing.M,
    paddingVertical: IS_IOS ? spacing.M : 0,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.BLACK,
    borderRadius: spacing.S,
    flexDirection: 'row',
    flex: 1,
    gap: spacing.M,
    alignItems: 'center'
  },
  textInput: {
    color: colors.BLACK,
    fontSize: fontSize.M
  }
});
