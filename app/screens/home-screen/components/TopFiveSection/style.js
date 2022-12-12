import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height * 0.29,
    paddingLeft: 16,
  },
  listItemContainer: {
    marginRight: 30,
  },
  itemImage: {
    borderRadius: 16,
    position: 'relative',
    width: 144,
    height: 210,
  },
  itemNumber: {
    position: 'absolute',
    bottom: -5,
    left: -18,
    color: '#242A32',
    textShadowColor: '#0296E5',
    textShadowRadius: 1,
    fontSize: 96,
    fontWeight: '600',
  },
});
