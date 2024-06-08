import React from 'react';
import {
  FlatList,
  View,
  Text,
  Image,
  type ListRenderItemInfo,
  type NativeScrollEvent,
  type NativeSyntheticEvent
} from 'react-native';

import { translate } from 'locales/i18n';
import { images } from 'utils/images';

import CustomTableRow from '../CustomTableRow/CustomTableRow';

import styles from './customTable.styles';

interface CustomTableProps {
  rowsHeader: string[];
  rowsData: string[][];
  highlightedRowIndex?: number;
  tableRef?: React.RefObject<FlatList> | null;
  contentContainerStyle?: Record<string, unknown>;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}

const CustomTable: React.FC<CustomTableProps> = ({
  rowsData,
  rowsHeader,
  highlightedRowIndex,
  tableRef,
  contentContainerStyle,
  onScroll
}) => {
  const rows = rowsHeader ? [rowsHeader, ...rowsData] : rowsData;
  const getIsHighlighted = (index: number) =>
    highlightedRowIndex ? highlightedRowIndex + 1 === index : false;

  const renderItem = ({ item, index }: ListRenderItemInfo<string[]>) => {
    return (
      <CustomTableRow
        isHeader={rowsHeader != null && rowsHeader.length > 0 && index === 0}
        columns={item}
        isFirstRow={index === 0}
        isLasRow={index === rows.length - 1}
        isIndexEven={index % 2 === 0}
        isHighlighted={getIsHighlighted(index)}
      />
    );
  };

  if (rowsData.length > 0) {
    return (
      <FlatList
        contentContainerStyle={contentContainerStyle}
        ref={tableRef}
        style={styles.flatList}
        scrollEventThrottle={16}
        onScroll={onScroll}
        data={rows}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(_item, index) => index.toString()}
      />
    );
  }
  return (
    <View style={[styles.flatList, contentContainerStyle]}>
      <CustomTableRow
        columns={rowsHeader}
        isHeader
        isFirstRow
        isIndexEven={true}
      />
      <View style={styles.noDataContainer}>
        <Image source={images.EMPTY_LIST} style={styles.noDataImage} />
        <Text style={styles.noDataText}>{translate('global.no_data')}</Text>
      </View>
    </View>
  );
};

export default CustomTable;
