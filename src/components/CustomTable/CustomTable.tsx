import React from 'react';
import { FlatList, View, Text } from 'react-native';

import CustomTableRow from 'CustomTableRow/CustomTableRow';
import { translate } from 'locales/i18n';

import styles from './customTable.styles';

interface CustomTableProps {
  rowsHeader: string[];
  rowsData: string[][];
  highlightedRowIndex?: number;
  tableRef?: React.RefObject<FlatList> | null;
}

const CustomTable: React.FC<CustomTableProps> = ({
  rowsData,
  rowsHeader,
  highlightedRowIndex,
  tableRef
}) => {
  const rows = rowsHeader ? [rowsHeader, ...rowsData] : rowsData;
  const getIsHighlighted = (index: number) =>
    highlightedRowIndex ? highlightedRowIndex + 1 === index : false;

  if (rowsData.length > 0) {
    return (
      <FlatList
        ref={tableRef}
        style={styles.flatList}
        data={rows}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <CustomTableRow
            isHeader={
              rowsHeader != null && rowsHeader.length > 0 && index === 0
            }
            columns={item}
            isHighlighted={getIsHighlighted(index)}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
  return (
    <View style={styles.flatList}>
      <CustomTableRow columns={rowsHeader} isHeader />
      <View style={styles.noDataContainer}>
        <Text style={styles.noDataText}>{translate('global.no_data')}</Text>
      </View>
    </View>
  );
};

export default CustomTable;
