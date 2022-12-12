import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../styles/colors';

const height = Dimensions.get('screen').height;

const width = Dimensions.get('screen').width;

const style = StyleSheet.create({
  headerContainer: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
  },
  headerTab: {
    minWidth: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  headerActiveTab: {
    borderBottomWidth: 3,
    borderBottomColor: colors.element_background,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  headerTabText: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.white,
  },
  headerActiveTabText: {
    fontWeight: '600',
  },
  childrenContainer: {
    flex: 1,
  },
  coverSectionContainer: {
    height: height * 0.25,
    marginBottom: 100,
  },
  coverImageContainer: {
    width: width,
    position: 'relative',
  },
  coverImage: {
    borderRadius: 0,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    width: '100%',
    height: 210,
    resizeMode: 'cover',
  },
  rateCoverContainer: {
    position: 'absolute',
    right: 16,
    top: height * 0.2,
    width: 54,
    height: 24,
    backgroundColor: 'rgba(37,40,54,0.32)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  rateText: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: '500',
    color: '#FF8700',
    fontFamily: 'Montserrat',
  },
  detailsContainer: {
    position: 'absolute',
    top: height * 0.16,
    width: Dimensions.get('window').width,
    paddingHorizontal: 24,
  },
  nameContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  movieImage: {
    width: 95,
    height: 120,
    borderRadius: 16,
    resizeMode: 'cover',
    marginRight: 12,
  },
  movieNameText: {
    color: '#fff',
    alignSelf: 'flex-end',
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: '500',
    width: '60%',
  },
  detailsSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subContainerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subContainerText: {
    color: '#92929D',
    marginHorizontal: 8,
  },
});

export default style;
