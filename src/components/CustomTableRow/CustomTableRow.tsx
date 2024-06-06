import React from 'react';
import { View, Text } from 'react-native';

import { colors } from 'utils/colors';
import { spacing } from 'utils/constants';

import styles from './CustomTableRow.styles';

interface CustomTableRowProps {
  columns: string[];
  isHeader?: boolean;
  isHighlighted?: boolean;
  isLasRow?: boolean;
  isFirstRow?: boolean;
  isIndexEven?: boolean;
}

const CustomTableRow: React.FC<CustomTableRowProps> = ({
  columns,
  isHeader,
  isHighlighted,
  isFirstRow,
  isLasRow,
  isIndexEven
}) => {
  const nameTextFontWeight = isHeader || isHighlighted ? '600' : 'normal';
  const nameTextColor = isHighlighted ? colors.PRIMARY : colors.BLACK;
  const backgroundColorStyle = !isIndexEven
    ? {
        backgroundColor: colors.EVEN
      }
    : {
        backgroundColor: colors.WHITE
      };
  const borderRadiusStyle = isFirstRow
    ? {
        borderTopLeftRadius: spacing.M,
        borderTopRightRadius: spacing.M
      }
    : isLasRow
    ? {
        borderBottomLeftRadius: spacing.M,
        borderBottomRightRadius: spacing.M
      }
    : {};
  return (
    <View style={[styles.container, borderRadiusStyle, backgroundColorStyle]}>
      {columns.map((item, index) => (
        <View key={index} style={styles.nameContainer}>
          <Text
            numberOfLines={2}
            style={[
              styles.nameText,
              {
                fontWeight: nameTextFontWeight,
                color: nameTextColor
              }
            ]}>
            {item}
          </Text>
          {index < columns.length - 1 && <View style={styles.separator} />}
        </View>
      ))}
    </View>
  );
};

export default CustomTableRow;
