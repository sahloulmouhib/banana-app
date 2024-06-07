import React from 'react';
import { View, Text, Image } from 'react-native';

import { translate } from 'locales/i18n';
import { images } from 'utils/images';

import styles from './leaderBoardHeader.styles';

const LeaderBoardHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={images.EATING} style={styles.image} />
      <Text style={styles.title}>{translate('leader_board.title')}</Text>
      <Image source={images.EATING} style={styles.image} />
    </View>
  );
};

export default LeaderBoardHeader;
