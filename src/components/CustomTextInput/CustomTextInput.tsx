import React from 'react';
import { View, TextInput } from 'react-native';

import { colors } from 'utils/colors';

import styles from './customTextInput.styles';

interface CustomTextInputProps {
  text: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  onChangeText,
  placeholder,
  text
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={colors.GREY_LIGHT}
        value={text}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.textInput}
      />
    </View>
  );
};

export default CustomTextInput;
