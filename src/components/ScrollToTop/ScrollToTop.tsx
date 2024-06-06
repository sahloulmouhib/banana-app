import React from 'react';
import { TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { colors } from 'utils/colors';

import styles from './scrollToTop.styles';

interface ScrollToTopProps {
  onPress: () => void;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AntDesign name={'up'} size={24} color={colors.WHITE} />
    </TouchableOpacity>
  );
};

export default ScrollToTop;
