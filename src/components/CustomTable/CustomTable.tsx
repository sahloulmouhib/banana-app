import React from 'react';
import { FlatList } from 'react-native';

import CustomTableRow from 'CustomTableRow/CustomTableRow';

import styles from './customTable.styles';

interface CustomTableProps {
  rowsHeader?: string[];
  rowsData: string[][];
  highlightedRowIndex?: number;
}

const CustomTable: React.FC<CustomTableProps> = ({
  rowsData,
  rowsHeader,
  highlightedRowIndex
}) => {
  const rows = rowsHeader ? [rowsHeader, ...rowsData] : rowsData;
  const getIsHighlighted = (index: number) =>
    highlightedRowIndex ? highlightedRowIndex + 1 === index : false;
  return (
    <FlatList
      style={styles.flatList}
      data={rows}
      renderItem={({ item, index }) => (
        <CustomTableRow
          isHeader={rowsHeader != null && rowsHeader.length > 0 && index === 0}
          columns={item}
          isHighlighted={getIsHighlighted(index)}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default CustomTable;
