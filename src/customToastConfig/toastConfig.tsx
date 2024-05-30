/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text } from 'react-native';
import { type ToastConfig } from 'react-native-toast-message';

import { styles } from './toastConfig.styles';

export enum ToastEnum {
  Success = 'success',
  Error = 'error'
}
// TODO: refactor styles

export const toastConfig: ToastConfig = {
  [ToastEnum.Success]: ({ text1, text2 }) => (
    <View style={[styles.toast, styles.success]}>
      {/* <Image source={icons.SUCCESS} /> */}
      <View style={styles.textsContainer}>
        <Text style={[styles.text1, styles.successText1]}>{text1}</Text>
        {!!text2 && (
          <Text style={[styles.text2, styles.successText1]}>{text2}</Text>
        )}
      </View>
    </View>
  ),
  [ToastEnum.Error]: ({ text1, text2 }) => (
    <View style={[styles.toast, styles.error]}>
      {/* <Image source={icons.ALERT} /> */}
      <View style={styles.textsContainer}>
        <Text style={[styles.text1, styles.errorText1]}>{text1}</Text>
        {!!text2 && (
          <Text style={[styles.text2, styles.errorText1]}>{text2}</Text>
        )}
      </View>
    </View>
  )
};
