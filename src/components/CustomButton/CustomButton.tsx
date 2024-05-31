import React from 'react';
import {
  Image,
  type ImageSourcePropType,
  Text,
  TouchableOpacity,
  type DimensionValue
} from 'react-native';

import styles from './customButton.styles';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  rightIcon?: ImageSourcePropType;
  width?: DimensionValue;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  rightIcon,
  width = '100%'
}) => {
  return (
    <TouchableOpacity style={[styles.container, { width }]} onPress={onPress}>
      <Text style={styles.titleText}>{title}</Text>
      <Image style={styles.icon} source={rightIcon} />
    </TouchableOpacity>
  );
};

export default CustomButton;
