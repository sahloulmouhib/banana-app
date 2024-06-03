import { StyleSheet } from 'react-native';

import { fontSize } from 'utils/constants';

export default StyleSheet.create({
  flatList: {
    width: '100%',
    flex: 1
  },
  noDataContainer: {
    flex: 1,
    width: '100%',
    borderWidth: 1,
    borderTopWidth: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noDataText: {
    fontSize: fontSize.L
  }
});
