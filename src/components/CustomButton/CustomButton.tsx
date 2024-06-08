import React from 'react';
import {
  Image,
  type ImageSourcePropType,
  Text,
  TouchableOpacity,
  type DimensionValue
} from 'react-native';

import { colors } from 'utils/colors';
import { DISABLED_OPACITY } from 'utils/constants';

import styles from './customButton.styles';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  rightIcon?: ImageSourcePropType;
  width?: DimensionValue;
  isDisabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  rightIcon,
  width = '100%',
  isDisabled
}) => {
  const containerDisabledStyle = isDisabled
    ? {
        backgroundColor: colors.GREY_LIGHT,
        opacity: DISABLED_OPACITY
      }
    : {
        backgroundColor: colors.PRIMARY
      };

  return (
    <TouchableOpacity
      style={[styles.container, containerDisabledStyle, { width }]}
      onPress={onPress}>
      <Text style={styles.titleText}>{title}</Text>
      <Image style={styles.icon} source={rightIcon} />
    </TouchableOpacity>
  );
};

export default CustomButton;
