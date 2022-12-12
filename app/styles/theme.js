import {Dimensions, Platform, StyleSheet} from 'react-native';
import {colors} from './colors';

const PADDING_CONTAINER = {
  paddingHorizontal: 24,
};

const FLEX_CONTAINER = {
  ...PADDING_CONTAINER,
  flex: 1,
};

const HEADER_CONTAINER = {
  ...PADDING_CONTAINER,
  height:
    Platform.OS === 'android'
      ? Dimensions.get('screen').height * 0.08
      : Dimensions.get('screen').height * 0.12,
  width: Dimensions.get('window').width,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

const BORDER_ELEMENT_RIGHT = {
  borderRightWidth: 1,
  borderRightColor: colors.text_color,
};

export const styles = StyleSheet.create({
  PADDING_CONTAINER,
  FLEX_CONTAINER,
  HEADER_CONTAINER,
  BORDER_ELEMENT_RIGHT,
});
