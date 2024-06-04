import React from 'react';
import { View, TextInput } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { colors } from 'utils/colors';

import styles from './customSearchBar.styles';

interface CustomSearchBarProps {
  text: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  inputRef?: React.RefObject<TextInput> | null;
}

const CustomSearchBar: React.FC<CustomSearchBarProps> = ({
  onChangeText,
  placeholder,
  text,
  inputRef
}) => {
  return (
    <View style={styles.container}>
      <AntDesign name={'search1'} size={24} color="black" />
      <TextInput
        ref={inputRef}
        style={styles.textInput}
        value={text}
        onChangeText={onChangeText}
        placeholder={placeholder}
        cursorColor={colors.PRIMARY}
      />
    </View>
  );
};

export default CustomSearchBar;
