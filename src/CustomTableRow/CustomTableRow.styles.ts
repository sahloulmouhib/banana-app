import { StyleSheet } from 'react-native';

import { colors } from 'utils/colors';
import { spacing } from 'utils/constants';

// TODO: refactor styles

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    width: '100%',
    borderColor: colors.BLACK
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
    fontSize: 20
  },
  separator: {
    height: '100%',
    width: 1,
    backgroundColor: colors.BLACK
  }
});
