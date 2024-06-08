import { useCallback, useRef, useState } from 'react';
import {
  type FlatList,
  type NativeSyntheticEvent,
  type NativeScrollEvent
} from 'react-native';

import { SCROLL_TO_TOP_THRESHOLD } from 'utils/constants';

const useHandleCustomTableRowFlatList = () => {
  const tableRef = useRef<FlatList | null>(null);
  const [isScrollToTopVisible, setIsShowScrollToTopVisible] = useState(false);

  const handleScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void =
    useCallback((event) => {
      const scrollPosition = event.nativeEvent.contentOffset.y;
      if (scrollPosition > SCROLL_TO_TOP_THRESHOLD) {
        setIsShowScrollToTopVisible(true);
      } else {
        setIsShowScrollToTopVisible(false);
      }
    }, []);

  const scrollToTop = () => {
    if (tableRef.current) {
      tableRef.current.scrollToIndex({ index: 0, animated: true });
    }
  };

  return {
    tableRef,
    isScrollToTopVisible,
    handleScroll,
    scrollToTop
  };
};

export default useHandleCustomTableRowFlatList;
