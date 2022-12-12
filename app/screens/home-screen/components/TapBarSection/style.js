import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../../styles/colors';

const style = StyleSheet.create({
  headerContainer: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
  },
  headerTab: {
    minWidth: 120,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headerActiveTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#3A3F47',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  headerTabText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
  },
  headerActiveTabText: {
    fontWeight: '600',
    color: colors.white,
  },
  childrenContainer: {
    flex: 1,
  },
  tabBodyContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  tabItemContainer: {marginTop: 20},
  tabItemImage: {
    resizeMode: 'cover',
    width: 100,
    height: 145,
    borderRadius: 24,
  },
});

export default style;
