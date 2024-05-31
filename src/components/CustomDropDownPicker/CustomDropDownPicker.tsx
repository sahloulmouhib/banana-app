import React, { useState } from 'react';
import {
  type DimensionValue,
  type StyleProp,
  type ViewStyle
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { type DropDownItem } from 'utils/types';

import styles from './customDropDownPickerStyles.phone';

interface CustomDropDownPickerProps {
  value: any;
  setValue: (value: any) => void;
  items: Array<DropDownItem<any>>;
  placeholder?: string;
  width?: DimensionValue;
}

const CustomDropDownPicker: React.FC<CustomDropDownPickerProps> = ({
  items,
  width,
  placeholder,
  value,
  setValue
}: CustomDropDownPickerProps) => {
  const [open, setOpen] = useState(false);

  const [dropDownItems, setDropDownItems] = useState(items);

  return (
    <DropDownPicker
      style={styles.dropDownPicker}
      arrowIconStyle={styles.arrowIcon as StyleProp<ViewStyle>}
      containerStyle={{
        width: width ?? '100%'
      }}
      textStyle={styles.label}
      dropDownContainerStyle={styles.dropDownPicker}
      placeholder={placeholder}
      open={open}
      value={value}
      tickIconStyle={styles.tickIcon as StyleProp<ViewStyle>}
      items={dropDownItems}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setDropDownItems}
    />
  );
};

export default CustomDropDownPicker;
