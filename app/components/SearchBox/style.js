import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    height: 50,
    marginVertical: 16,
    backgroundColor: colors.element_background,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  textInput: {
    height: '100%',
    width: '85%',
    padding: 10,
    borderWidth: 0,
    color: colors.white,
  },
});
