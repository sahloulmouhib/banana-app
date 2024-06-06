import React from 'react';
import { View, Text, Image } from 'react-native';

import { images } from 'utils/images';

import styles from './leaderBoardHeader.styles';

const LeaderBoardHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={images.EATING} style={styles.image} />
      {/* // TODO: Add a title to the leaderboard */}
      <Text style={styles.title}>Banana Leaderboard</Text>
      <Image source={images.EATING} style={styles.image} />
    </View>
  );
};

export default LeaderBoardHeader;
