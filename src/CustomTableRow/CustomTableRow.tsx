import React from 'react';
import { View, Text } from 'react-native';

import { colors } from 'utils/colors';

import styles from './CustomTableRow.styles';

interface CustomTableRowProps {
  columns: string[];
  isHeader?: boolean;
  isHighlighted?: boolean;
}

const CustomTableRow: React.FC<CustomTableRowProps> = ({
  columns,
  isHeader,
  isHighlighted
}) => {
  const nameTextFontWeight = isHeader || isHighlighted ? 'bold' : 'normal';
  const nameTextColor = isHighlighted ? colors.PRIMARY : colors.BLACK;
  return (
    <View style={styles.container}>
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
