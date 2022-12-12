import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export default StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  listItem: {
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 120,
  },
  itemImage: {
    width: 95,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 16,
  },
  itemDetailsContainer: {
    width: '65%',
    justifyContent: 'space-between',
  },
  itemNameContainer: {flexDirection: 'row'},
  itemText: {
    color: colors.white,
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 8,
  },
  itemRateText: {
    color: colors.rate_color,
    fontSize: 14,
    fontWeight: '500',
  },
  itemContainer: {
    flexDirection: 'row',
    marginVertical: 2,
  },
  itemName: {
    fontSize: 16,
  },
});
