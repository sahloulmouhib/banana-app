import { StyleSheet } from 'react-native';

import { colors } from 'utils/colors';
import { spacing } from 'utils/constants';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: spacing.XL,
    right: spacing.L,
    zIndex: 1000,
    cursor: 'pointer',
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: colors.PRIMARY,
    opacity: 0.8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
